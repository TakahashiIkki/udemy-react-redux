// Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click On Me!'
}

// Create a react component
const App = () => {
    const buttonText = 'Click Me!';

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {getButtonText()}
            </button>
        </div>
    )
};


// Take the react component and show it on screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)