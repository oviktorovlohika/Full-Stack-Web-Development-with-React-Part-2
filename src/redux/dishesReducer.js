import { ADD_DISHES, DISHES_LOADING, DISHES_FAILED, FETCH_DISHES } from './types';
import { DISHES } from '../mocks/dishes';

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

export const postsReducer = (state = { posts: [], fetchedPosts: []}, action) => {
  switch (action.type) {
    case FETCH_DISHES:
      return {...state, fetchedPosts: action.payload}  
    default:
      return state;
  }
}