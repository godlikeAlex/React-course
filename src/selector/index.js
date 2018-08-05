import {createSelector} from 'reselect';

//Getters

const filterGetter = state => state.filter;
const articlesGetter = state => state.articles;

export const filtredArticlesSelector = createSelector(filterGetter,articlesGetter, (filter,articles)=>{
    const {selected} = filter;

    return articles.filter(article => {
        return (!selected.length || selected.includes(article.id))
    });
});