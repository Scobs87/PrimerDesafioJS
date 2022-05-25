let adivinaLaRaza;

function laRazaDePerroMasCool(adivinaLaRaza) {
  while (adivinaLaRaza != "Boxer") {
    adivinaLaRaza = prompt("Adivina cual es la raza de perros mas cool");
    if (adivinaLaRaza == "Boxer") {
      alert("Tu si sabes");
    } else {
      alert("Intenta de nuevo");
    }
  }
  return adivinaLaRaza;
}

console.log(laRazaDePerroMasCool(adivinaLaRaza));
