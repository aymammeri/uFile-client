const store = require('./store.js')

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
  store.user = response.user
  goToHome()
}

const onSignInFailure = function () {
  $('#message').text('Failed to Sign-In')
}

const onSignOutSuccess = function () {
  $('#home-section').attr('hidden', true)
  $('#sign-up-section').attr('hidden', true)
  $('#sign-in-section').attr('hidden', false)
}

const onSignOutFailure = function () {
  $('#message').text('Failed to Sign-Out')
}

const onPassChangeSuccess = function () {
  $('change-pass').trigger('reset')
  $('#message').text('Password Changed Successfully')
}

const onPassChangeFailure = function () {
  $('#message').text('Failed to change password')
}

const onUploadSuccess = function (response) {
  $('#upload')[0].reset()
  $('#output').html(response)
}

const onUploadFailure = function (response) {
  $('#output').html(response)
}

const onGetIndexSuccess = function (response) {
  $('#files').empty()
  response.map(element => {
    return $('#files').append(
      $('<li>', {}).text(element.name)
    )
  })
}

const onGetIndexFailure = function (response) {
  $('#files').html('Error couldn\'t get files')
}

const goToSignUp = function () {
  $('#home-section').attr('hidden', true)
  $('#sign-in-section').attr('hidden', true)
  $('#sign-up-section').attr('hidden', false)
}

const goToSignIn = function () {
  $('#home-section').attr('hidden', true)
  $('#sign-up-section').attr('hidden', true)
  $('#sign-in-section').attr('hidden', false)
}

const goToHome = function () {
  $('#sign-up-section').attr('hidden', true)
  $('#sign-in-section').attr('hidden', true)
  $('#home-section').attr('hidden', false)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onPassChangeSuccess,
  onPassChangeFailure,
  onUploadSuccess,
  onUploadFailure,
  onGetIndexSuccess,
  onGetIndexFailure,
  goToSignIn,
  goToSignUp,
  goToHome
}
