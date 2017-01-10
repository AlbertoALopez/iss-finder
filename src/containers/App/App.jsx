import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Header from '../../components/Header/Header.jsx';
import Intro from '../../components/Intro/Intro.jsx';
import Map from '../Map/Map.jsx';


const App = () => (
  <div>
    <Header />
    <Row center="xs">
      <Col xs={12} md={6} lg={6}>
        <Intro />
        <Map />
      </Col>
    </Row>
  </div>
);

export default App;
