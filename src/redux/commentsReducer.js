import { COMMENTS } from '../mocks/comments';
import { ADD_COMMENT } from './types';

export const commentsReducer = (state = COMMENTS, {dishId, rating, author, comment, type}) => {

  switch (type) {
     case ADD_COMMENT: 
     return [...state, {
        dishId,
        rating,
        author,
        comment
     }
    ];

     default:
        return state;
  }
}