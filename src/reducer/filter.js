import  {DELETE_ARTICLE,SELECTOR,CALENDAR_DATE} from '../constans';

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) =>{
    const {type,payload} = action;
    switch (type){
        case CALENDAR_DATE:return {...filters, dateRange: payload.dateRange} ;
        case SELECTOR: return{...filters, selected: payload.selected};
        case DELETE_ARTICLE: return filters ;
        default: return filters;
    }
}