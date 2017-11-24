import React from 'react';
import {ListGroupItem, Collapse, Button, CardBody, Card} from 'reactstrap';
import Countdown from 'react-countdown-moment'
import Moment from 'moment';
import RaceDetailedView from '../five_race_list/RaceDetailedView.js'

// const endDate = Moment().add(2, 'hours')
export default class RaceItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {collapse: false};
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  render() {
    const {race} = this.props;
    console.log(race);
    return (
      <ListGroupItem className={'row'}>
        <Countdown endDate= {race.closeTime} />
       <Button color="primary" onClick={this.toggle} style={{marginBottom:'1rem'}}>Detail</Button>
        <Collapse isOpen={this.state.collapse}>
          <RaceDetailedView/>
        </Collapse>
      </ListGroupItem>
    );
  }
}