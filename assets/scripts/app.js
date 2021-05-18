'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./user-events')
const gameEvents = require('./game-events')
const ui = require('./ui')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#signOut').on('submit', authEvents.onSignOut)
  $('#startGame').on('click', gameEvents.onStartGame)
  $('#gameBoard').on('click', gameEvents.onGameMove)
  // load the page with everything but sign up hidden
  $(document).ready(function () {
    $('#gameBoard').hide()
  })
  $(document).ready(function () {
    $('#sign-in-section').hide()
  })
  $(document).ready(function () {
    $('#signOutButton').hide()
  })
  $('#signOutButton').on('click', authEvents.onSignOut)
  //event handler for the already have an account button
  $('#altSignIn').on('click', function () {
    $('#sign-in-section').show()
    $('#sign-up-section').hide()
    $('#createNewAccount').show()
    $('#message').text('')
    $('form').trigger('reset')
  })
  // event handler for the create new account button
  $('#createNewAccount').on('click', function () {
    $('#sign-in-section').hide()
    $('#sign-up-section').show()
    $('#createNewAccount').hide()
    $('#message').text('')
    $('form').trigger('reset')
  })
})
