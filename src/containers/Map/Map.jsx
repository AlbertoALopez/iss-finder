import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import api from '../../utils/api';

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      issLat: '',
      issLon: '',
    };
  }

  componentDidMount() {
    const that = this;
    let issLat;
    let issLon;
    api.getISSPosition()
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        issLat = json.iss_position.latitude;
        issLon = json.iss_position.longitude;
        that.setState({
          issLat,
          issLon,
        });
      })
      .catch((error) => {
        console.log(`Error fetching ISS data: ${error}`);
      });
  }

  render() {
    return (
      <Segment>
        {this.state.issLat}
        {this.state.issLon}
      </Segment>
    );
  }
}
