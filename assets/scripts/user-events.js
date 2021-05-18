const getFormfields = require('./../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// A function for when a user wants to sign up
const onSignUp = function (event) {
  event.preventDefault()
  const signUpData = getFormfields(event.target)

  console.log(signUpData)
  api.signUp(signUpData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
// a function for when a user wants to sign in
const onSignIn = function (event) {
  event.preventDefault()
  const signInData = getFormfields(event.target)
  console.log('this is in onSignIn', signInData)
  api.signIn(signInData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
// a function for when a user wants to sign out
const onSignOut = function (event) {
  console.log('in onSignOut')
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
// a function for a user that already has an account
const onAlreadyAccount = function () {
  $('#sign-in-section').show()
  $('#sign-up-section').hide()
  $('#createNewAccount').show()
  $('#message').text('')
  $('form').trigger('reset')
}
// a function for a user that is on the sign in page but wants to create a new account
const onCreateNew = function () {
  $('#sign-in-section').hide()
  $('#sign-up-section').show()
  $('#createNewAccount').hide()
  $('#message').text('')
  $('form').trigger('reset')
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onAlreadyAccount,
  onCreateNew
}
