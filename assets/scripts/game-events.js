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
  console.log(currentPlayer, 'clicked cell', data.cellIndex)
  // if my currentPlayer variable is equal to X change it O
  // if it is equal to O change it to X
  // checks for an empty string
  if ($(event.target).text() === ' ') {
    $(event.target).text(currentPlayer)
    $('#message').html('Play!')
    api.updateGame(data, game, currentPlayer)
      .then(ui.gameMoveSuccess)
      .catch(ui.gameMoveFailure)
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
    // is it the start game button?
  } else if ($(event.target).text() === 'Start New Game') {
    ui.startGameSuccess()
    // if not it's taken by an X or an O
  } else if ($(event.target).text() !== ' ') {
    $('#message').text('This spot is taken')
  }
}
module.exports = {
  onStartGame,
  onGameMove
}
