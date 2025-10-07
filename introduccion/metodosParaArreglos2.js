//indexOf() obyenemos el primer elemento, si no hay nos retorna -1, tambien te da el posicionamiento de un dato en un array
//comprueba si un elemento esta o no, solo string y numeros

const nombres = [
  "Pepe",
  "Omar",
  "Angel",
  "Miguel",
  "Lima",
  "Angel",
  "Yildo",
  2,
  ["limas", "tego"],
];
const nombres2 = [
  "Pepe",
  "Omar",
  "Angel",
  "Miguel",
  "Lima",
  "Angel",
  "Yildo",
  111
];

// console.log(nombres.indexOf("Angel"));

//lastIndexOf() es igual que indexOf() pero al reves revisa el ultimo

// console.log(nombres.lastIndexOf("Angel"));

//forEach()
//permite ejecutar una funcion por cada elemento

// nombres.forEach((nombre,index)=>{
//     console.log(`Hola: ${nombre} ${index}`);
// });

//Find, permite recorrer un arreglo y devuelve el primer elemento que retornemos

// const resultado=nombres.find((nombre)=>{
//   console.log(nombre[0]);
//     if (nombre[0]==="Y") {
//         return nombre;
//     }
// })

// console.log(resultado);

//map() nos permite ejecutar una funcion por cada elemento, nos crea un nuevo arreglocon los resultados que especifiquemos

// const mayuscula= nombres2.map((name)=>{
//   return name.toLowerCase();

// })

// console.log(mayuscula);

//filter() nos permite ejecutar una funcion por cada elemento, nos crea un nuevo arreglocon los resultados que especifiquemos
//de vuelve el resultadoque cumpla con una condicion

// const nombre3letras= nombres2.filter((nombre)=>{
//     if (nombre.length===5) {
//         return nombre;
//     }
// });

// console.log(nombre3letras);

//includes() nos permite saber si el arreglo contiene un elemento especificado

// console.log(nombres2.includes('Angel'));

//every() nos permite ejecutar una condicion sobre cada elemento nos devueve true si todos los elementos cumplieron la condicion

const namesverificar = nombres2.every((name) => {
  if (typeof name === "string") {
    return true;
  } else {
    return false;
  }
});

console.log(namesverificar);



//some() nos permite ejecutar una condicion sobre cada elemento no devueve true si algun elemento cumplieron la condicion


const namesverificar2 = nombres2.some((name) => {
  if (typeof name !== "string") {
    return true;
  } else {
    return false;
  }
});

console.log(namesverificar2)