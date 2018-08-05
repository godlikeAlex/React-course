import {normalizedComments as defaultComments} from '../fixtures';

export default (commentsState = defaultComments,action)=>{
    const {type, payload} = action;
    switch (type){
        default: return commentsState
    }

}