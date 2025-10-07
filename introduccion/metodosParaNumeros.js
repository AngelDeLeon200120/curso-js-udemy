

// const numero=20;

// const texto= numero.toString();

// console.log(numero,typeof numero);

// console.log(texto,typeof texto);



//toFixed() permite obtener un numero con la cantidad de decimales especificos

// const numero = 3.1415;

// console.log(numero.toFixed(3));




//parseInt() Intenta trasformar un valor a un entero

// const numeroUno= prompt("Escribe un numero");
// const numeroDos= prompt("Escribe un numero");

// console.log(parseFloat(numeroUno)+parseInt(numeroDos));



//parseFloat() Intenta trasformar un valor a un decimal

// const numeroUno= prompt("Escribe un numero");
// const numeroDos= prompt("Escribe un numero");

// console.log(parseFloat(numeroUno)+parseFloat(numeroDos));



//Math.random() genera un numero al hazar el que quieras

// const random= Math.random()*10;
// console.log(random.toFixed());



//Math.floor() redondea hacia abajo un numero

console.log(Math.floor('10.1'));
console.log(Math.floor('10.99'));



//Math.ceil() redondea hacia arriba un numero

console.log(Math.ceil('10.1'));
console.log(Math.ceil('10.99'));

//Math.ceil() redondea hacia el entero mas cercano

console.log(Math.round('10.1'));
console.log(Math.round('10.99'));



const random= Math.random();
let resultado=Math.floor(random*4)



if (resultado===2) {
    alert("ganastes 1500 Quetzales");
    console.log('Este fue el numero ganador:',resultado);

}else{
    console.log(resultado);
    
}






