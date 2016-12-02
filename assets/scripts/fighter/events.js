'use strict';

const api = require('./api');
const ui = require('./ui');

const getRandomFighter = function() {
  console.log('made it here');
  api.randomFighter()
    .then(ui.getRandomSuccess)
    .catch(ui.failure);
};
const setRandomFighter = function() {
  console.log('made it here2');
  api.postBarracks()
    .then(ui.success)
    .catch(ui.failure);

};
const deleteFighter = function() {
  console.log('made it here4');
  api.deleteBarracks()
    .then(ui.success)
    .catch(ui.failure);
};
const createBattle = function() {
  console.log('made it here3');
  api.postBattle()
    .then(ui.success)
    .catch(ui.failure);
};


const addHandlers = () => {
  $('#get-fighter-button').on('click', getRandomFighter);
  $('#save-fighter-button').on('click', setRandomFighter);
  $('#delete-fighter-button').on('click', deleteFighter);
  $('#create-battle-button').on('click', createBattle);
};

module.exports = {
  addHandlers,
};
