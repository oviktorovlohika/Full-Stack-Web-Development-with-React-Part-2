import { COMMENTS } from '../mocks/comments';
import { ADD_COMMENT } from './types';

export const commentsReducer = (state = COMMENTS, { dishId, rating, author, comment, type}) => {

  switch (type) {
     case ADD_COMMENT: 
     return [...state, {
        id: state.length,
        dishId,
        rating,
        comment,
        author,
        date: new Date().toISOString()
     }
    ];

     default:
        return state;
  }
}