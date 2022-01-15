const store = require('./store.js')

const onSignUpSuccess = function () {
  $('#sign-up').trigger('reset')
  $('#message').text('User signed up successfully')
}

const onSignUpFailure = function () {
  $('#message').text('Failed to sign up')
}

const onSignInSuccess = function (response) {
  $('#sign-in').trigger('reset')
  $('#message').text('Signed-In successfully')
  store.user = response.user
  console.log(store.user.token)
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
  onGetIndexFailure
}
