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

const addHandlers = () => {
  $('#get-fighter-button').on('click', getRandomFighter);
  $('#save-fighter-button').on('click', setRandomFighter);
};

module.exports = {
  addHandlers,
};
