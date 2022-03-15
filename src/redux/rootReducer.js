import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { commentsReducer, reducer } from './commentsReducer';
import { dishesReducer, postsReducer } from './dishesReducer';
import { appReducer } from './appReducer';
import { leadersReducer } from './leadersReducer';
import { promosReducer } from './promotionsReducer';
import { postComment,fetchComments } from './actions';
import { InitialFeedback } from './forms';
import { feedbackReducer } from './feedbackReducer';

export const rootReducer = combineReducers({
   app: appReducer,
   reducer: reducer,
   dishes: dishesReducer,
   promotions: promosReducer,
   leaders: leadersReducer,
   comments: commentsReducer,
   posts: postsReducer,
   feedback: feedbackReducer,
   postComment,
   fetchComments,
   ...createForms({
       feedback: InitialFeedback
   })
});


