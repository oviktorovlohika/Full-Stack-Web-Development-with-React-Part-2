import { createStore } from "redux";
import { rootReducer, initialState } from "./rootReducer";


export const ConfigureStore = () => {
   const store = createStore(
      rootReducer,
      initialState
   );

   return store;
};