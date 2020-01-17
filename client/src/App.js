import React, { Fragment } from 'react';
import Navbar from './componets/layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './componets/pages/Home';
import About from './componets/pages/About';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
