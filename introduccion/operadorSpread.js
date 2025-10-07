//nos permite tomar los elementos objetos o arreglos y expandirlos en otro sitio 

// const fruta=["Pera","Mango","Piña"];
// const favorita=["pizza","hot dot",...fruta]



// console.log(favorita);


// const Loginpersona={
//     user:"agmail.com",
//     password:"1234567"
// }

// const usario={
//     nombre:"Angel",
//     edad:14,
//     ...Loginpersona
// }

// console.log(usario);




//Parametros Rest: permite una funcion que contenga un numero de indefinido de augumentos los argumentos extra que 
//encuentre los covertira en un arreglo


// const registerUser=(nombre,corre,...datosNuevos)=>{
//     console.log(nombre,corre,datosNuevos);
    
// }

// registerUser("Angel","a@gmail.com",28,"Negro","Colombia")




//Destruturacion de objectos: Nose permite obtener elementos o propiedades de 
// un arreglo u objecto y guardarlos en una variables

const personas=["Kim","Angel","Omar"];
const [uno,dos,tres]=personas;
console.log(uno);


const user={
    name:"Angel",
    age:12
}

const {name,age}=user

console.log(name,age);
