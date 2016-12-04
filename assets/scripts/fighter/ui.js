'use strict';
const store = require('../store.js');
const showRandomFighter = require('../templates/show-random-fighter.handlebars');

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
  store.current_fighter = data.fighter.id;

    $("#fighterDisplay").html("Now Start Your Battle");
};

module.exports = {
  setRandomSuccess,
  getRandomSuccess,
  success,
  failure
};
