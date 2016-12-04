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
  api.postFighters()
    .then(ui.setRandomSuccess)
    .catch(ui.failure);

};
const deleteFighter = function() {
  console.log('made it here4');
  api.deleteBarracks()
    .then(ui.success)
    .catch(ui.failure);
};
const createBattle = function() {
  console.log('made it here5');
  api.postBattle()
    .then(ui.success)
    .catch(ui.failure);
};
const updateCurrentFighter = function() {

    console.log('made it here6');
    api.updateBarracks()
      .then(ui.success)
      .catch(ui.failure);
};



const addHandlers = () => {
  $('#fighterDisplay').on('click', setRandomFighter);
  $('#update-current-button').on('click', updateCurrentFighter);
  $('#get-fighter-button').on('click', getRandomFighter);
  $('#save-fighter-button').on('click', setRandomFighter);
  $('#delete-fighter-button').on('click', deleteFighter);
  $('#create-battle-button').on('click', createBattle);
};

module.exports = {
  addHandlers,
};
