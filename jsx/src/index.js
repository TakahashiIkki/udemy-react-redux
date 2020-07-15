// Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = 'Click Me!';
    const labelText = 'Enter name:';

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText}
            </button>
        </div>
    )
};


// Take the react component and show it on screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)