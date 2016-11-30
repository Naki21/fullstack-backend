'use strict';

const api = require('./api');
const ui = require('./ui');

const getRandomFighter = function() {
console.log('made it here');
  api.randomFighter()
    .then(ui.success)
    .catch(ui.failure);
};


const addHandlers = () => {
  $('#get-fighter-button').on('click', getRandomFighter);
};

module.exports = {
  addHandlers,
};
