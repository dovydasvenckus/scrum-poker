import React from 'react';
import ReactDOM from 'react-dom';

const Card = (props) => {
    const {content} = props;
    return <div className='card'>
        <p>{content}</p>
    </div>
}

export default Card;