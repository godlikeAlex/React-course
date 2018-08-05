import React, {Component} from "react";
import Comment from './comment';
import toogleOpen from '../decarators/toogleOpen';
<<<<<<< HEAD
import FormComment from './comentForm';
import {connect} from 'react-redux';


class CommentList extends Component {

=======


class CommentList extends Component {
    
>>>>>>> origin/master
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
<<<<<<< HEAD
            <FormComment/>
            {comments.map(id => <div key={id}><Comment id={id} /></div>)}
        </div>
        }


    }

=======
            {comments.map(comment => <div li={comment.id}><Comment comment={comment} /></div>)}
        </div>
        }

        
    }
    
>>>>>>> origin/master

}

export default toogleOpen(CommentList);

