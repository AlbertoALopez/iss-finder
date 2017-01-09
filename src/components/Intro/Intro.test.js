import React from 'react';
import renderer from 'react-test-renderer';
import Intro from './Intro.jsx';

test('Intro renders correctly', () => {
  const component = renderer.create(
    <Intro />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
