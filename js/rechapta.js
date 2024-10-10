function onloadCallback(){
  const sendButton = document.getElementById("sendButton");
  sendButton.disabled=false
}

function loadMailForm(){
  if( ! location.host){
    const sendButton = document.getElementById("sendButton");
    sendButton.disabled=false
    const rechapta = document.getElementById("g-recaptcha");
    rechapta.style.display='none'
  }
}