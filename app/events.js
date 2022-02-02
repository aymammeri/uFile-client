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

const onGetIndex = function (event) {
  event.preventDefault()

  api.getIndex()
    .then(res => ui.onGetIndexSuccess(res))
    .catch(ui.onGetIndexFailure)
}

const onUploadFile = function (event) {
  event.preventDefault()
  const form = $('#upload')[0] // You need to use standard javascript object here
  const formData = new FormData(form)
  if ($('#filesToUpload').get(0).files.length === 0) {
    return
  }
  api.uploadFile(formData)
    .then(ui.onUploadSuccess)
    .catch(ui.onUploadFailure)
}

// const onDownloadFile = function (event) {
//   event.preventDefault()
//   const fileId = event.target.getAttribute('data')
//   api.downloadFile(fileId)
// }

const onRenameFile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const fileId = event.target.getAttribute('data')
  Promise.resolve(api.renameFile(data, fileId))
    .then(ui.onRenameFileSuccess)
    .catch(ui.onRenameFileFailure)
}

const onDeleteFile = function (event) {
  event.preventDefault()
  const fileId = event.target.getAttribute('data')
  api.deleteFile(fileId)
    .then(ui.onDeleteFileSuccess)
    .catch(ui.onDeleteFileFailure)
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
  onGetIndex,
  onUploadFile,
  // onDownloadFile,
  onRenameFile,
  onDeleteFile,
  onGoToSignIn,
  onGoToSignUp
}
