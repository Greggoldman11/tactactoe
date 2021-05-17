const store = require('./store.js')

const signUpSuccess = function (res) {
  $('form').trigger('reset')
  $('#message').html('WOO')
  // happening only after its clicked again
    $('#sign-in-section').show()
    $('#sign-up-section').hide()
}
const signUpFailure = function () {
  $('#message').html('Sign up was not completed successfully')
}
const signInSuccess = function (res) {
  $('form').trigger('reset')
  // upon successful sign in I want to store that users token
  store.user = res.user
  console.log(store.user)
  // console.log('this is the user in signInSuccess', store.user.token)
  $('#message').html('BOOM')
  // $('#signInButton').on('click', function () {
  //   $('#sign-in-section').hide()
  // })
  // $('#signInButton').on('click', function () {
    $('#gameBoard').show()
    $('#signOutButton').show()
    $('#sign-in-section').hide()
  // })
}
const signInFailure = function () {
  $('#message').html('User is unauthorized')
}
const signOutSuccess = function () {
  $('#message').html('You have signed out')
  $('#signOutButton').hide()
}
const signOutFailure = function (err) {
  $('#message').html('Sign out failed' + err)
}
const startGameSuccess = function (res) {
  store.game = res.game
  console.log(store.game)
  $('#message').html('Player 1\'s move')
  $('#gameBoard').show()
  $('.spot').show()
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
  if (
    store.game.cells[0] === 'X' &&
    store.game.cells[1] === 'X' &&
    store.game.cells[2] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[0] === 'X' &&
    store.game.cells[3] === 'X' &&
    store.game.cells[6] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[1] === 'X' &&
    store.game.cells[4] === 'X' &&
    store.game.cells[7] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[2] === 'X' &&
    store.game.cells[5] === 'X' &&
    store.game.cells[8] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[3] === 'X' &&
    store.game.cells[4] === 'X' &&
    store.game.cells[5] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[6] === 'X' &&
    store.game.cells[7] === 'X' &&
    store.game.cells[8] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[0] === 'X' &&
    store.game.cells[4] === 'X' &&
    store.game.cells[8] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[2] === 'X' &&
    store.game.cells[4] === 'X' &&
    store.game.cells[6] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[0] === 'O' &&
    store.game.cells[1] === 'O' &&
    store.game.cells[2] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[0] === 'O' &&
    store.game.cells[3] === 'O' &&
    store.game.cells[6] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[1] === 'O' &&
    store.game.cells[4] === 'O' &&
    store.game.cells[7] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[2] === 'O' &&
    store.game.cells[5] === 'O' &&
    store.game.cells[8] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[3] === 'O' &&
    store.game.cells[4] === 'O' &&
    store.game.cells[5] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[6] === 'O' &&
    store.game.cells[7] === 'O' &&
    store.game.cells[8] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[0] === 'O' &&
    store.game.cells[4] === 'O' &&
    store.game.cells[8] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
  } else if (
    store.game.cells[2] === 'O' &&
    store.game.cells[4] === 'O' &&
    store.game.cells[6] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
  }else {
    $('#message').html('No winner')
  }
}
const gameMoveFailure = function () {
  $('#message').html('Oops!')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  startGameSuccess,
  startGameFailure,
  gameMoveSuccess,
  gameMoveFailure
}
