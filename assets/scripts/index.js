'use strict';

// user require with a reference to bundle the file and use it in this file
// let example = require('./example');

const authEvents = require('./auth/events.js');
const fighterEvents = require('./fighter/events.js');

// On document ready
$(() => {
  fighterEvents.addHandlers();
  authEvents.addHandlers();
});
