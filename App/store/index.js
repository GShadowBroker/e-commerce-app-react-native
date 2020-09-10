import { createStore, combineReducers } from "redux";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

export default store;
