import React, {Component } from 'react';
import Toys from './components/Toys'
import './main.css';

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
          <header>
            <h1>Playtime</h1>
            <nav>
              <ul>
                <li><a href="/toys">Home</a></li>
                <li><a href="/toylist">Toy List</a></li>
              </ul>
            </nav>
          </header>
          <main>
            <Toys toys={this.state.toys}/>
          </main>
        </div>
      </div>
    )
  }

}

export default App;


