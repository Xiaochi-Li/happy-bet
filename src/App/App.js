import React, {Component} from 'react';
import Routes from './Routes';
import FiveRaceList from '../five_race_list/FiveRaceList'


class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Routes />*/}
                <header className="App-header"/>
                <FiveRaceList/>
            </div>
        );
    }
}

export default App;
