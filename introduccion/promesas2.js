const fecthPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = ["post", "post2"];
      const error = false;
      if (error) {
        reject("hay algun error");
      } else {
        resolve(post);
      }
    }, 4000);
  });
};

fecthPost()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
