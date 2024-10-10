function sendAntrag() {
  const nachname = document.getElementById("nachname").value;
  const vorname = document.getElementById("vorname").value;
  const email = document.getElementById("email").value;
  const adresse = document.getElementById("adresse").value;
  const plzort = document.getElementById("plzort").value;
  const geburtsdatum = document.getElementById("geburtsdatum").value;
  const telefon = document.getElementById("telefon").value;
  const hund = document.getElementById("hund").value;
  const datenschutz = document.getElementById("datenschutz").textContent;
  const body =
    "<html><body>" +
    "Name:&nbsp;" +
    nachname +
    "<br/>" +
    "Vorname:&nbsp;" +
    vorname +
    "<br/>" +
    "Adresse:&nbsp;" +
    adresse +
    "<br/>" +
    "PLZ Ort:&nbsp;" +
    plzort +
    "<br/>" +
    "Geburtsdatum:&nbsp;" +
    geburtsdatum +
    "<br/>" +
    "E-Mail:&nbsp;" +
    email +
    "<br/>" +
    "Telefon:&nbsp;" +
    telefon +
    "<br/>" +
    "Hund(e):&nbsp;" +
    hund +
    "<br/>" +
    "<br/>" +
    datenschutz +
    "<br/>";

  sendToMailServer(
      {
        subject: "KVK Mitgliedsantrag Website",
        body: body,
      }
  )
}
