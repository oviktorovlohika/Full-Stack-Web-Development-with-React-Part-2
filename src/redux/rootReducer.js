import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import  { commentsReducer } from './commentsReducer';
import { dishesReducer, postsReducer } from './dishesReducer';
import { appReducer } from './appReducer';
import { leadersReducer } from './leadersReducer';
import { promotionsReducer } from './promotionsReducer';
import { addComments } from './actions';
import { InitialFeedback } from './forms';

export const rootReducer = combineReducers({
   app: appReducer,
   dishes: dishesReducer,
   leaders: leadersReducer,
   promotions: promotionsReducer,
   comments: commentsReducer,
   posts: postsReducer,
   addComments,
   ...createForms({
       feedback: InitialFeedback
   })
});


