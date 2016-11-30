'use strict';
const showRandomFighter = require('../templates/show-random-fighter.handlebars');

const success = (data) => {
  if (data) {
    console.log(data.data.url);
    $("#fighterDisplay").html(showRandomFighter(data.data.url));
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
