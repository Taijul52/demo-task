const form = document
  .querySelector("#form")
  .addEventListener("submit", registerForm);
const msg = document.getElementById("msg");
const name = document.querySelector("#name");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const street = document.querySelector("#street");
const suite = document.querySelector("#suite");
const city = document.querySelector("#city");
const password = document.querySelector("#password");

function registerForm(e) {
  e.preventDefault();
  if (
    name.value == "" ||
    username.value == "" ||
    email.value == "" ||
    street.value == "" ||
    suite.value == "" ||
    city.value == "" ||
    password.value == ""
  ) {
    msg.textContent = "Please fill the fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    console.log(name.value);
    let data = {};
    data.id = "11";
    data.name = name.value;
    data.username = username.value;
    data.email = email.value;
    data.address = {
      street: street.value,
      suite: suite.value,
      city: city.value
    };
    data.password = password.value;
    let jsonData = JSON.stringify(data);
    console.log(jsonData);
    const xhr = new XMLHttpRequest();

    xhr.open("get", "users.json", true);
    xhr.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded; charset=utf-8"
    );
    xhr.onload = function() {
      var users = JSON.parse(this.responseText);
      users.push(jsonData);
      fs.writeFileSync("./newCustomer.json", jsonString);
      console.log(users);
      if (this.status == 200) {
        console.log(this.textContent);
      }
    };
    xhr.send();
  }
}
