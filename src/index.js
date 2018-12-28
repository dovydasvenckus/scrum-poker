import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './card';

class ScrumPoker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [1, 2, 3, 5, 8, 13, 21]
        };
    }
    render() {
        const cardsDom = this.state.cards.map((cardValue) => <Card key={cardValue} content={cardValue}/>)
        return <div className='cards'>
            {cardsDom}
        </div>
    }
}

let App = document.getElementById('app');

ReactDOM.render(<ScrumPoker/>, App);