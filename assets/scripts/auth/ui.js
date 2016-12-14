'use strict';
const homePage =
  require('../templates/home.handlebars');
const store = require('../store.js');

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  store.user = data.user;
  console.log(store.user);
  $(".nav > li").toggleClass("hidden");
  $('.collapse').collapse('hide');
  $('.lead').fadeOut(1000, function() {
    $(this).html('Create a new fighter or select one from your barracks').fadeIn(600, function() {
      $("#get-fighter-button").toggleClass("hidden");
    });
  });


};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  store.user = null;
  $(".nav > li").toggleClass("hidden");
  $('.starter-template').html(homePage());
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess
};
