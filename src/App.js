import React, { Component } from 'react';
import './App.css';
import {articles} from './fixtures'


// components 

import Header from './components/header';
import Articlelist from './components/articlesList';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name='GODLIKE' />
        <Articlelist articles = {articles} />
      </div>
    );
  }
}



export default App;
