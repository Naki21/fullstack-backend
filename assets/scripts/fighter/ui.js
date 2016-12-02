'use strict';
const store = require('../store.js');
const showRandomFighter = require('../templates/show-random-fighter.handlebars');

const success = (data) => {
    console.log('Success');

};

const failure = (error) => {
  console.error(error);
};

const getRandomSuccess = (data) => {
  let source = data.data;
  if (source) {
    console.log(source);
    $("#fighterDisplay").html(showRandomFighter(source));
  } else {
    console.log('none');
  }
  store.temp_fighter = source;
};

module.exports = {
  getRandomSuccess,
  success,
  failure
};
