import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Link} from 'react-router-dom'
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import User from "./User";
import NotMatch from "./NotMatch";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
       <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/about' component={About} />
        <Route exact path='/:user(/d+)' component={User} />
        <Route   component={NotMatch} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
