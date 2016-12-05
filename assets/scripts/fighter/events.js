'use strict';
const store = require ('../store.js');
const api = require('./api');
const ui = require('./ui');

const getAllFighters = function () {
  console.log("herer thery come");
  api.getAllFighters()
  .then(ui.getAllFightersSuccess)
  .catch(ui.failure);
};
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
  let id = $(this).data().fighterId;
  console.log(id);
  api.deleteFighter(id)
    .then(ui.deleteFighterSuccess(id))
    .catch(ui.failure);
};
const createBattle = function() {
  console.log(store.current_fighter);

  api.postBattle(store.current_fighter)
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
  console.log('made it here7');
  let win = detWin();
  console.log(win);
  api.updateBattle(win);
  ui.winState(win);
};
const updateCurrentFighter = function() {
console.log(this);
    console.log($(this).data().fighterId);
    store.current_fighter.fighter_id = $(this).data().fighterId;
    ui.updateCurrentFighterSuccess();
};



const addHandlers = () => {

  $('#get-all-fighter-button').on('click', getAllFighters);
  $('#fighterDisplay').on('click', '.btn-danger', deleteFighter);
  $('#fighterDisplay').on('click', '#save-fighter-button', setRandomFighter);
  $('#fighterDisplay').on('click', '#create-battle-button', createBattle);
  $('#fighterDisplay').on('click', '#calc-win-button', updateBattle);
  $('#update-current-button').on('click', updateCurrentFighter);
  $('#get-fighter-button').on('click', getRandomFighter);
  $('#save-fighter-button').on('click', setRandomFighter);
  $('#delete-fighter-button').on('click', deleteFighter);
  $('#create-battle-button').on('click', createBattle);
};

module.exports = {
  addHandlers,
};
