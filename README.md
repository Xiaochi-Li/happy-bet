This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The web app is deployed on Firebace [Happy Bet](https://github.com/facebookincubator/create-react-app).
## Table of Contents

## Functionality

## Assumption
#### API 
This is an API simulator that simulates an API which returns nearest race events that will happen soon regardless their meeting and type.
The simulator is built on the following assumptions:
 * Ideally, costly operation, such as sorting, should be finished at the back-end. The API protocols should return well-prepared data to support business logic. Thus the sorting operation is in this simulator.
 * multiple race events are retrieved at once for better performance.
 * Meeting.js Race.js and Competitor.js simulate the one to many relationships in the back-end database. Many competitors can participate one race, and one meeting can hold many races.
 * Competitor's weight is ranged between 40 and 100 kilograms. Win rate is ranged between 1 and 10.
#### UI
There are some adjustment on UI
 * Assuming users might want to place the bet on more than two upcoming race. Thus, the UI feature that clicking on one race event leads to a detailed page of that event has changed to the one that clicks on a 'detail' button
a collapsing card unfolds to show the detail.

## Limitation
 * Ones all retrieved race events expired, the app doesn't automatically retrieve new ones.
 * In real life, the winning rate of changes dynamically, but this app uses static win rate.
 * In real life, the weight of the different type of competitors has a different range. But this app uses the same range.
 * If the first race event shows "00:00:00" when the web-app is firstly opened or refreshed, the removing race feature is somehow disabled. Need to refresh the page to solve this issue. 
 * In a rare occasion, the expired race won't be removed from the list.
 
## Future Improvement
 #### New Features
 * A filter allows users to choose which type or types of the race they want to see.
 #### Existing Features
 * Add colour change and animation on the countdown the clock when it's under 30 seconds. This will make users more alert to expiring races.
 * Add animation when removing race feature so users are more visually aware of it.
 * Could use icons or logos to replace textual content such as the type of races.
