import React from "react";
import ReactDOM from "react-dom";

const ActiveCard = props => {
  return (
    <div className="card activeCard">
      <p>{props.match.params.id}</p>
    </div>
  );
};

export default ActiveCard;
