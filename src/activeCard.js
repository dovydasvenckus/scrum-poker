import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import {resolveDisplayValue} from './displayValueResolver';

const ActiveCard = props => {
  return (
    <div className="card activeCard">
      <p><Link to="/">{resolveDisplayValue(props.match.params.id)}</Link></p>
    </div>
  );
};

export default ActiveCard;
