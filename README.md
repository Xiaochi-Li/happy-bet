This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The web app is deployed on Firebace [Happy Bet](https://github.com/facebookincubator/create-react-app).
## Table of Contents

- [Functionality](#Functionality)
- [Assumption](#Assumption)
- [Limitation](#Limitation)
- [Future Improvement](#possible-imporvement)
 


## Functionality

## Assumption
#### API 
This is a API simulator that simulate an API which returns nearest race events that will happen soon regardless their meeting and type.
The simulator is build under the following assumptions:
 * Ideally, costly operation, such as sorting, should be finished at back-end. The API protocols should return well prepared data to support business logic. Thus the sorting operation is in this simulator.
 * multiple race events are retrieved at once for better performance.
 * Meeting.js Race.js and Competitor.js simulate the one to many relationships in the back-end database. Many competitors can participate one race, and one meeting can hold many races.
 * Competitor's weight is ranged between 40 and 100 kilograms. Win rate is ranged between 1 and 10.
#### UI
There are some adjustment on UI
 * Assuming users might want to place bet on more than two upcoming race. Thus, the UI feature that cliking on one race event leads to an detaild page of that event has changed to the one that click on a 'detail' button
a collapse card is unfold to show the detail.

## Limitation
 * Ones all retrieved race events expired, the app doesn't automatically retrieve new ones.
 * In real life, the wining rate of changes dynamically, but this app use static win rate.
 * In real life, the weight of different type of competitors has different range. But this app use the same range.
 * If the first race event shows "00:00:00" when the web-app is firstly opened or refreshed, the removing race feature is somehow disabled. Need refresh the page to solve this issue. 
 * In rare occasion, the expired race won't be removed from the list.
 
## Future Improvement
 #### New Features
 * A filter allow users to choose which type or types of race they want to see.
 #### Existing Features
 * Add color change and animation on count down clock when it's under 30 seconds. This will make users more alart of expiring races.
 * Add animation when removing race feature so users are more visually aware of it.
 * Could use icons or logos to replace textual content such as the type of races.
