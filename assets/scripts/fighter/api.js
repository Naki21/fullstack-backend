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

const postBattle = () =>
  $.ajax({
    url: app.host + "/battles",
    method: 'POST',
    data: {
      battle: {
        "f_val": 57,
        "u_val": 33,
        "opponent": "2HzvYHbtVQNYA",
        "win?": null,
        "barrack_id": 1,
      },
    },
  });

module.exports = {
  randomFighter,
  postBarracks,
  postBattle
};
