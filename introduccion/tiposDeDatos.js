//Datos de texto,numerico,booleaono

var texto="Angel";
let numero=32;
const booleaono=true || false;

// Arreglos, Objectos , funciones

const Arreglos=[texto,numero,booleaono,{color:"Rojo"},[1,2,3]];

console.log(Arreglos[3]);

const persona={
    nombre:"Angel",
    edad:27,
    carro:{
        marca:"Honda",
        color:"Azul"
    }
}


function Persona() {
    console.log(persona);
}

Persona();

//Null o Undefined

const Nulo=null;

const Indefenido= undefined;
