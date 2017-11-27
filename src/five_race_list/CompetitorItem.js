import React from 'react'

/**
 * a react component shows information of competitors.
 */
export default class CompetitorItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {name, weight, win, positionNum} = this.props.competitor;
    return (
      <tr>
        <td>{positionNum}</td>
        <td>{name}</td>
        <td>{weight}</td>
        <td>{win}</td>
      </tr>)
  }
}