class Usuario{
    constructor(nombre,gmail){
        this.nombre=nombre;
        this.gmail=gmail;
    }

   static borrarUsuario(id){
        console.log(`Usuario ${id} ha sido borrado`);
        
    }

   static registrados=1000;
}

// const usuario = new Usuario("Juan Ignacio","Junior123");

 Usuario.borrarUsuario(4);

 console.log(Usuario.registrados);
 
