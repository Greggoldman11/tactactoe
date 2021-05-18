const store = require('./store.js')

const signUpSuccess = function (res) {
  $('form').trigger('reset')
  $('#message').html('You have successfully signed up')
  $('#sign-in-section').show()
  $('#sign-up-section').hide()
}
const signUpFailure = function () {
  $('#message').html('Sign up was not completed successfully')
  $('form').trigger('reset')
}
const signInSuccess = function (res) {
  $('form').trigger('reset')
  // upon successful sign in I want to store that users token
  store.user = res.user
  // console.log('this is the user in signInSuccess', store.user.token)
  $('#message').html('You\'re In! Click Start New Game to begin playing')
  $('#gameBoard').show()
  $('#signOutButton').show()
  $('#sign-in-section').hide()
  $('body').css('margin-top', 0)
}
const signInFailure = function () {
  $('#message').html('User is unauthorized')
}

const signOutSuccess = function () {
  $('#message').html('Sign in to play!')
  $('#signOutButton').hide()
  $('#sign-in-section').show()
  $('#gameBoard').hide()
  $('#signOutButton').hide()
  $('body').css('margin-top', '10%')
}
const signOutFailure = function () {
  $('#message').html('Sign out failed')
}
const startGameSuccess = function (res) {
  store.game = res.game
  // show the board and set the text back to ' '
  $('#message').html('Play!')
  $('#gameBoard').show()
  $('.spot').show()
  $('.spot').text(' ')
  $('#topRow').show()
}
const startGameFailure = function () {
  $('#message').html('Please sign in and try again')
  // bring the user automatically back to the sign in page
  $('#sign-in-section').show()
  $('#gameBoard').hide()
  $('#signOutButton').hide()
  $('body').css('margin-top', '10%')
}

const gameMoveSuccess = function (res) {
  store.game = res.game
  // create a variable that iterates through store.game.cells
  // the function checks if every cell is occupied by an empty string
  // if the cells include an empty string checkTie is true which isn't a Tie
  // false is a tie
  const checkTie = store.game.cells.includes('')
  // checking all of the winning conditions
  if (
    store.game.cells[0] === 'X' &&
    store.game.cells[1] === 'X' &&
    store.game.cells[2] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[0] === 'X' &&
    store.game.cells[3] === 'X' &&
    store.game.cells[6] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[1] === 'X' &&
    store.game.cells[4] === 'X' &&
    store.game.cells[7] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[2] === 'X' &&
    store.game.cells[5] === 'X' &&
    store.game.cells[8] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[3] === 'X' &&
    store.game.cells[4] === 'X' &&
    store.game.cells[5] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[6] === 'X' &&
    store.game.cells[7] === 'X' &&
    store.game.cells[8] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[0] === 'X' &&
    store.game.cells[4] === 'X' &&
    store.game.cells[8] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[2] === 'X' &&
    store.game.cells[4] === 'X' &&
    store.game.cells[6] === 'X') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[0] === 'O' &&
    store.game.cells[1] === 'O' &&
    store.game.cells[2] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[0] === 'O' &&
    store.game.cells[3] === 'O' &&
    store.game.cells[6] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[1] === 'O' &&
    store.game.cells[4] === 'O' &&
    store.game.cells[7] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[2] === 'O' &&
    store.game.cells[5] === 'O' &&
    store.game.cells[8] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[3] === 'O' &&
    store.game.cells[4] === 'O' &&
    store.game.cells[5] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[6] === 'O' &&
    store.game.cells[7] === 'O' &&
    store.game.cells[8] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[0] === 'O' &&
    store.game.cells[4] === 'O' &&
    store.game.cells[8] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
  } else if (
    store.game.cells[2] === 'O' &&
    store.game.cells[4] === 'O' &&
    store.game.cells[6] === 'O') {
    $('#message').html('Winner')
    $('.spot').hide()
    $('#topRow').hide()
    // message for a tie game
  } else if (checkTie === false) {
    $('#message').html('Tie Game! Play again')
    $('.spot').hide()
    $('#topRow').hide()
  }
}
const gameMoveFailure = function () {
  $('#message').html('Try move again')
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
