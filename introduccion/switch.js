const user = {
  name: "Angel",
  pais: "Nicaragua",
};

switch (user.pais) {
  case "Guatemala":
    console.log("El usuario es Guatemalteco");
    break;
  case "Mexico":
    console.log("El usuario es Mexicano");
    break;

  case "España":
    console.log("El usuario es Español");
    break;

  case "Nicaragua":
    console.log("El usuario es Nicaragua");
    break;

  default:
    console.log("Es de otro lado");

    break;
}
