import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import api from '../../utils/api';
import LeafletMap from '../../components/LeafletMap/LeafletMap.jsx';

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      issLat: '',
      issLon: '',
    };

    this.intervalId = null;
  }

  fetchData() {
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

  componentDidMount() {
    this.fetchData();
    const intervalId = setInterval(() => this.fetchData(), 5000);
  }

  render() {
    return (
      <Segment>
        <LeafletMap
          issLat={this.state.issLat}
          issLon={this.state.issLon}
        />
      </Segment>
    );
  }
}
