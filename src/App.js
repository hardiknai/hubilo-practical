import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./pages/MovieList";
import MyList from "./pages/MyList";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={MovieList} />
        <Route exact path="/myList" component={MyList} />
      </Router>
    </Provider>
  );
}

export default App;
