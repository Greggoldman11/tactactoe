'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./user-events')
const gameEvents = require('./game-events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#signOut').on('submit', authEvents.onSignOut)
  $('#startGame').on('click', gameEvents.onStartGame)
  $('#gameBoard').on('click', gameEvents.onGameMove)
  // load the page with everything but sign up hidden
  $('#gameBoard').hide()
  $('#sign-in-section').hide()
  $('#signOutButton').hide()
  // a click handler for when sign out is clicked
  $('#signOutButton').on('click', authEvents.onSignOut)
  // event handler for the already have an account button
  $('#altSignIn').on('click', authEvents.onAlreadyAccount)
  // event handler for the create new account button
  $('#createNewAccount').on('click', authEvents.onCreateNew)
})
