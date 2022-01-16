const store = require('./store.js')

const goToSignUp = function () {
  $('#sign-in-section').attr('hidden', true)
  $('#sign-up-section').attr('hidden', false)
}

const goToSignIn = function () {
  $('#sign-up-section').attr('hidden', true)
  $('#sign-in-section').attr('hidden', false)
}

const onSignUpSuccess = function () {
  $('#sign-up').trigger('reset')
  $('#message').text('User signed up successfully')
  goToSignIn()
}

const onSignUpFailure = function () {
  $('#message').text('Failed to sign up')
}

const onSignInSuccess = function (response) {
  $('#sign-in').trigger('reset')
  $('#message').text('Signed-In successfully')
  $('#sign-in-section').attr('hidden', true)
  $('#home').attr('hidden', false)
  store.user = response.user
}

const onSignInFailure = function () {
  $('#message').text('Failed to Sign-In')
}

const onUploadSuccess = function (response) {
  $('#upload')[0].reset()
  $('#output').html(response)
}

const onUploadFailure = function (response) {
  $('#output').html(response)
}

const onGetIndexSuccess = function (response) {
  response.forEach(element => {
    $('#files').append(
      $('<li>', {}).text(element.name)
    )
  })
}

const onGetIndexFailure = function (response) {
  $('#files').html('Error couldn\'t get files')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onUploadSuccess,
  onUploadFailure,
  onGetIndexSuccess,
  onGetIndexFailure,
  goToSignIn,
  goToSignUp
}
