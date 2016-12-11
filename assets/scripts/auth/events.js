'use strict';
const showSignInTemplate = require('../templates/show-sign-in.handlebars');

const getFormFields = require(`../../../lib/get-form-fields`);
const store = require('../store');
const api = require('./api');
const ui = require('./ui');

const onSignUp = function(event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
  $('#sign-up-modal').modal('hide');
};

const onSignIn = function(event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure);
  $('#sign-in-modal').modal('hide');
};

const onChangePassword = function(event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure);
};
//There is a better way to log out individual player
const onSignOut = function(event) {
  event.preventDefault();
  api.signOut(store.user)
    .then(ui.signOutSuccess)
    .catch(ui.failure);
};
const showSignIn = () => {
  $('.content').html(showSignInTemplate(content));
  console.log("yoyoyoy");
};

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
