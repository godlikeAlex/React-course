import {INCREMENT,DELETE_ARTICLE, SELECTOR, CALENDAR_DATE} from '../constans';

export function increment() {
    return{
        type: INCREMENT
    }
}

export function deleteArticle(id){
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterSelect(selected){
    return{
        type: SELECTOR,
        payload:{selected}
    }
}

export function selectDate(dateRange){
    return{
        type: CALENDAR_DATE,
        payload:{dateRange}
    }
}