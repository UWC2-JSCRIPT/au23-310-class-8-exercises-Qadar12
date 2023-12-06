let ranNum = new Promise((resolve, reject) => {
  setTimeout(() => {
    let rando = Math.random();
    if (rando > 0.5) {
      resolve(rando);
    } else if (rando <= 0.5) {
      reject(rando);
    }
  }, 1000);
});

ranNum
  .then((value) => {
    console.log("success", value);
  })
  .catch((value) => {
    console.log("fail", value);
  })
  .finally(() => {
    console.log("complete");
  });
