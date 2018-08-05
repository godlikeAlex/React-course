import React, { Component } from 'react';
import './App.css';
import 'react-select/dist/react-select.css';
import store from './store';
import {Provider} from 'react-redux';



// components 

import Header from './components/header';
import Articlelist from './components/articlesList';




class App extends Component {


    render() {

        return (
            <Provider store = {store}>
              <div className="App">
                <Header name='GODLIKE' />
                <Articlelist />
              </div>
            </Provider>
    );
  }
}




export default App;
