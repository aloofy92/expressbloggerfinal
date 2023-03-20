import React, { Component } from 'react';

import { route} from 'react-router-dom';
import './App.css';


import CreateBook from './src/components/CreateBook';
import ShowBookList from './src/components/ShowBookList';
import ShowBookDetails from './src/components/ShowBookDetails';
import UpdateBookInfo from './src/components/UpdateBookInfo';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} />
        </div>
      </Router>
    );
  }
}

export default App;