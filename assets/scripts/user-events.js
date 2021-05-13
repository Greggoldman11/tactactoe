const getFormfields = require('./../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const signUpData = getFormfields(event.target)

  console.log(signUpData)
  api.signUp(signUpData)
    .then(ui.signUpSuccess)
    .catch(console.error)
}
const onSignIn = function (event) {
  event.preventDefault()
  const signInData = getFormfields(event.target)
  console.log('this is in onSignIn', signInData)
  api.signIn(signInData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onSignOut = function (event) {
  console.log('in onSignOut')
  // event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
