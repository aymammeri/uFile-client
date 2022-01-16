const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../lib/get-form-fields.js')

const onGoToSignUp = function (event) {
  event.preventDefault()
  ui.goToSignUp()
}

const onGoToSignIn = function (event) {
  event.preventDefault()
  ui.goToSignIn()
}

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onUpload = function (event) {
  event.preventDefault()

  const form = $('#upload')[0] // You need to use standard javascript object here
  const formData = new FormData(form)

  api.upload(formData)
    .then(ui.onUploadSuccess)
    .catch(ui.onUploadFailure)
}

const onGetIndex = function (event) {
  event.preventDefault()

  api.getIndex()
    .then(ui.onGetIndexSuccess)
    .catch(ui.onGetIndexFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onUpload,
  onGetIndex,
  onGoToSignIn,
  onGoToSignUp
}
