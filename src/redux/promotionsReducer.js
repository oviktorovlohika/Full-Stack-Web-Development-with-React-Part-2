import { PROMOTIONS } from '../mocks/promotions';
import { FETCH_PROMOS } from './types';

const initialState = {
   promotions: PROMOTIONS,
}

export const promotionsReducer = (state = initialState, action) => {
   return state
}

// export const promotionsReducer = (state = { promotions: [], fetchedpromo: []}, action) => {
//    switch (action.type) {
//      case FETCH_PROMOS:
//        return {...state, fetchedpromo: action.payload}  
//      default:
//        return state;
//    }
//  }