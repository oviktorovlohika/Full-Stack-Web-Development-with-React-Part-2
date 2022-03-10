import { combineReducers } from 'redux';
import  { commentsReducer } from './commentsReducer';
import { dishesReducer, postsReducer } from './dishesReducer';
import { appReducer } from './appReducer';
import { leadersReducer } from './leadersReducer';
import { promotionsReducer } from './promotionsReducer';
import { addComments } from './actions';

export const rootReducer = combineReducers({
   app: appReducer,
   dishes: dishesReducer,
   leaders: leadersReducer,
   promotions: promotionsReducer,
   comments: commentsReducer,
   addComments,
   posts: postsReducer
});


