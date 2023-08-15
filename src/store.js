// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer"; // Ganti dengan path yang sesuai

const rootReducer = combineReducers({
  auth: authReducer,
  // ...reducers lain jika ada
});

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
