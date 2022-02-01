const store = require('./store.js')
const Modal = require('bootstrap').Modal
const myModal = new Modal($('#change-pass-modal'))
const events = require('./events')

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
  $('#change-pass').trigger('reset')
  myModal._hideModal()
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
  response.forEach(element => {
    $('#files').append(`<li>
        <div class="container d-flex">
          <p>${element.name}</p>
          <a class="nav-link dropdown-toggle" id="fileDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false">...</a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="fileDropDown">
            <li><a class="dropdown-item pe-auto renameFile" data="${element._id}" style="cursor: pointer;">Rename file</a></li>
            <li><a class="dropdown-item pe-auto deleteFile" data="${element._id}" style="cursor: pointer;">Delete File</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item pe-auto downloadFile" data="${element._id}" style="cursor: pointer;">Download file</a></li>
          </ul>
        </div>  
    </li>`, {})
  })
  $('.downloadFile').on('click', events.onDownload)
}

const onGetIndexFailure = function (response) {
  $('#files').html("Error couldn't get files")
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
