// a seperate events file to keep events separate by type

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')

let currentPlayer = ' '
// a function for when a player clicks start game
const onStartGame = function () {
  // set currentPlayer to X every time this event occurs
  currentPlayer = 'X'
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}
// a variable that starts at X and switches between X and O
const onGameMove = function (event) {
  // store the response from the event.target for my API call
  const data = $(event.target).data(store.index)
  const game = $(event.target).data(store.user_id)
  // check if the space is occupied or empty
  if ($(event.target).text() === ' ') {
    $(event.target).text(currentPlayer)
    $('#message').html('Play!')
    api.updateGame(data, game, currentPlayer)
      .then(ui.gameMoveSuccess)
      .catch(ui.gameMoveFailure)
    // if my currentPlayer variable is equal to X change it O
    // if it is equal to O change it to X
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
  // If event.target is the start game button it does not have ' ' as text
  } else if ($(event.target).text() === 'Start New Game') {
    $('#message').html('Play!')
  // everything else possible is an X or an O
  } else {
    $('#message').text('This spot is taken')
  }
}
module.exports = {
  onStartGame,
  onGameMove
}
