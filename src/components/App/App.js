import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";

class App extends Component {
  constructor() {
    super();

    this.state = {
      houses: [],
      newHouse: ''
    }
  }

  async componentDidMount() {
    const result = await fetch('/houses');
    const data = await result.json();

    const prevState = this.state;
    const newState = { houses: data.results };
    const nextState = Object.assign({}, prevState, newState);
    this.setState(nextState);
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
