import React, { Component } from 'react';
import Clothes from './components/Clothes'
import Modal from './components/Modal'
import './main.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clothes: [],
      addMode: false,
      showModal: false,
      formInputs: {
        image: '',
        category: ''
      }
    }
  }
  componentDidMount() {
    this.getClothes()
  }

  getClothes = () => {
    fetch('http://localhost:3000/items')
    .then(response => response.json())
    .then(json => this.setState({clothes: json}))
    .catch(error => console.log(error))
  }

  addClothes = () => {
    this.setState({
      addMode: !this.state.addMode})
  }

  handleChange = (event) => {
    const updateInput = Object.assign( this.state.formInputs, {[event.target.id]: event.target.value})
    this.setState(updateInput)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/items', {
      body: JSON.stringify(this.state.formInputs),
      method: 'POST',
      headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
    }
  })
   .then(createdItem => {
     return createdItem.json()
    })
   .then(jsonedItem => {
     this.setState({
        formInputs: {
          image: '',
          category: ''
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
            <button onClick={this.addClothes}>{this.state.addMode ? <h5>-</h5> : <h5>+</h5>}</button>
            <div className="form">
              {this.state.addMode ? 
                <form onSubmit={this.handleSubmit}>
                    <h4>add new item</h4> 
                    <h5>category:</h5>
                    <select value={this.state.formInputs.category} onChange={this.handleChange}>
                      <option selected value="shirt"> shirts </option>
                      <option value="pants"> pants </option>
                      <option value="shirt"> dresses </option>
                      <option value="shirt"> jackets </option>
                      <option value="shirt"> accessories </option>
                      <option value="shirt"> shoes </option>
                    </select>
                    <br/>
                    <h5>image link:</h5>
                    <input type="text" id="content" value={this.state.formInputs.image} onChange={this.handleChange}/><br/>
                    <input className="submit" type="submit" value="Submit"/>
                </form>
                : ''}
                </div>
            <Clothes clothes={this.state.clothes}/>
          </main>
        </div>
      </div>
    )
  }

}

export default App;


