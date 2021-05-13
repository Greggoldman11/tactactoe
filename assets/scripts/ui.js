const store = require('./store.js')

const signUpSuccess = function (res) {
  $('form').trigger('reset')
  $('#message').html('WOO')
}
const signInSuccess = function (res) {
  $('form').trigger('reset')
  // upon successful sign in I want to store that users token
  store.user = res.user
  // console.log(store.user)
  // console.log('this is the user in signInSuccess', store.user.token)
  $('#message').html('BOOM')
}
const signInFailure = function () {
  $('#message').html('User is unauthorized')
}
const signOutSuccess = function (res) {
  $('#message').html('You have signed out')
}
const signOutFailure = function () {
  $('#message').html('Sign out failed')
}
const startGameSuccess = function () {
  $('#message').html('Player 1\'s move')
}
const startGameFailure = function () {
  $('#message').html('Please sign in and try again')
}
module.exports = {
  signUpSuccess,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  startGameSuccess,
  startGameFailure
}
