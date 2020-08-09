import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SELECT_MOIVE
} from "../types";

// reducer
const initialState = {
  movies: [],
  error: "",
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        movies: action.payload,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        movies: [],
      };

    case SELECT_MOIVE:
      return {
        ...state,
        loading: false,
        error: "",
        movies: state.movies.map((moive) => {
          if (moive.imdbID === action.payload)
            return { ...moive, isSelected: !moive.isSelected };
          return moive;
        }),
      };
    default:
      return state;
  }
};
