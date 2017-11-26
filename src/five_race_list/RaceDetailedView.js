import React, {Component} from 'react';
import {Card, CardBody, CardTitle, Button, Table} from 'reactstrap';
import CompetitorItem from './CompetitorItem'

/**
 * a class represent the collapse card which shows details fo a race.
 */
export default class RaceDetailedView extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {location, ID, competitors} = this.props.race;
    return (
      <Card>
        <CardBody>
          <CardTitle>{`${location}  R${ID}`}</CardTitle>
          <Table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Weight</th>
              <th>Win</th>
            </tr>
            </thead>
            <tbody>
            {competitors.map((competitor) => (<CompetitorItem key={competitor.ID} competitor={competitor}/>))}
            </tbody>
          </Table>
          <Button>Make a Bet</Button>
        </CardBody>
      </Card>

    )
  }
}
