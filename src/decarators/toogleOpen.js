import React, { Component } from 'react';

export default (OriginalComponent) => class WrappedComponent extends Component {
    
    state = {
        toogle:false
    }

    render(){
        return <OriginalComponent {...this.props} isOpen = {this.state.toogle} toogle = {this.toogle} />
    }
    
    toogle = ()=>{
        this.setState({
            toogle: !this.state.toogle
        })
    }
}