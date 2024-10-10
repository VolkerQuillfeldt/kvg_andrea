function sendToMailServer(body){

  document.getElementById("error").style.display = "none";

  const settings = {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":"*"
    },
    body: JSON.stringify({ ...body, host: location.host})
  }

  let url = "https://andrea-schumacher.info/sendmail"
  if( ! location.host ){
    url= "http://localhost:7777/sendmail"
  }

  fetch(url, settings).then(response => {
    if( response.ok){
      document.getElementById("form").style.display = "none";
      document.getElementById("reply").style.display = "block";
      return response.json()
    }else{
      document.getElementById("error").style.display = "block";
    }
  }).catch(error => console.log("error", error));
}