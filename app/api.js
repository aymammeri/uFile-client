const config = require('./config.js')
const store = require('./store.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const upload = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/upload',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data,
    processData: false,
    contentType: false,
    xhr: function () {
      // upload Progress
      const xhr = $.ajaxSettings.xhr()
      if (xhr.upload) {
        xhr.upload.addEventListener('progress', function (event) {
          let percent = 0
          const position = event.loaded || event.position
          const total = event.total
          if (event.lengthComputable) {
            percent = Math.ceil(position / total * 100)
          }
          // update progress bar
          $('#output').html('Uploading...')
          $('#progress-wrp' + ' .progress-bar').css('width', +percent + '%')
          $('#progress-wrp' + ' .status').text(percent + '%')
        }, true)
      }
      return xhr
    }
  })
}

const getIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/files',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  upload,
  getIndex
}
