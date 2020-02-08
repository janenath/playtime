import React, { Component } from 'react';
import Clothes from './components/Clothes'
import Modal from './components/Modal'
import './main.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      addMode: false,
      showModal: false,
      formInputs: {
        image: '',
        category: '',
        selected: ''
      }
    }
  }
  componentDidMount() {
    this.getItems()
  }

  getItems = () => {
    fetch('http://localhost:3000/items')
    .then(response => response.json())
    .then(json => this.setState({items: json}))
    .catch(error => console.log(error))
  }

  addItems = () => {
    this.setState({
      addMode: !this.state.addMode})
  }
  handleReRender = () => {
    this.forceUpdate();
  }
  delete = (id, index) => {
		fetch('http://localhost:3000/items/' + id, {
			method: 'DELETE'
		}).then((data) => {
			this.setState({
				items: [ ...this.state.items.slice(0, index), ...this.state.items.slice(index + 1) ]
			});
		});
  };

  update = (item, index) => {
    item.selected = !item.selected
    fetch('http://localhost:3000/items/' + item.id, {
      body: JSON.stringify(item),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedItem => {
        console.log(updatedItem)
        return updatedItem.json()
      })
      
      .then(jsonedItem => {
        console.log(jsonedItem)
        fetch('http://localhost:3000/items/')
          .then(response => response.json())
          .then(items => {
            this.setState({ items: items })
          })
      })
  }

  handleChange = (event) => {
    const updateInput = Object.assign( this.state.formInputs, {[event.target.id]: event.target.value})
    console.log(updateInput)
    this.setState(updateInput)
  }

  handleSubmit = (event) => {

    console.log('submitted')
    event.preventDefault()
    let newProduct = this.state.formInputs
    newProduct.selected=false
    fetch('http://localhost:3000/items', {
      body: JSON.stringify(newProduct),
      method: 'POST',
      headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
    }
  })
   .then(createdItem => {
     console.log(createdItem)
     return createdItem.json()
    })
   .then(jsonedItem => {
    console.log(jsonedItem)
     this.setState({
        formInputs: {
          image: '',
          category: '',
          selected: false
        },
        addMode: false,
        items: [jsonedItem, ...this.state.items]
     })
   })
   .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <h1>capsule</h1>
          </header>
          <main>
            <Modal showModal={this.state.showModal}/>
            <button onClick={this.addItems}>{this.state.addMode ? <h5>-</h5> : <h5>+</h5>}</button>
            <div className="form">
              {this.state.addMode ? 
                <form onSubmit={this.handleSubmit}>
                    <h4>add new item</h4> 
                    <h5>category:</h5>
                    <select id="category" value={this.state.formInputs.category} onChange={this.handleChange}>
                      <option selected value="select category">select category</option>
                      <option value="shirts"> shirts </option>
                      <option value="pants"> pants </option>
                      <option value="dresses"> dresses </option>
                      <option value="jackets"> jackets </option>
                      <option value="accessories"> accessories </option>
                      <option value="shoes"> shoes </option>
                    </select>
                    <br/>
                    <h5>image link:</h5>
                    <input type="text" id="image" value={this.state.formInputs.content} onChange={this.handleChange}/><br/>                  
                    <input className="submit" type="submit" value="Submit"/>
                </form>
                : ''}
                </div>
            <Clothes items={this.state.items} delete={this.delete} update={this.update} handleReRender={this.handleReRender}/>
          </main>
        </div>
      </div>
    )
  }

}

export default App;


