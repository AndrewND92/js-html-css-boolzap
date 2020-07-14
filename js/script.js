
function addSendListener() {
  var target = $("#input-chat");
  target.keyup(sendKeyup);
}

function sendKeyup(event) {
var key = event.which;

  if (key==13) {
    var input = $("#input-chat");
    var text = input.val();
    input.val("");
    console.log(text, "testo");
  }
}

function init() {

  addSendListener();

}

$(document).ready(init);
