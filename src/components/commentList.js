import React, {Component} from "react";
import Comment from './comment';
import toogleOpen from '../decarators/toogleOpen';
import FormComment from './comentForm';
import {connect} from 'react-redux';


class CommentList extends Component {

    render (){
        const {isOpen, toogle} = this.props;
        return(
            <div>
                <button onClick={toogle}>
                    {isOpen ? 'hide' : 'show'}
                </button>
                {this.getComents()}
            </div>
        )
    }
    getComents(){
        const {comments,isOpen} = this.props;
        if(!isOpen) {
            return null
        }
        if (!comments || !comments.length){
            return <p>Comments not yet</p>
        }else{
        return <div>
            <FormComment/>
            {comments.map(id => <div key={id}><Comment id={id} /></div>)}
        </div>
        }


    }


}

export default toogleOpen(CommentList);

