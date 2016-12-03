'use strict';
const app = require('../app.js');
const store = require('../store');

const randomFighter = () =>
  $.ajax({
    url: app.host + "/fighter",
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
const deleteBarracks = () =>
  $.ajax({
    url: app.host + "/fighters/" + 3,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  });

const postBarracks = () =>
  $.ajax({
    url: app.host + "/fighters",
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },

    data: {
      fighter: {
        url: 'asdas',
        user_id: store.user.id,
      },
    },
  });

const postBattle = () =>
  $.ajax({
    url: app.host + "/battles",
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
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

const updateBarracks = () =>
  $.ajax({
    url: app.host + "/barracks/6",
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: {
      barrack: {
        "url": "www.getems",
      },
    },
  });

module.exports = {
  updateBarracks,
  randomFighter,
  deleteBarracks,
  postBarracks,
  postBattle
};
