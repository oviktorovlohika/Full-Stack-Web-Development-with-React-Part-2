import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { commentsReducer } from './commentsReducer';
import { dishesReducer, postsReducer } from './dishesReducer';
import { appReducer } from './appReducer';
import { leadersReducer } from './leadersReducer';
import { promosReducer } from './promotionsReducer';
import { addComments,fetchComments } from './actions';
import { InitialFeedback } from './forms';

export const rootReducer = combineReducers({
   app: appReducer,
   dishes: dishesReducer,
   promotions: promosReducer,
   leaders: leadersReducer,
   comments: commentsReducer,
   posts: postsReducer,
   addComments,
   fetchComments,
   ...createForms({
       feedback: InitialFeedback
   })
});


