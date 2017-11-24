import React, { Component } from 'react';


export default class RaceDetailedView extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {id} = this.props.match.params;
        console.log(id);
        return(
            <div className="detailContainer">
                <h1>Race Detail</h1>
                <div className="jumbotron">
                    <h1 className="display-3">Race</h1>
                    <p className="lead">Some information</p>
                    <hr className="my-4"></hr>
                    <p>It uses utility classetypography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <button className="btn btn-primary btn-lg">Make a bet</button>
                    </p>
                </div>
            </div>
        )
    }
}
