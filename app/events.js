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

const onUpload = event => {
  event.preventDefault()

  const form = $('#upload')[0] // You need to use standard javascript object here
  const formData = new FormData(form)

  api.upload(formData)
    .then(ui.onUploadSuccess)
    .catch(ui.onUploadFailure)
}

const onGetIndex = event => {
  event.preventDefault()

  api.getIndex()
    .then(ui.onGetIndexSuccess)
    .catch(ui.onGetIndexFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onUpload,
  onGetIndex
}
