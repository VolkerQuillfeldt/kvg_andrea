function sendEmail() {
  const nachname = document.getElementById("nachname").value;
  const vorname = document.getElementById("vorname").value;
  const email = document.getElementById("email").value;
  const nachricht = document.getElementById("nachricht").value;
  const betreff = document.getElementById("betreff").value;
  const body =
    "<html><body>" +
    "Name:&nbsp;" +
    nachname +
    "<br/>" +
    "Vorname:&nbsp;" +
    vorname +
    "<br/>" +
    "E-Mail:&nbsp;" +
    email +
    "<br/>" +
    "<br/>" +
    "Betreff:&nbsp;" +
    "<br/>" +
    betreff +
    "<br/>" +
    "<br/>" +
    "Nachricht:&nbsp;" +
    "<br/>" +
    nachricht +
    "</body></html>";
  Email.send({
    Host: "smtp.ionos.de",
    Username: "postmaster@andrea-schumacher.info",
    Password: "xxxxxxxxxxx",
    To: "postmaster@andrea-schumacher.info",
    From: "postmaster@andrea-schumacher.info",
    Subject: "KVK Kontaktformular Website",
    Body: body,
  }).then((message) => {
    if (message != "OK") {
      alert(message);
      return;
    }
    document.getElementById("form").style.display = "none";
    document.getElementById("reply").style.display = "block";
  });
}

function onSubmit(token) {
  document.getElementById("demo-form").submit();
}
