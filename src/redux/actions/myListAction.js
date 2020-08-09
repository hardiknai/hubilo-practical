import {
  ADD_TO_MY_LIST,
  REMOVE_FROM_MY_LIST,
  REMOVE_FROM_MY_WATCHED_LIST,
  ADD_TO_MY_WATCHED_LIST,
  ADD_TO_MY_WATCHED_LIST_ID,
} from "../types";

export const addToMyList = (list) => (dispatch) => {
  list = list && list.map((movie, index) => ({ ...movie, isWatched: false }));

  dispatch({
    type: ADD_TO_MY_LIST,
    payload: list,
  });
};

export const addToMywatchedList = (list) => (dispatch) => {
  dispatch({
    type: ADD_TO_MY_WATCHED_LIST,
    payload: list,
  });
};
export const addToMywatchedListId = (list) => (dispatch) => {
  dispatch({
    type: ADD_TO_MY_WATCHED_LIST_ID,
    payload: list,
  });
};

export const removeFromMyList = (list) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_MY_LIST,
    payload: list,
  });
};
export const removeFromMywatchedList = (list) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_MY_WATCHED_LIST,
    payload: list,
  });
};
