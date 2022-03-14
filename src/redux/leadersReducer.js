import { FETCH_LEADERS } from './types';

export const leadersReducer = (state = { leaders: [], fetchedLeaders: []}, action) => {
   switch (action.type) {
     case FETCH_LEADERS:
       return {...state, fetchedLeaders: action.payload}  
     default:
       return state;
   }
 }