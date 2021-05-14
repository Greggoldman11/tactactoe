const store = require('./store.js')

const signUpSuccess = function (res) {
  $('form').trigger('reset')
  $('#message').html('WOO')
}
const signInSuccess = function (res) {
  $('form').trigger('reset')
  // upon successful sign in I want to store that users token
  store.user = res.user
  console.log(store.user)
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
const startGameSuccess = function (res) {
  store.game = res.game
  console.log(store.game)
  $('#message').html('Player 1\'s move')
  $('#gameBoard').show()
  $('.spot').text(' ')
}
const startGameFailure = function () {
  $('#message').html('Please sign in and try again')
}

const gameMoveSuccess = function (res) {
  store.game = res.game
  console.log(store.game, ' is in my gameMoveSuccess')
  $('#message').html('Play!')
  // checking all of the winning conditions
  const xLogic = function () {
  if (
    store.game.cells[0] === 'X' &&
    store.game.cells[1] === 'X' &&
    store.game.cells[2] === 'X') {
    $('#message').html('Winner')
    $('#gameBoard').hide()
    store.game.over = true
  } else if (
    store.game.cells[0] === 'X' &&
    store.game.cells[3] === 'X' &&
    store.game.cells[6] === 'X') {
    $('#message').html('Winner')
    $('#gameBoard').hide()
  } else if (
    store.game.cells[1] === 'X' &&
    store.game.cells[4] === 'X' &&
    store.game.cells[7] === 'X') {
    $('#message').html('Winner')
    $('#gameBoard').hide()
  } else if (
    store.game.cells[2] === 'X' &&
    store.game.cells[5] === 'X' &&
    store.game.cells[8] === 'X') {
    $('#message').html('Winner')
    $('#gameBoard').hide()
  } else if (
    store.game.cells[3] === 'X' &&
    store.game.cells[4] === 'X' &&
    store.game.cells[5] === 'X') {
    $('#message').html('Winner')
    $('#gameBoard').hide()
  } else if (
    store.game.cells[6] === 'X' &&
    store.game.cells[7] === 'X' &&
    store.game.cells[8] === 'X') {
    $('#message').html('Winner')
    $('#gameBoard').hide()
  }
}
     if (
    store.game.cells[0] === 'O' &&
    store.game.cells[1] === 'O' &&
    store.game.cells[2] === 'O') {
    $('#message').html('Winner')
    $('#gameBoard').hide()
    store.game.over = true
  } else if (
    store.game.cells[0] === 'O' &&
    store.game.cells[3] === 'O' &&
    store.game.cells[6] === 'O') {
    $('#message').html('Winner')
    $('#gameBoard').hide()
  } else if (
    store.game.cells[1] === 'O' &&
    store.game.cells[4] === 'O' &&
    store.game.cells[7] === 'O') {
    $('#message').html('Winner')
    $('#gameBoard').hide()
  } else if (
    store.game.cells[2] === 'O' &&
    store.game.cells[5] === 'O' &&
    store.game.cells[8] === 'O') {
    $('#message').html('Winner')
    $('#gameBoard').hide()
  } else if (
    store.game.cells[3] === 'O' &&
    store.game.cells[4] === 'O' &&
    store.game.cells[5] === 'O') {
    $('#message').html('Winner')
    $('#gameBoard').hide()
  } else if (
    store.game.cells[6] === 'O' &&
    store.game.cells[7] === 'O' &&
    store.game.cells[8] === 'O') {
    $('#message').html('Winner')
    $('#gameBoard').hide()
  }
}
const gameMoveFailure = function () {
  $('#message').html('Oops!')
}
module.exports = {
  signUpSuccess,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  startGameSuccess,
  startGameFailure,
  gameMoveSuccess,
  gameMoveFailure
}
