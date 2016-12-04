'use strict';
const store = require('../store.js');
const showRandomFighter = require('../templates/show-random-fighter.handlebars');
const showFightBox = require('../templates/fightbox.handlebars');

const success = (data) => {
  console.log('Success');
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const getRandomSuccess = (data) => {
  let source = data.data;
  console.log(source);
  $("#fighterDisplay").html(showRandomFighter(source));

  store.temp_fighter = source;
};
const setRandomSuccess = (data) => {
    console.log(data);
    store.current_fighter = data.fighter;
    $('#get-fighter-button').hide();
    // $("#fighterDisplay").html(showFightBox(data)).hide();
    $('.lead').fadeOut(600, function() {
        $(this).html('Click Begin to enter the arena').fadeIn(600);
      });
      $('#fighterDisplay').html("<button type='button' id='create-battle-button' class='btn btn-primary btn'>Create Battle!</button>");
    };

const createBattleSuccess = (data) => {
let oppo = data.battle;
console.log(oppo);
$('#create-battle-button').fadeOut(500);
$('#fighterDisplay').html(showFightBox(oppo));
};

    module.exports = {
      createBattleSuccess,
      setRandomSuccess,
      getRandomSuccess,
      success,
      failure
    };
