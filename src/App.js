import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import 'react-select/dist/react-select.css';
import store from './store';
import {Provider} from 'react-redux';

=======
import {articles} from './fixtures'
>>>>>>> origin/master


// components 

import Header from './components/header';
import Articlelist from './components/articlesList';




class App extends Component {
<<<<<<< HEAD


    render() {

        return (
            <Provider store = {store}>
              <div className="App">
                <Header name='GODLIKE' />
                <Articlelist />
              </div>
            </Provider>
=======
  render() {
    return (
      <div className="App">
        <Header name='GODLIKE' />
        <Articlelist articles = {articles} />
      </div>
>>>>>>> origin/master
    );
  }
}



<<<<<<< HEAD

=======
>>>>>>> origin/master
export default App;
