let form = document.querySelector("form");
console.log(form);

let signup_arr = JSON.parse(localStorage.getItem("signup_arr")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  if (password === confirmPassword) {
    let obj = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };

    signup_arr.push(obj);
    localStorage.setItem("signup_arr", JSON.stringify(signup_arr));
    alert("Signup successful");
    window.location = "./login.html";
    console.log(signup_arr);
  } else {
    alert("Password and Confirm Password do not match");
  }
});

