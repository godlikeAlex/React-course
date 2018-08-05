import React,{Component}from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import counter from "../reducer/counter";
import {increment} from "../AC";

class Counter extends Component{
    static propTypes = {
        counter: PropTypes.number
    }

    render(){
        return(
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>CLick me</button>
            </div>
        )
    }
    handleIncrement = ()=>{
        this.props.increment()
    }

}

export default connect((state)=>({
    counter: state.count
}),{increment})(Counter);