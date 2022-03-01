import { createStore } from 'redux';

import { DISHES } from '../mocks/dishes';
import { LEADERS } from '../mocks/leaders';
import { PROMOTIONS } from '../mocks/promotions';
import { COMMENTS } from '../mocks/comments';

export const initialState = {
   dishes: DISHES,
   leaders: LEADERS,
   promotion: PROMOTIONS,
   comments: COMMENTS
};

export const rootReducer = (state = initialState, action) => {
   return state;
};

const store = createStore(rootReducer);

export default store;

