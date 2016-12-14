'use strict';

// user require with a reference to bundle the file and use it in this file
// let example = require('./example');

const authEvents = require('./auth/events.js');
const fighterEvents = require('./fighter/events.js');
const homePage = require('./templates/home.handlebars');
// On document ready
$(() => {
  $('.starter-template').html(homePage());
  fighterEvents.addHandlers();
  authEvents.addHandlers();
});
