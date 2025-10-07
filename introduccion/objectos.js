const persona ={
    nombre:"Pepe",
    edad:19,
    correo:"a@gmail.com",
    Suscripciones:{
        web:true,
        correo:true
    },
    coloresFavoritos:["Negro","Azul","Blanco"],
    saludo: function() {
        alert('hola');
    }
};

// console.log(persona.saludo);

//para mostrar la edad
// console.log(persona['edad']);

// const variable='correo';

//para mostrar el correo de modo dinamico
// console.log(persona[variable]);

persona.pais="Guatemala";

persona.saludo();


