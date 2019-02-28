// Some make-shift namespaces for functionality

var SoundFiles = {
  get: function(sound) {
    var filename = 'brad/' + sound + '.mp3'
    var audio = new Audio(filename)

    console.log('playing: ' + filename)
    audio.play();

    return audio
  }
}

var Utils = {
  find: function(id) {
    return document.getElementById(id)
  },

  onClick: function(element, action) {
    element.addEventListener('click', action)
  }
}

var Brad = function() {
  function startTalking() {
     Utils.find('jaw').classList.add('animating')
  }

  // Stop animating Brad's mouth movements
  function stopTalking() {
    Utils.find('jaw').classList.remove('animating')
  }

  var previousAudio = null
  return {
    // Get Brad to say something
    // Param: name of the audio file
    say: function(file) {
      if (previousAudio) {
        stopTalking()
        previousAudio.pause()
      }

      var audio = SoundFiles.get(file)
      startTalking()
      audio.play()
      audio.onended = stopTalking
      previousAudio = audio
    }
  }
}()

