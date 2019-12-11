import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../Header/Header.jsx";
import HomePage from "../HomePage/HomePage.jsx";
import AddHouseForm from "../AddHouseForm/AddHouseForm.jsx";
import HousePage from "../HousePage/HousePage.jsx";
import Footer from "../Footer/Footer.jsx";
import Login from "../Login/Login.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      houses: [],
      newHouse: ''
    }
  }

  async componentDidMount() {
    const result = await fetch('/api/houses');
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
            <Route path="/login" component={Login} />
            <Route exact path="/addHouse" component={AddHouseForm} />
            <Route path="/house/:id" component={HousePage} />
            <Route path="*" component={() => {
              return <div>Opps.. looks like you're lost</div>
            }} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
