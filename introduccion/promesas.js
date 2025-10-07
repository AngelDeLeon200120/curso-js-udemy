//son estructuras que podemos definir para decirle al navegador que espere al finalizar una operacion y al finalizar
// le avisaremos al navegador
//  y le responderemos con los datos

const prometer = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = false;
    if (exito) {
      resolve("todo bien");
    } else {
      reject("no estuvo bien");
    }
  }, 4000);
});

prometer
  .then((message) => {
    alert(message);
  })
  .catch((err) => alert(err));
