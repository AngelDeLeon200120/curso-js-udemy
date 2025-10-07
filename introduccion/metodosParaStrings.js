
const texto ="Hola Soy German";

console.log(texto.length);


//indexOf() lastIndexOf() De vuelve el primer/ultimo carater especifico

// console.log(texto.indexOf('o'));
// console.log(texto.lastIndexOf('o'));


//slice Devuelve un fragmento de una cadena de texto 
//primer paramentro index desde donde queremos cortar
//segundo parametro hasta donde queremos cortar opcional

// console.log(texto.slice(0,10));
//dimamico

// let indexOf=texto.indexOf('H');
// let lastIndexOf=texto.lastIndexOf('a');
// console.log(texto.slice(indexOf,lastIndexOf+1));

//numero negativos

// console.log(texto.slice(-7,-1));



//replace() devuelve una cadena de texto en donde reemplaza un valor por otro
//primer paramentro que queremos reemplazar 
//segundo parametro el que queremos poner

console.log(texto.replace('German','Angel'));



//split() convierte una cadena de texto en u arreglo, se especifica cada elemento donde cortar

console.log(texto.split('AA'));

console.log(texto.toLowerCase());



