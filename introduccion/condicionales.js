
const persona={
    edad:18,
    pais:"Guatemala",
    boleto:false
}


// if (persona.edad>18) {
//     console.log("puede entrar");
    
// }else{
//     console.log("no puedes entrar");
    
// }

// if (persona.edad>=18 && persona.boleto===true) {
//     console.log("puede entrar");
// }else{
//     console.log("no puedes entrar");
// }

// if (persona.edad>=18) {
//     if (persona.boleto) {
//         console.log("Es mayor pero y compro boleto");
//     }else{
//         console.log("es mayor pero no compro boleto");
        
//     }
// }else{
//      console.log("es menor de edad");
// }

if (persona.pais==="Guatemala") {
    console.log("Es Guatemalteco");
}else if (persona.pais==="Colombia") {
    console.log("Es Colombiano");
    
}else if (persona.pais==="Mexico") {
    console.log("Es Mexicano");
    
}else{
    console.log("Es de otro pais");
    
}