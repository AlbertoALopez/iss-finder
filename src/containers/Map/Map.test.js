import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Map from './Map.jsx';

test('Map container renders correctly', () => {
  const component = shallow(
    <Map />
  );

  expect(toJson(component)).toMatchSnapshot();
});