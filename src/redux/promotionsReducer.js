import { FETCH_PROMOS, PROMOS_FAILED } from './types';

export const promosReducer = (state = { promos: [], fetchedPromos: [], errMess: null}, action) => {
   switch (action.type) {
     case FETCH_PROMOS:
       return {...state, fetchedPromos: action.payload}  
      case PROMOS_FAILED: 
      return {...state, errMess: action.payload}
     default:
       return state;
   }
 }

