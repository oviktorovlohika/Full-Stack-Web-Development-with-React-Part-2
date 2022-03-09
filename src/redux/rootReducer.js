import { combineReducers } from 'redux';
import  { commentsReducer } from './commentsReducer';
import { dishesReducer } from './dishesReducer';
import { leadersReducer } from './leadersReducer';
import { promotionsReducer } from './promotionsReducer';
import { addComments } from './actions';

// console.log('dishesReducer', dishesReducer)
export const rootReducer = combineReducers({
   dishes: dishesReducer,
   leaders: leadersReducer,
   promotions: promotionsReducer,
   comments: commentsReducer,
   addComments,
});


