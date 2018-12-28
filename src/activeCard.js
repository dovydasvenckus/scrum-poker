import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const ActiveCard = props => {
  return (
    <div className="activeCard">
      <p>{props.match.params.id}</p>
    </div>
  );
};

export default ActiveCard;
