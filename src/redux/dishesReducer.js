import { ADD_DISHES, DISHES_LOADING, DISHES_FAILED } from './types';
import { DISHES } from '../mocks/dishes'

// export const dishesReducer = (state = {
//     isLoading: true,
//     errMess: null,
//     dishes: DISHES
//   }, action) => {
   
//   switch (action.type) {
//     case ADD_DISHES:
//       return {...state, isLoading: false, errMess: null, dishes: action.payload}

//     case DISHES_LOADING:
//       return {...state, isLoading: true, errMess: null, dishes: []}

//     case DISHES_FAILED:
//       return {...state, isLoading: false, errMess: action.payload, dishes: []}

//     default:
//        return state;
//  }
// }

export const dishesReducer = (state = { isLoading: true,
  errMess: null,
  dishes: DISHES }, action) => {
  switch (action.type) {
      case ADD_DISHES:
          return {...state, isLoading: false, errMess: null, dishes: action.payload};

      case DISHES_LOADING:
          return {...state, isLoading: true, errMess: null, dishes: []}

      case DISHES_FAILED:
          return {...state, isLoading: false, errMess: action.payload};

      default:
          return state;
  }
};