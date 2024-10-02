function sendAntrag() {
  const nachname = document.getElementById("nachname").value;
  const vorname = document.getElementById("vorname").value;
  const email = document.getElementById("email").value;
  const adresse = document.getElementById("adresse").value;
  const plzort = document.getElementById("plzort").value;
  const geburtsdatum = document.getElementById("geburtsdatum").value;
  const telefon = document.getElementById("telefon").value;
  const hund = document.getElementById("hund").value;
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
    "<br/>";
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
