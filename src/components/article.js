import React, { Component } from 'react';
import CommentList from './commentList';
import { CSSTransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux';
import {deleteArticle} from "../AC";

import PropTypes from 'prop-types'

class Article extends Component {

    static propTypes ={
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired

    };

    render(){

        const {article,isOpen,toogleOpen} = this.props;

        return (
            <div className='article_block'>
                <div className='article_block__name'>
                    {article.title}
                </div>
                <button onClick= {toogleOpen}>
                    {isOpen ? 'close':'open'}
                </button>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.getBody()}
                </CSSTransitionGroup>
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

                <button onClick={this.handleDelete}>Delete article</button>
            <CommentList comments = {article.comments} />
            </section>
        )
        
    }


    handleDelete = ()=>{
        const {deleteArticle,article} = this.props;
        deleteArticle(article.id);
        console.log('article was deleted')
    }
}

export default connect(null,{ deleteArticle } )(Article);



