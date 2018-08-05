import React, { Component } from 'react'

export default class Menu extends Component {
    render(){
        return(
            <ul className='menu_block'>
                <li>Home</li>
                <li>Hot News</li>
                <li>Main News</li>
                <li>Last News</li>
            </ul>
        )
    }
}