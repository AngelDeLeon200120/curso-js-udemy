// son platillas para crear objecto y permiten encapsular codigo
//por si quieres trabajar con varios usuarios

//Estructura de una clase
// se define
//propiedades: las clase puede contener variables y de llaman propiedades
//Constructor: es un metodo especial para inicializar un objecto creado a partir de una clase
//Metodos: la clase puede contener funciones. Dentro de una clase se llaman metodos.


class Usuarios{
    tipo='usuario';

    constructor(nombre,apellido){
      this.nombre=nombre;
      this.apellido=apellido

      console.log("Se registro ");

    }

    Nombrecompleto(){
        console.log('obteniendo datos...');
        return `${this.nombre} ${this.apellido}`
    }
}

const usuario=new Usuarios("Angel","Estrada");
console.log(usuario.Nombrecompleto());


// const usuario2=new Usuarios("Angel2","Estrada2");
// console.log(usuario2);