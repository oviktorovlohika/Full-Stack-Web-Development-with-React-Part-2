import { ADD_COMMENT, ADD_DISHES, DISHES_FAILED, DISHES_LOADING } from "./types";

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
