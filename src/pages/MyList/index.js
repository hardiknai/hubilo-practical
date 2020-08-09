import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import {
  removeFromMyList,
  removeFromMywatchedList,
  addToMywatchedListId,
} from "../../redux/actions/myListAction";

export default function MyList() {
  const [isWhistList, setIsWhistList] = useState(false);
  const myList = useSelector((store) => store.myList);
  const dispatch = useDispatch();
  let selectedList = [];

  function handleOnChange(event) {
    const { name, value } = event.target;
    myList[name].isSelected = !myList[name].isSelected;
    if (myList[name].isSelected) selectedList.push(myList[name].imdbID);
    else selectedList.pop(myList[name].imdbID);
  }

  function handlerRemoveFromMyList(event) {
    event.preventDefault();
    dispatch(removeFromMyList(selectedList));
    selectedList = [];
  }

  function handlerAddToMyWatchedList(event) {
    event.preventDefault();
    dispatch(addToMywatchedListId(selectedList));
    selectedList = [];
  }
  function handleRemoveFromMyWatchedList(event) {
    event.preventDefault();
    dispatch(removeFromMywatchedList(selectedList));
    selectedList = [];
  }

  function toggleWhistList() {
    setIsWhistList((previsWhistList) => !previsWhistList);
  }
  return (
    <Fragment>
      <input
        type="checkbox"
        name="isWhistList"
        value={isWhistList}
        onChange={toggleWhistList}
      />{" "}
      WhistList
      {!isWhistList && (
        <button name="list" onClick={handlerRemoveFromMyList}>
          Remove from my list
        </button>
      )}
      <button
        name="watchedList"
        onClick={
          isWhistList
            ? handleRemoveFromMyWatchedList
            : handlerAddToMyWatchedList
        }
      >
        {isWhistList ? "Remove from my watched list" : "Add to my watched list"}
      </button>
      <ul>
        {myList &&
          myList.map(
            (movie, index) =>
              movie.isWatched === isWhistList && (
                <li key={index}>
                  <input
                    type="checkbox"
                    name={index}
                    defaultChecked={movie.isSelected}
                    value={movie.isSelected}
                    onChange={handleOnChange}
                  />
                  <img src={movie.Poster} className="poster" />
                  {movie.Title}
                  {movie.Year}
                </li>
              )
          )}
      </ul>
    </Fragment>
  );
}
