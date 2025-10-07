// Son funciones que podemos pasar como parametro a otra funcion, con el fin que una funcion pueda llamar o
//  ejecutar otra funcion

const postObtener =(usuario,callback)=>{
console.log(`Obtener los post de ${usuario}...`);
setTimeout(()=>{
let post=['post','post2'];
callback(post);
},2000)
}

postObtener('pepe',(post)=>{
console.log(post);
});

