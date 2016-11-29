'use strict';

const store = require('../store');
const api = require('./api');
const ui = require('./ui');




const addHandlers = () => {
  $('#getSignInButton').on('click', showSignIn);
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', onChangePassword);
  $('#sign-out-button').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
