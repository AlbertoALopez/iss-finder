import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import './_Intro.scss';

const Intro = () => (
  <Container text>
    <img
      className="iss-img"
      src={require('./iss-large.png')}
    />
    <Header as="h2">Where in the world is the Internation Space Station?</Header>
    <p>Find out where over earth is the ISS</p>
  </Container>
);

export default Intro;
