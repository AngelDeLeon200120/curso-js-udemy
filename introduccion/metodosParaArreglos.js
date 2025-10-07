const colores=["rojo","verde","Azul"];



console.log(colores.length);

console.log(colores.toString());

document.body.innerHTML=colores.toString();//convierte a string

console.log(colores.join('*'));//convierte a string y lo que se ponga en las llaves aparece separado con eso 

let textoColores=colores.sort();//ordenar numeros o lestras en forma de array


console.log(textoColores.toString());

console.log(textoColores.reverse());//ordenados de forma descendete 

const primerArreglo=[1,2,3,4,5];
const segundoArreglo=["A","D","C"];

const tercerArreglo= primerArreglo.concat(segundoArreglo);//une dos arreglo y hace una nueva con ellos juntos 

console.log(tercerArreglo);


colores.push("Morado");// agrega un nuevo elemento al final 

console.log(colores);

colores.pop();//Elimina el ultimo elemento

console.log(colores);

const meses=["Enero","Febrero","Marzo","Abril","Mayo"];

// console.log(meses);
//let mesEliminado=meses.shift();//elimina el primer elemento
// meses.shift();

// console.log(meses);

// console.log(mesEliminado);


meses.unshift("Diciembre");//Agrega un elemento al inicio
console.log(meses);

const amigos=["Beverly","Pedro","Gordo","Analu"];

console.log(amigos);

amigos.splice(1,3,'Andrea','Daniel','Gato',2,{nombre:"Angel"});
//Nos permite insertar elemntos a un arreglo especificando y eliminarlos
//primer parametro el elemento de inicio que quieres eliminar
//segundo paramentro donde termina
//tecer en adelante los que quieres agregar

console.log(amigos);

const veduras=["zanahoria","pepino","brocoli","cebolla","tomate"];

let verdurasNuevas=veduras.slice(1,3);
//Nos permite copiar una parte del arreglo
//primer parametro desde donde queremos copiar
//segundo paramentro antes del elemento donde queremos copiar ose di finaliza en 3 solo se muestran 2"pepino","brocoli"
//tecer en adelante los que quieres agregar
console.log(verdurasNuevas);













