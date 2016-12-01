'use strict';
const showRandomFighter = require('../templates/show-random-fighter.handlebars');

const success = (data) => {
  if (data) {
    let source = data.data;
    console.log(source);
    $("#fighterDisplay").html(showRandomFighter(source));
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
success,
failure
};
