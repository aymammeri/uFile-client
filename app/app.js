// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('click', events.onSignOut)
  $('#change-pass').on('submit', events.onPassChange)
  $('#getIndex').on('click', events.onGetIndex)
  $('#upload').on('submit', events.onUploadFile)
  // $('#files').on('click', "button[class^='downloadFile']", events.onDownloadFile)
  $('#files').on('submit', "form[id^='renameFile']", events.onRenameFile)
  $('#files').on('click', "button[class^='deleteFile']", events.onDeleteFile)
  $('#sign-in-link').on('click', events.onGoToSignIn)
  $('#sign-up-link').on('click', events.onGoToSignUp)
})
