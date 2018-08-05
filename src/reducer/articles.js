import {DELETE_ARTICLE,SELECTOR} from '../constans'
import {normalizedArticles as defaultArticles} from '../fixtures';

export default (articleState = defaultArticles,action)=>{
    const {type, payload} = action;
    switch (type){
        case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id);
        default: return articleState
    }

}