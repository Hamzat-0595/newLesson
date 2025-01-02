import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import categoryReduser from "./categoryReduser";
import postsReduser from "./postsReduser";

const rootReducer = combineReducers({
  category: categoryReduser,
  posts: postsReduser,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
