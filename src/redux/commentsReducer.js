import { COMMENTS } from '../mocks/comments';
import { ADD_COMMENT, FETCH_COMMENTS } from './types';

export const commentsReducer = (state = COMMENTS, { dishId, rating, author, comment, type}) => {

  switch (type) {
     case ADD_COMMENT: 
     return [...state, {
        dishId,
        rating,
        comment,
        author,
     }
    ];

     default:
        return state;
  }
}


export const reducer = (state = { comments: [], fetchedComments: []}, action) => {
   switch (action.type) {
     case FETCH_COMMENTS:
       return {...state, fetchedComments: action.payload}  
     default:
       return state;
   }
 }