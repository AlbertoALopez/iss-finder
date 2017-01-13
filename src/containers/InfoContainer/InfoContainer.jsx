import React, { Component } from 'react';
import api from '../../utils/api';
import AstroInfo from '../../components/AstroInfo/AstroInfo.jsx';


export default class InfoContainer extends Component {
  constructor() {
    super();
    this.state = {
      numberOfPeopleInSpace: '',
      peopleInSpace: [],
    };
  }

  componentDidMount() {
    const that = this;
    let numberOfPeopleInSpace;
    let peopleInSpace;

    api.getNumberOfPeopleInSpace()
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        numberOfPeopleInSpace = json.number;
        peopleInSpace = json.people;

        that.setState({
          numberOfPeopleInSpace,
          peopleInSpace,
        });
      })
      .catch((error) => {
        console.log(`Error fetching astro data: ${error}`);
      });
  }
  render() {
    return (
      <div>
        <AstroInfo
          numberOfPeopleInSpace={this.state.numberOfPeopleInSpace}
          peopleInSpace={this.state.peopleInSpace}
        />
      </div>
    );
  }
}
