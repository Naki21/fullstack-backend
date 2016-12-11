'use strict';

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

};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  store.user = null;
  $(".nav > li").toggleClass("hidden");

};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess
};
