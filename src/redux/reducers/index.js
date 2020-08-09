import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import myListReducer from "./myListReducer";

export default combineReducers({
  movie: movieReducer,
  myList: myListReducer,
});
