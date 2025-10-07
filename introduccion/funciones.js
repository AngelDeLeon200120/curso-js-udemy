function Saludo(saludar) {
    return saludar
}

console.log(Saludo("Hola"));


const Operaciones =(tipo,opercion1,opercion2)=>{
    // console.log(opercion1+opercion2);

    if (tipo==="suma") {
        console.log(opercion1+opercion2);
        
        
    }else if (tipo==="resta") {
        
        console.log(opercion1-opercion2);
    }
    
}

Operaciones("suma",23,24);
Operaciones("resta",50,24);
