import React, {Component} from 'react';
import FiveRaceList from './components/five_race_list/FiveRaceList'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header"/>
                <FiveRaceList/>
            </div>
        );
    }
}

export default App;
