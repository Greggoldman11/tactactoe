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
  $('#signOut').on('click', authEvents.onSignOut)
  $('#startGame').on('click', gameEvents.onStartGame)
  $('#gameBoard').on('click', gameEvents.onGameMove)
  $(document).ready(function () {
    $('#gameBoard').hide()
  })
  $(document).ready(function () {
    $('#sign-in-section').hide()
  })
  $(document).ready(function () {
    $('#signOutButton').hide()
  })
  $('#signInButton').on('click', function () {
    $('#gameBoard').show()
    $('#signOutButton').show()
  })
  // $('#signInButton').on('click', function () {
  //   $('#signOutButton').show()
  // })
  $('#signOutButton').on('click', function () {
    $('#sign-in-section').show()
    $('.spot').hide()
    $('#signOutButton').hide()
  })
  $('#signUpButton').on('click', function () {
    $('#sign-in-section').show()
  })
  $('#altSignIn').on('click', function () {
    $('#sign-in-section').show()
    $('#sign-up-section').hide()
  })
})
