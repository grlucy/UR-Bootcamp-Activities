$("#signInBtn").on("click", function(event) {
  event.preventDefault();

  const email = $("#inputEmail3")
    .val()
    .trim();
  const password = $("#inputPassword3")
    .val()
    .trim();

  const newUser = {
    email: email,
    password: password
  };
});
