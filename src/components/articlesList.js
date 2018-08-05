import React, {Component} from 'react';
import Article from './article';
import accordion from '../decarators/acardion';
<<<<<<< HEAD
import {connect} from 'react-redux';
import {filtredArticlesSelector} from '../selector';
=======
>>>>>>> origin/master

class Articlelist extends Component  {

    render(){
<<<<<<< HEAD
        const {openItemId,toogleOpenItem} = this.props;
=======
        const {articles,openItemId,toogleOpenItem} = this.props;
>>>>>>> origin/master
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

<<<<<<< HEAD


export default connect((store) => {

    return {
        articles: filtredArticlesSelector(store)
    }
})(accordion(Articlelist))
=======
export default accordion(Articlelist);
>>>>>>> origin/master
