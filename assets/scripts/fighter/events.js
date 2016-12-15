'use strict';
const store = require ('../store.js');
const api = require('./api');
const ui = require('./ui');

// Gets index of fighters from the api
const getAllFighters = function () {
  api.getAllFighters()
  .then(ui.getAllFightersSuccess)
  .catch(ui.failure);
};

// Gets a random fighter from the Giphy api through my api
const getRandomFighter = function() {
  api.randomFighter()
    .then(ui.getRandomSuccess)
    .catch(ui.failure);
};

// Creates a new fighter instance which references the url of the giphy instance
const setRandomFighter = function() {
  api.postFighters()
    .then(ui.setRandomSuccess)
    .catch(ui.failure);
};

// Deletes fighter by its associated id
const deleteFighter = function() {
  let id = $(this).data().fighterId;
  api.deleteFighter(id)
    .then(ui.deleteFighterSuccess(id))
    .catch(ui.failure);
};

// Creates a new battle instance in the db of my api
const createBattle = function() {
// Check
  if ($(this).data().fighterId !== undefined){
  store.current_fighter = $(this).data().fighterId;
}
  api.postBattle()
    .then(ui.createBattleSuccess)
    .catch(ui.failure);
};
const detWin = function () {
  if (Math.floor(Math.random() * 100) + 1  >= Math.floor(Math.random() * 100) + 1){
    return true;
  } else {
    return false;
  }
};
const updateBattle = () => {
  let win = detWin();
  api.updateBattle(win);
  ui.winState(win);
};


const addHandlers = () => {
  $('#get-all-fighter-button').on('click', getAllFighters);
  $('.starter-template').on('click', '#get-all-fighter-button', getAllFighters);
  $('.starter-template').on('click', '.btn-danger', deleteFighter);
  $('.starter-template').on('click', '#save-fighter-button', setRandomFighter);
  $('.starter-template').on('click', '#create-battle-button', createBattle);
  $('.starter-template').on('click', '#get-fighter-button', getRandomFighter);
  $('.starter-template').on('click', '#calc-win-button', updateBattle);

};

module.exports = {
  addHandlers,
};
