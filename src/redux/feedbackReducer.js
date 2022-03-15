import { ADD_FEEDBACK } from "./types";

export const feedbackReducer = (state = [], { firstname, lastname, telnum, email, type}) => {
   switch (type) {
     case ADD_FEEDBACK:
       return [...state, {
         firstname,
         lastname,
         email,
         telnum,
      }];
 
     default:
       return state;
   }
  }