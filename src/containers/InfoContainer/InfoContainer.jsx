import React, { Component } from 'react';
import api from '../../utils/api';
import AstroInfo from '../../components/AstroInfo/AstroInfo.jsx';

export default class InfoContainer extends Component {
  constructor() {
    super();
    this.state = {
      numberOfPeople: '',
      people: [],
    };
  }

  componentDidMount() {
    const that = this;
    let numberOfPeople;
    let people;

    api.getNumberOfPeopleInSpace()
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        let numberOfPeople = json.number;
        let people = json.people;

        that.setState({
          numberOfPeople,
          people,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(`Error fetching astro data: ${error}`);
      });
  }
  render() {
    return (
      <div>
        <AstroInfo
          numberOfPeople={this.state.numberOfPeople}
          people={this.state.people}
        />
      </div>
    );
  }
}
