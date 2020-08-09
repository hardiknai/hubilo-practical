import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./index.css";
import {
  addToMyList,
  addToMywatchedList,
} from "../../redux/actions/myListAction";
import {
  fetchMovies,
  fetchMoviesByYear,
} from "../../redux/actions/movieAction";

function getYears() {
  let years = [];
  for (let year = 2000; year < 2021; year++) {
    years.push(year);
  }
  return years;
}

export default function MovieList() {
  const store = useSelector((store) => store.movie);
  const dispatch = useDispatch();
  let history = useHistory();
  let selectedList = [];

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  function handleOnChange(event) {
    const { name } = event.target;
    store.movies[name].isSelected = !store.movies[name].isSelected;
    if (store.movies[name].isSelected) selectedList.push(store.movies[name]);
    else selectedList.pop(store.movies[name]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { name } = event.target;

    if (name === "watchedList") dispatch(addToMywatchedList(selectedList));
    else dispatch(addToMyList(selectedList));

    history.push("/myList");
  }

  function filterByYear(event) {
    dispatch(fetchMoviesByYear(event.target.value));
  }

  let years = getYears();
  return store.loading ? (
    <h2>Loading....</h2>
  ) : (
    <Fragment>
      {store.error && <span style={{ color: "red" }}>{store.error}</span>}

      <button name="list" onClick={handleSubmit}>
        Add to my list
      </button>
      <button name="watchedList" onClick={handleSubmit}>
        Add to my watched list
      </button>
      <select onChange={filterByYear}>
        {years &&
          years.map((year, index) => <option key={index}>{year}</option>)}
      </select>
      <ul>
        {store.movies &&
          store.movies.map((movie, index) => (
            <li key={index}>
              <input
                type="checkbox"
                name={index}
                value={movie.isSelected}
                defaultChecked={movie.isSelected}
                onChange={handleOnChange}
              />
              <img src={movie.Poster} className="poster" />
              {movie.Title}
              {movie.Year}
            </li>
          ))}
      </ul>
    </Fragment>
  );
}
