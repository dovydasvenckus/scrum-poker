import React from "react";
import ReactDOM from "react-dom";
import ScrumPoker from "./scrumPoker";
import ActiveCard from "./activeCard";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={ScrumPoker} />
        <Route path="/card/:id" component={ActiveCard} />
      </div>
    );
  }
}

let appElement = document.getElementById("app");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  appElement
);
