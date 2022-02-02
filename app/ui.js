const store = require('./store.js')
const Modal = require('bootstrap').Modal
const myModal = new Modal($('#change-pass-modal'))
const api = require('./api')

const onSignUpSuccess = function () {
  $('#sign-up').trigger('reset')
  goToSignIn()
  $('#message').html('Signed Up Successfully')
  $('#message').show()
  setTimeout(() => {
    $('#message').hide()
  }, 1500)
}

const onSignUpFailure = function () {
  $('#message').html('Failed to Sign Up')
  $('#message').show()
  setTimeout(() => {
    $('#message').hide()
  }, 1500)
}

const onSignInSuccess = function (response) {
  $('#sign-in').trigger('reset')
  store.user = response.user
  goToHome()
  $('#message').html('Signed In Successfully')
  $('#message').show()
  setTimeout(() => {
    $('#message').hide()
  }, 1500)
}

const onSignInFailure = function () {
  $('#message').html('Failed to Sign In')
  $('#message').show()
  setTimeout(() => {
    $('#message').hide()
  }, 1500)
}

const onSignOutSuccess = function () {
  $('#home-section').attr('hidden', true)
  $('#sign-up-section').attr('hidden', true)
  $('#sign-in-section').attr('hidden', false)
  $('#message').html('Signed Out Successfully')
  $('#message').show()
  setTimeout(() => {
    $('#message').hide()
  }, 1500)
}

const onSignOutFailure = function () {
  $('#message').html('Failed to Sign-Out')
  $('#message').show()
  setTimeout(() => {
    $('#message').hide()
  }, 1500)
}

const onPassChangeSuccess = function () {
  $('#change-pass').trigger('reset')
  myModal._hideModal()
  $('#message').html('Password Changed Successfully')
  $('#message').show()
  setTimeout(() => {
    $('#message').hide()
  }, 1500)
}

const onPassChangeFailure = function () {
  $('#message').html('Failed to Change password')
  $('#message').show()
  setTimeout(() => {
    $('#message').hide()
  }, 1500)
}

const onUploadSuccess = function () {
  $('#upload').trigger('reset')
  // $('#upload')[0].reset()
  $('#message').html('File created Successfully')
  $('#message').show()
  setTimeout(() => {
    $('#message').hide()
  }, 1500)
  api.getIndex()
    .then(onGetIndexSuccess)
    .catch(onGetIndexFailure)
    // .then(res => {
    //   $('#progress-wrp').attr('hidden', true)
    //   $('#output').html('File uploaded Successfully')
    //   setTimeout(() => {
    //     $('#output').hide()
    //   }, 2000)
    //   onGetIndexSuccess(res)
    // })
}

const onUploadFailure = function (response) {
  $('#output').html(response)
}

const onGetIndexSuccess = function (response) {
  $('#files').empty()
  response.forEach(element => {
    $('#files').append(`<li>
        <div class="container d-flex">
          <form id="renameFileForm" data="${element._id}">
            <input name="[name]" type="text" class="me-2" class="form-control" value="${element.name}">
            <button type="submit" class="renameFile btn btn-primary pe-auto me-1" style="cursor: pointer;">Rename file</button>
          </form>
          <button class="deleteFile btn btn-primary pe-auto" data="${element._id}" style="cursor: pointer;">Delete File</button>
        </div>  
    </li>`, {})
  })
// <li><a class="downloadFile dropdown-item pe-auto" data="${element._id}" style="cursor: pointer;">Download file</a></li>
}

const onGetIndexFailure = function () {
  $('#files').html("Error couldn't get files")
}

const onRenameFileSuccess = function (res) {
  $('#message').html(res)
  $('#message').show()
  setTimeout(() => {
    $('#message').hide()
  }, 1500)
}

const onRenameFileFailure = function () {
  $('#message').html('Rename File Failed')
  $('#message').show()
  setTimeout(() => {
    $('#message').hide()
  }, 1500)
}

const onDeleteFileSuccess = function (response) {
  api.getIndex()
    .then(res => onGetIndexSuccess(res))
  $('#message').html('File Deleted Successfully')
  $('#message').show()
  setTimeout(() => {
    $('#message').hide()
  }, 1500)
}

const onDeleteFileFailure = function (response) {
  $('#message').html('Failed to Delete File')
  $('#message').show()
  setTimeout(() => {
    $('#message').hide()
  }, 1500)
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
  onGetIndexSuccess,
  onGetIndexFailure,
  onUploadSuccess,
  onUploadFailure,
  onRenameFileSuccess,
  onRenameFileFailure,
  onDeleteFileSuccess,
  onDeleteFileFailure,
  goToSignIn,
  goToSignUp,
  goToHome
}
