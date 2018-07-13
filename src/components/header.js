import React, { Component } from 'react';
import Menu from './menu';

export default class Header extends Component{
    render(){
        return(
        <header className="App-header">
          <Menu />
          <h1 className="App-title">{this.props.name}</h1>
        </header>
        )
    }
  }
