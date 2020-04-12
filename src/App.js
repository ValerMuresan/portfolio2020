import React, { Component } from 'react';
import './css/main.css';
import Header from './components/Header';
import Sidelist from './components/Sidelist';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';


class App extends Component {
  state = {
    openSidelist: false
  }
  toggleHandle = () => {
    this.setState((prevState) => {
      return ({openSidelist: !prevState.openSidelist})
    })
  }
  closeHandler = () => {
    this.setState ({openSidelist: false});
  }
  render () {
    return (
      <Router>
        <div>
          <Header
          toggleHandle={this.toggleHandle}/>
          <Sidelist show={this.state.openSidelist}
          closeHandler={this.closeHandler}/>
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/education' component={Education}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact}/>
          <Route path='*' component={Home}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
