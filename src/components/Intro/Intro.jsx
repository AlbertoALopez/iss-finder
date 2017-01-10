import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const Intro = () => (
  <Container text>
    <img
      src={require('./iss-large.png')}
    />
    <Header as="h2">Where in the world is the ISS?</Header>
    <p>Find out where the ISS is below.</p>
  </Container>
);

export default Intro;
