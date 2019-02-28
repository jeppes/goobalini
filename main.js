document.addEventListener("DOMContentLoaded", main)

function main() {
  var button = Utils.find('main')
  var buttons = document.getElementsByTagName('button')
  for (var button of buttons) {
    if (button && button.id) {
      setupButton(button)
    }
  }
}

function setupButton(button) {
  Utils.onClick(button, function() {
    Brad.say(button.id)
  })
}

