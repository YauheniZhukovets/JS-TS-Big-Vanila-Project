import React from 'react';
import './App.css';

function App() {

    // const name = ['Zhenya', 'Dima', 'Petya', 'Kiril', 'Artem', 'Andrey']
    const name = [{name: "Zhenya"}, {name: "Dima"}, {name: "Petya"}, {name: "Kiril"}, {name: "Artem"}, {name: "Andrey"}]
    const liElement = name.map(u => <li>{u.name}</li>)


    return (
        <div className="App">
            <ul>
                {liElement}
            </ul>
        </div>
    );
}

export default App;
