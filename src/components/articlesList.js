import React, {Component} from 'react';
import Article from './article';
import accordion from '../decarators/acardion';

class Articlelist extends Component  {

    render(){
        const {articles,openItemId,toogleOpenItem} = this.props;
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

export default accordion(Articlelist);