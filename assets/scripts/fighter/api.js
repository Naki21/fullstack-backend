'use strict';
const app = require('../app.js');

const randomFighter = () =>
$.ajax({
  url: app.host + "/fighter",
  method: 'GET'
});

module.exports = {
randomFighter
};
