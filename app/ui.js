const store = require('./store.js')

const onSignUpSuccess = function () {
  $('#signUp').trigger('reset')
  $('#message').text('User signed up successfully')
}

const onSignUpFailure = function () {
  $('#message').text('Failed to sign up')
}

const onSignInSuccess = function (res) {
  $('#signUp').trigger('reset')
  $('#message').text('Signed-In successfully')
  store.user = res.user
  console.log(store.user)
}

const onSignInFailure = function () {
  $('#message').text('Failed to Sign-In')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
