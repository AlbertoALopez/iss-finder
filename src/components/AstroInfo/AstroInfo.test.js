import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AstroInfo from './AstroInfo.jsx';

window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};

test('AstroInfo renders properly', () => {
  const component = shallow(
    <AstroInfo />
  );

  expect(toJson(component)).toMatchSnapshot();
});
