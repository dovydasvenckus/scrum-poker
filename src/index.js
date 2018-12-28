import React from "react";
import ReactDOM from "react-dom";
import ScrumPoker from "./scrumPoker";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <ScrumPoker />
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
