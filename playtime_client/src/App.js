import React, {Component } from 'react';
import Toys from './components/Toys'
import './App.css';

class App extends Component {
  state = {
    toys: []
  }

  componentDidMount() {
    this.getNotices()
  }
  getNotices = () => {
    fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(json => this.setState({toys: json}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <main>
            <Toys toys={this.state.toys}/>
          </main>
        </div>
      </div>
    )
  }

}

export default App;


