import React, { Component } from 'react';
import L from 'leaflet';
import './_LeafletMap.scss';


export default class LeafletMap extends Component {
  constructor(props) {
    super(props);
  }

  initMap() {
    const issIcon = L.icon({
      iconUrl: 'http://www.i2clipart.com/cliparts/c/b/7/7/clipart-international-space-station-cb77.png',
      iconSize: [50, 30],
      iconAnchor: [25, 15],
      popupAnchor: [50, 25],
    });

    const map = L.map('map').setView([0,0], 2);
    map.panTo(
      [this.props.issLat, this.props.issLon]
    );
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker([0, 0], {
      icon: issIcon,
    }).addTo(map);
  }

  componentDidMount() {
    this.initMap();
  }
  render() {
    return (
      <div id="map"></div>
    );
  }
}
