import React, { Component } from 'react';
import HouseList from "../HouseList/HouseList";
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          
        </header>
        <section>
          <HouseList />
        </section>
      </div>
    );
  }
}

export default App;
