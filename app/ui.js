// const store = require('./store.js')

const onSignUpSuccess = function () {
  $('#signUp').trigger('reset')
  $('.message').text('User signed up successfully')
}

const onSignUpFailure = function () {
  $('.message').text('Failed to sign up')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
