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

  sendToMailServer(
      {
        subject: "KVK Kontaktformular Website",
        body: body,
      }
  )
}

