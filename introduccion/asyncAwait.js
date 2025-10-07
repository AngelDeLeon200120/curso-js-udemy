const fecthPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = ["post", "post2"];
      const error = true;
      if (error) {
        reject("hay algun error"); //navegador en espera si hay error
      } else {
        resolve(post);
      }
    }, 4000);
  });
};

// console.log('Inicia Operacion');
// fecthPost()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log('finaliza Operacion');



// En lugar de usar then lo que esta arriba
const mostrarPost = async () => {
  try {
    const post = await fecthPost();
    console.log(post);
  } catch (error) {
    console.log(error);
  }
};

mostrarPost();
