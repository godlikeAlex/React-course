import React from 'react';


export default Component => class accordion extends React.Component {
    state = {
        openItemId: null
    }

    render(){
        return <Component {...this.props} toogleOpenItem = {this.toogleOpenItem} openItemId = {this.state.openItemId} />
    }

    toogleOpenItem = openItemId => ev =>    {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    } 
}