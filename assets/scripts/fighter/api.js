'use strict';
const app = require('../app.js');

const randomFighter = () =>
  $.ajax({
    url: app.host + "/fighter",
    method: 'GET'
  });
const postBarracks = () =>
  $.ajax({
    url: app.host + "/barracks",
    method: 'POST',
    data: {
      barrack: {
        user_id: 1,
        giphy_id: 'sadfsdfsd',
      },
    },
  });
module.exports = {
  randomFighter,
  postBarracks
};
