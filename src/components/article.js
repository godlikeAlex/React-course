import React, { Component } from 'react';
import CommentList from './commentList';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux';
import {deleteArticle} from "../AC";

class Article extends Component {
=======
import PropTypes from 'prop-types'
import toogleOpen from '../decarators/toogleOpen';




export default class Article extends Component {
>>>>>>> origin/master
    
    static propTypes ={
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
<<<<<<< HEAD
    };
=======
    }
>>>>>>> origin/master


        
    render(){
<<<<<<< HEAD
        const {article,isOpen,toogleOpen} = this.props;
=======
        const {article,isOpen,toogleOpen} = this.props
>>>>>>> origin/master
        return (
            <div className='article_block'>
                <div className='article_block__name'>
                    {article.title}
                </div>
                <button onClick= {toogleOpen}>
                    {isOpen ? 'close':'open'}
                </button>
<<<<<<< HEAD
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.getBody()}
                </CSSTransitionGroup>
=======
                {this.getBody()}
>>>>>>> origin/master

            </div>
        )
    }

    getBody() {
        const {article,isOpen} = this.props;
        
        if(!isOpen){
            return null
        }
        
        return(
            <section>
            <div className='article_block__article-text'>
                {article.text}
            </div>
<<<<<<< HEAD
                <button onClick={this.handleDelete}>Delete article</button>
=======
>>>>>>> origin/master
            <CommentList comments = {article.comments} />
            </section>
        )
        
    }
<<<<<<< HEAD

    handleDelete = ()=>{
        const {deleteArticle,article} = this.props;
        deleteArticle(article.id);
        console.log('article was deleted')
    }
}

export default connect(null,{ deleteArticle } )(Article);

=======
}

>>>>>>> origin/master
