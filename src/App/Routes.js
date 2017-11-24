import React from 'react';
import {Route} from 'react-router-dom';
import RaceDetailedView from '../five_race_list/RaceDetailedView.js'
import FiveRaceList from '../five_race_list/FiveRaceList.js'
export default () => ((
    <div>
        <Route exact path="races" component={FiveRaceList}/>
        <Route exact path="/races/:id" component={RaceDetailedView}/>
    </div>
))