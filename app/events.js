const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../lib/get-form-fields.js')

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
    .then(() => {
      api.getIndex()
        .then(res => ui.onGetIndexSuccess(res))
        .catch(ui.onGetIndexFailure)
    })
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onPassChange = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onPassChangeSuccess)
    .catch(ui.onPassChangeFailure)
}

const onDownload = function (event) {
  event.preventDefault()
  const data = event.target
  console.log(data)
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
    .then(res => ui.onGetIndexSuccess(res))
    .catch(ui.onGetIndexFailure)
}

const onGoToSignUp = function (event) {
  event.preventDefault()
  ui.goToSignUp()
}

const onGoToSignIn = function (event) {
  event.preventDefault()
  ui.goToSignIn()
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onPassChange,
  onUpload,
  onGetIndex,
  onDownload,
  onGoToSignIn,
  onGoToSignUp
}
