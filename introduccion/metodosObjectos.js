const persona={
    name:"Angel",
    age:23,
    friends:["pepe","Bri","Miguel"],
    saludo:function () {
        console.log("Hola");
        
    }
}

//  Metodos propios los pueden personalizar
persona.saludo();

//Object.key() (propiedades,name,age,friends) nos devuelve un arreglo con las llaves (keys) del objecto

let resultado= Object.keys(persona);

console.log(resultado);

//Object.values()  nos devuelve un arreglo con las valores  del objecto

let resultadow= Object.values(persona);
console.log(resultadow);


//Object.values()  nos devuelve un arreglo con las valores y las llaves (keys) del objecto

let resultadow3= Object.entries(persona);
console.log(resultadow3);


