// const getFormfields = require('./../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// a seperate events file to keep events separate by type
const onStartGame = function (event) {
  console.log('this is in onStartGame', event.target)
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}
const onGameMove = function (event) {
  console.log('this is in onGameMove', $(event.target).data())
  const value = $(event.target).data()
  console.log('This is my variable value', value)
  api.gameMove(value)
    .then(ui.gameMoveSuccess)
    .catch(ui.gameMoveFailure)
}
module.exports = {
  onStartGame,
  onGameMove
}
