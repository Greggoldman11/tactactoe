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
  $('#startGame').on('click', function () {
    $('gameBoard').removeClass('hidden')
  })
})
