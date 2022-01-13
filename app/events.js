const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../lib/get-form-fields.js')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

module.exports = {
  onSignUp,
  onSignIn
}
