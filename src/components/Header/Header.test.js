import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header.jsx';

test('Header renders properly', () => {
  const component = renderer.create(
    <Header />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
