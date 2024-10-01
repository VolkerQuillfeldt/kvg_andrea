function sendEmail() {
  const nachname = document.getElementById("nachname").value;
  const vorname = document.getElementById("vorname").value;
  const email = document.getElementById("email").value;
  const nachricht = document.getElementById("nachricht").value;
  const body =
    "<html><body>" +
    "Name&nbsp;" +
    nachname +
    "<br/>" +
    "Vorname&nbsp;" +
    vorname +
    "<br/>" +
    "EMail&nbsp;" +
    email +
    "<br/>" +
    nachricht +
    "</body></html>";
  Email.send({
    Host: "smtp.ionos.de",
    Username: "postmaster@andrea-schumacher.info",
    Password: "Sorry123$Andrea",
    To: "andrea.schumacher86@gmx.net",
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
