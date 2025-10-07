const Operaciones = (tipo, opercion1, opercion2) => {
  // console.log(opercion1+opercion2);

  let resultado;

  if (tipo === "Suma") {
    resultado = opercion1 + opercion2;
  } else if (tipo === "resta") {
    resultado = opercion1 - opercion2;
  }

  return resultado;
};

const resutado = Operaciones("resta", 100, 200);

console.log(resutado);
