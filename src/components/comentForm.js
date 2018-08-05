import React, {Component} from 'react';

export default class FormComment extends  Component {
    state = {
        user : '',
        text: ''
    }

    render(){

        return(
            <form>
                <div className='comments__form'>
                    <label>Name</label>
                    <input type='text'
                           value={this.state.user}
                           onChange={this.getUserVal} />
                </div>
                <div className='comments__form'>
                    <label>Mail</label>
                    <textarea
                        value={this.state.text}
                        onChange={this.getTextVal} />
                </div>
                <input type='submit' value={'Submit'} />
            </form>
        )

    }

    getUserVal = (e)=>{

        if( e.target.value.length < 5){

            e.target.classList.add('error');
            e.target.classList.remove('access');
        }
        else{
            e.target.classList.add('access');
        }

        if(e.target.value.length > 15 ){
            e.target.classList.add('error');
            e.target.classList.remove('access');
            return null;
        }

        this.setState({user:e.target.value});
    };

    getTextVal = (e)=>{
        if( e.target.value.length < 15){

            e.target.classList.add('error');
            e.target.classList.remove('access');
        }else{
            e.target.classList.add('access');
        }

        if(e.target.value.length > 50 ){
            e.target.classList.add('error');
            e.target.classList.remove('access');
            return null;
        }


        this.setState({text:e.target.value})
    };

};