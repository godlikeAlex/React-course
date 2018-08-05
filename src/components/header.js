import React, { Component } from 'react';
import Menu from './menu';
import Calendar from './FIlter/calendar';
import 'react-day-picker/lib/style.css';
import Selector from './FIlter/selector';


export default class Header extends Component{
    render(){
        return(
        <header className="App-header">
          <Menu />
          <h1 className="App-title">{this.props.name}</h1>
            <Calendar />
            <Selector />
        </header>
        )
    }
  }
