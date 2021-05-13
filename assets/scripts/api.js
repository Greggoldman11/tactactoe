const config = require('./config.js')
const store = require('./store.js')

const signUp = function (signUpData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: signUpData
  })
}
const signIn = function (signInData) {
  console.log('this is in signInData', signInData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: signInData
  })
}
const signOut = function () {
  console.log('this is in signOut')
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}
const startGame = function () {
  console.log('in startGame')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}
// write a function that updates the value of the cell based on its data-index-number
const gameMove = function (value) {
  console.log('Player clicked on cell', value.cellIndex)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/', // owner id for the game stored on new game response
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  startGame,
  gameMove
}
