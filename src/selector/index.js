import {createSelector} from 'reselect';

//Getters

const filterGetter = state => state.filter;
const articlesGetter = state => state.articles;
const commentGetter = state => state.comments;
const idGetter = (state,props) =>  props.id;

export const filtredArticlesSelector = createSelector(filterGetter,articlesGetter, (filter,articles)=>{
    const {selected} = filter;

    return articles.filter(article => {
        return (!selected.length || selected.includes(article.id))
    });
});

export const commentSelectorFactory = () => createSelector(commentGetter,idGetter,(comments,id)=>{
    return comments[id];
});