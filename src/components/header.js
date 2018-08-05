import React, { Component } from 'react';
import Menu from './menu';
<<<<<<< HEAD
import Calendar from './FIlter/calendar';
import 'react-day-picker/lib/style.css';
import Selector from './FIlter/selector';

=======
>>>>>>> origin/master

export default class Header extends Component{
    render(){
        return(
        <header className="App-header">
          <Menu />
          <h1 className="App-title">{this.props.name}</h1>
<<<<<<< HEAD
            <Calendar />
            <Selector />
=======
>>>>>>> origin/master
        </header>
        )
    }
  }
