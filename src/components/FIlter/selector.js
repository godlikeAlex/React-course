import React, { Component } from 'react';
import Select from  'react-select';
import {connect} from 'react-redux';
import {filterSelect} from "../../AC/";

class Selector extends Component {
     state = {
        selection:null
      };
    handleChange = selected => this.props.filterSelect(selected.map(option => option.value))
    render(){
        const { articles, selected } = this.props;
        const options =  articles.map(article =>({
            label: article.title,
            value: article.id
        }));

        return(
            <div>
                <Select options ={options} value = {selected} onChange={this.handleChange} multi={true}/>
            </div>
        )
    }
    changeSelection = (selection)=>{
        this.setState({selection});
        // const {filterSelect} = this.props;
        // filterSelect.map(selection.map(option => option.value));
    };



}

export default connect(state => ({
    selected: state.filter.selected,
    articles: state.articles}),{filterSelect})(Selector)