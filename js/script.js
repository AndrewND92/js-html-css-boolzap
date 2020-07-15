
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

    // console.log(text, "testo");
    sendMessage(text);
  }
}

function sendMessage(text) {
  var template = $(".template-my-mex > span").clone();
  var target = $(".show-chat-utente");

  template.append(text);
  target.append(template);


  setTimeout(myFunction, 3000);


  function myFunction() {
    console.log("ciao");
  }

}




function init() {

  addSendListener();

}

$(document).ready(init);
