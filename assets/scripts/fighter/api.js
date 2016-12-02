'use strict';
const app = require('../app.js');

const randomFighter = () =>
  $.ajax({
    url: app.host + "/fighter",
    method: 'GET'
  });
const deleteBarracks = () =>
  $.ajax({
    url: app.host + "/fighters/" + 3,
    method: 'DELETE',
  });

const postBarracks = () =>
  $.ajax({
    url: app.host + "/fighters",
    method: 'POST',
    data: {
      fighter: {
        user_id: 1,
        image_url: 'asdas',
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
  deleteBarracks,
  postBarracks,
  postBattle
};
