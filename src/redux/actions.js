import { ADD_COMMENT, ADD_DISHES, DISHES_FAILED, DISHES_LOADING, FETCH_DISHES, HIDE_LOADER, SHOW_LOADER } from "./types";

export const addComments = (dishId, rating, author, comment) => ({
   type: ADD_COMMENT,
   dishId,
   rating,
   author,
   comment
});

export const fetchDishes = () => (dispatch) => {
   dispatch(dishesLoading(true));

   setTimeout(() => {
      dispatch(addDishes(ADD_DISHES));
   }, 2000);
}

export const dishesLoading = () => ({
   type: DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
   type: DISHES_FAILED,
   payload: errmess
});

export const addDishes = (dishes) => ({
   type: ADD_DISHES,
   payload: dishes
});

export function showLoader() {
   return {
      type: SHOW_LOADER
   }
}

export function hideLoader() {
   return {
      type: HIDE_LOADER
   }
}

export function fetchPosts() {
   return async dispatch => {
      dispatch(showLoader())
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      const json = await response.json()
      setTimeout(() => {
         dispatch({type: FETCH_DISHES, payload: json})
      dispatch(hideLoader())
      }, 500);
   }
}