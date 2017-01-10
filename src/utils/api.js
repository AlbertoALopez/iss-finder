/*
 * AJAX call utilities
 */

import 'whatwg-fetch';


const api = {
  getISSPosition: {},
  getNumberofPeopleInSpace: {},
  getNameOfPeopleInSpace: {},
};

api.getISSPosition = () => {
  return fetch('http://api.open-notify.org/iss-now.json');
};

api.getNumberofPeopleInSpace = () => {
  return fetch('http://api.open-notify.org/astros.json');
};

export default api;
