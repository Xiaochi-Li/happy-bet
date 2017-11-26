import React from 'react'

export default class CompetitorItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {name, weight, win} = this.props.competitor;
    return (
      <tr>
        <td>{name}</td>
        <td>{weight}</td>
        <td>{win}</td>
      </tr>)
  }
}