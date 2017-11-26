import React from 'react';
import {ListGroupItem, Collapse, Button, Col, Row} from 'reactstrap';
import Countdown from 'react-countdown-moment'
import RaceDetailedView from '../five_race_list/RaceDetailedView.js'

/**
 * a react component show general information of a race.
 */
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
    return (
      <ListGroupItem>
        <Row>
          <Col xs={3}>{`${race.location}  R${race.ID}`}</Col>
          <Col xs={2}>{`${race.type}`}</Col>
          <Col xs={4}><Countdown endDate={race.closeTime}/> TO GO</Col>
          <Col xs={1}></Col>
          <Button color="primary" onClick={this.toggle} style={{marginBottom: '1rem'}}>Detail</Button>
        </Row>

        <Collapse isOpen={this.state.collapse}>
          <RaceDetailedView race={race}/>
        </Collapse>
      </ListGroupItem>

    );
  }
}