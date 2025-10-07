class Usuario{
    constructor(usuario,password){
        this.Usuario=usuario;
        this.password=password;
    }

    PostsObtener(){
        const posts= ['post1','post2'];
        return posts
    }
}

class Moderador extends Usuario{
  constructor(usuario,password,permisos){
    super(usuario,password);
    this.permisos=permisos;
  }
  borrarPost(id){
    if (this.permisos.includes('borrar')) {
        console.log(`el post con el ${id} ha sido borrado`); 
    }else{
        console.log("no tienes permisos");
        
    }
  }
}


const usuario= new Usuario("pepe","pep123");

console.log(usuario.PostsObtener());


const moderador = new Moderador("Sara","Sara123",["borrar","editar"]);

console.log(moderador.permisos);

moderador.borrarPost(4);