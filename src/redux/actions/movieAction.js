import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "../types";
import axios from "axios";

// action creators
export const fetchMovies = () => (dispatch) => {
  dispatch({
    type: FETCH_MOVIES_REQUEST,
  });
  axios
    .get("http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad")
    .then((res) => {
      if (res.data.Response === "True") {
        let movies = res.data.Search.map((movie) => {
          return { ...movie, isSelected: false };
        });
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: movies,
        });
      } else {
        dispatch({
          type: FETCH_MOVIES_FAILURE,
          payload: res.data.Error,
        });
      }
    })
    .catch((err) =>
      dispatch({
        type: FETCH_MOVIES_FAILURE,
        payload: err.response,
      })
    );
};



// action creators
export const fetchMoviesByYear = (year) => (dispatch) => {
  dispatch({
    type: FETCH_MOVIES_REQUEST,
  });
  axios
    .get("http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad&y=" + year)
    .then((res) => {
      if (res.data.Response === "True") {
        let movies = res.data.Search.map((movie) => {
          return { ...movie, isSelected: false };
        });
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: movies,
        });
      } else {
        dispatch({
          type: FETCH_MOVIES_FAILURE,
          payload: res.data.Error,
        });
      }
    })
    .catch((err) =>
      dispatch({
        type: FETCH_MOVIES_FAILURE,
        payload: err.response,
      })
    );
};
