

import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';



import api from './components/routes/api';

import blogs from './components/routes/blogs';

import create from './components/routes/create';

import display from './components/routes/display';



class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Route exact path='/' component={api} />

          <Route path='/create-blog' component={blogs} />

          <Route path='/edit-blog/:id' component={create} />

          <Route path='/display-blog/:id' component={display} />

        </div>
      </Router>
    );
  }
}

export default App;