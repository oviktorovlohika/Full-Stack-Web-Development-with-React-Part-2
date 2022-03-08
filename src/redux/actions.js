import { ADD_COMMENT } from "./types";

export const addComments = (dishId, rating, author, comment) => ({
   type: ADD_COMMENT,
   dishId,
   rating,
   author,
   comment
});