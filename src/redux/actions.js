import { 
   ADD_COMMENT, 
   ADD_DISHES, 
   DISHES_FAILED, 
   DISHES_LOADING, 
   FETCH_DISHES, 
   FETCH_LEADERS, 
   HIDE_LOADER, 
   SHOW_LOADER ,
   ADD_PROMOS
} from "./types";
import { baseUrl } from "../mocks/baseUrl";

export const addComments = (dishId, rating, author, comment) => ({
   type: ADD_COMMENT,
   dishId,
   rating,
   author,
   comment
});

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

      const response = await fetch(baseUrl + 'dishes')
      const json = await response.json()

      setTimeout(() => {
         dispatch({type: FETCH_DISHES, payload: json})
      dispatch(hideLoader())
      }, 500);
   }
}

export const fetchComments = () => (dispatch) => {    
   return async dispatch => {
      dispatch(showLoader())

      const response = await fetch(baseUrl + 'dishes')
      const json = await response.json()
      
      setTimeout(() => {
         dispatch({type: FETCH_DISHES, payload: json})
      dispatch(hideLoader())
      }, 500);
   }
};

export function fetchDishes() {
   return async dispatch => {
      dispatch(showLoader())

      const response = await fetch(baseUrl + 'dishes')
      const json = await response.json()

      setTimeout(() => {
         dispatch({type: FETCH_DISHES, payload: json})
      dispatch(hideLoader())
      }, 500);
   }
}

export function fetchLeaders() {
   return async dispatch => {
      dispatch(showLoader())

      const response = await fetch(baseUrl + 'leaders')
      const json = await response.json()

      setTimeout(() => {
         dispatch({type: FETCH_LEADERS, payload: json})
      dispatch(hideLoader())
      }, 500);
   }
}

export const addPromos = (promos) => ({
   type: ADD_PROMOS,
   payload: promos
});

export const fetchPromos = () => (dispatch) => {

   return fetch(baseUrl + 'promotions')
   .then(response => response.json())
   .then(promos => dispatch(addPromos(promos)));
}