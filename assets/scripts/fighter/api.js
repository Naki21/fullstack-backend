'use strict';
const app = require('../app.js');
const store = require('../store');

const getAllFighters = () =>
$.ajax({
  url: app.host + "/fighters",
  method: 'GET',
  headers: {
    Authorization: 'Token token=' + store.user.token,
  },
});
const randomFighter = () =>
  $.ajax({
    url: app.host + "/fighter",
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
const deleteFighter = (id) =>
  $.ajax({
    url: app.host + "/fighters/" + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  });

const postFighters = () =>
  $.ajax({
    url: app.host + "/fighters",
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: {
      fighter: {
        url: store.temp_fighter.image_url,
        user_id: store.user.id,
      },
    },
  });

const postBattle = (fighter) =>
  $.ajax({
    url: app.host + "/battles",
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: {
      battle: {
        "fighter_id": fighter.id,
      },
    },
  });
  const updateBattle = (win) => {
    $.ajax({
      url: app.host + "/battles/" + store.battle.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
      data: {
        battle: {
          'win': win,
        },
      },
    });
  };


module.exports = {
  updateBattle,
  getAllFighters,
  randomFighter,
  deleteFighter,
  postFighters,
  postBattle
};
