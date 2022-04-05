const bouton = document.getElementById("bouton");

bouton.addEventListener("click", function () {
  let départ = document.getElementById("depart-select").value;
  let arrivée = document.getElementById("arrivee-select").value;
  let date = document.getElementById("user_date").value;
  let passagers = document.getElementById("user_passagers").value;
  let classe = document.getElementById("user_classe").value;
  let numero = Math.floor(Math.random() * 10000);
  const form = document.getElementById("forme");

  form.style.height = "150px";
  form.style.width = "400px";
  form.style.backgroundColor = "#64e3f7";

  if (date == "" || passagers == "") {
    alert("Certaines données sont manquantes, veuillez réessayer.");
  } else if (départ == arrivée) {
    alert("Le départ et l'arrivée doivent être différents.");
  } else {
    form.innerHTML =
      "Vous partez de " +
      départ +
      "<br> à " +
      arrivée +
      " le " +
      date +
      ".<br> Vous êtes " +
      passagers +
      " passager.s en classe " +
      classe +
      ".<br>Votre vol est le n°" +
      numero +
      ".";
  }
});
