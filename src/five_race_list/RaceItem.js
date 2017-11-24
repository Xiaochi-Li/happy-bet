import React from 'react';
import {ListGroupItem, Collapse, Button, CardBody, Card } from 'reactstrap';
import {Link} from 'react-router-dom'
import RaceDetailedView from '../five_race_list/RaceDetailedView.js'


export default class RaceItem extends React.Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        const {race} =  this.props;
        return (
                <ListGroupItem className={'row'}>
                    {/*<p>{race.id}</p>*/}
                    {/*<Link to={`/races/${race.id}`} className="btn btn-default">Detail</Link>*/}
                    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Detail</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <RaceDetailedView/>
                    </Collapse>
                </ListGroupItem>

        );
    }
}