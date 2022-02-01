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
  $('#upload').on('submit', events.onUpload)
  $('#getIndex').on('click', events.onGetIndex)
  $('#sign-in-link').on('click', events.onGoToSignIn)
  $('#sign-up-link').on('click', events.onGoToSignUp)
  $('.downloadFile').on('click', events.onDownload)
})
