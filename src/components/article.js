import React, { Component } from 'react';
import CommentList from './commentList';
import PropTypes from 'prop-types'
import toogleOpen from '../decarators/toogleOpen';




export default class Article extends Component {
    
    static propTypes ={
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }


        
    render(){
        const {article,isOpen,toogleOpen} = this.props
        return (
            <div className='article_block'>
                <div className='article_block__name'>
                    {article.title}
                </div>
                <button onClick= {toogleOpen}>
                    {isOpen ? 'close':'open'}
                </button>
                {this.getBody()}

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
            <CommentList comments = {article.comments} />
            </section>
        )
        
    }
}

