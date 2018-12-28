import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

const Card = (props) => {
    const {content} = props;
    return <div className='card'>
        <p><Link to={`/card/${content}`}>{content}</Link></p>
    </div>
}

export default Card;