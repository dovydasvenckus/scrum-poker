import React from 'react';
import ReactDOM from 'react-dom';

class ScrumPoker extends React.Component {
    render() {
        return <div>
            <h1>Scrum poker</h1>
        </div>
    }
}

let App = document.getElementById('app');

ReactDOM.render(<ScrumPoker/>, App);