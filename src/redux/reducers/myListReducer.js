import {
  ADD_TO_MY_LIST,
  REMOVE_FROM_MY_LIST,
  REMOVE_FROM_MY_WATCHED_LIST,
  ADD_TO_MY_WATCHED_LIST,
  ADD_TO_MY_WATCHED_LIST_ID,
} from "../types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_MY_LIST:
      action.payload = action.payload.map((movie) => {
        return { ...movie, isWatched: false, isSelected: false };
      });
      return [...state, ...action.payload];
    case ADD_TO_MY_WATCHED_LIST:
      action.payload = action.payload.map((movie) => {
        return { ...movie, isWatched: true, isSelected: false };
      });
      return [...state, ...action.payload];

    case REMOVE_FROM_MY_LIST:
      return state.filter(
        (movie) =>
          !isExist(action.payload, movie.imdbID) && {
            ...movie,
            isSelected: false,
          }
      );

    case REMOVE_FROM_MY_WATCHED_LIST:
      return state.map((movie) => {
        if (isExist(action.payload, movie.imdbID)) {
          return { ...movie, isWatched: false, isSelected: false };
        }
        return movie;
      });
    case ADD_TO_MY_WATCHED_LIST_ID:
      return state.map((movie) => {
        if (isExist(action.payload, movie.imdbID)) {
          return { ...movie, isWatched: true, isSelected: false };
        }
        return movie;
      });

    default:
      return state;
  }
};

function isExist(list, element) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) return true;
  }
  return false;
}
