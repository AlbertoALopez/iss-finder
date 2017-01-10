import React from 'react';
import renderer from 'react-test-renderer';
import Map from './Map.jsx';

test('Intro renders correctly', () => {
  const component = renderer.create(
    <Map />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});