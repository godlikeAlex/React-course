import React, {Component} from 'react';
import Article from './article';
import accordion from '../decarators/acardion';
import {connect} from 'react-redux';
import {filtredArticlesSelector} from '../selector';

class Articlelist extends Component  {

    render(){
        const {openItemId,toogleOpenItem} = this.props;
        const articleElements = this.props.articles.map(article =>
        <div key ={article.id}>
          <Article article={article} isOpen = {article.id === openItemId} toogleOpen={toogleOpenItem(article.id)} />
        </div> );    
        return (
                <div >
                    {articleElements}
                </div>
            )
    }
}



export default connect((store) => {

    return {
        articles: filtredArticlesSelector(store)
    }
})(accordion(Articlelist))