import React, {Component} from "react";
import Comment from './comment';
import toogleOpen from '../decarators/toogleOpen';


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
            {comments.map(comment => <div li={comment.id}><Comment comment={comment} /></div>)}
        </div>
        }

        
    }
    

}

export default toogleOpen(CommentList);

