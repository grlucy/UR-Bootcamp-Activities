function waitFor(seconds) {
  return new Promise((resolve, reject) => {
    if (isNaN(seconds) || seconds < 1) {
      return reject(Error("Parameter 'seconds' must be a positive number!"));
    }

    setTimeout(function() {
      resolve("Success!");
    }, seconds * 1000);
  });
}

waitFor(2).then(res => console.log(res));
