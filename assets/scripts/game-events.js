// const getFormfields = require('./../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')
// a seperate events file to keep events separate by type
const onStartGame = function (event) {
  console.log('this is in onStartGame', event.target)
  currentPlayer = 'X'
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}
// a variable that starts at X and switches between X and O
let currentPlayer = 'X'
const onGameMove = function (event) {
  console.log('this is in onGameMove', $(event.target).data())
  // store the response from the event.target for my API call
  const data = $(event.target).data(store.index)
  const game = $(event.target).data(store.user_id)
  console.log(currentPlayer, 'clicked cell', data.cellIndex)
  // if my currentPlayer variable is equal to x change it o
  // if it is equal to 0 change it to x
  console.log('this is my game variable', game)
  console.log('This is my data variable', data)
  api.updateGame(data, game, currentPlayer)
    .then(ui.gameMoveSuccess)
    .catch(ui.gameMoveFailure)
  currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
}

module.exports = {
  onStartGame,
  onGameMove
}
