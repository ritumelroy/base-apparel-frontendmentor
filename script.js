const from = document.querySelector(".email-form");
const email = document.getElementById("email");
const error = document.querySelector(".error");
const errorIcon = document.querySelector(".error-icon");

console.log("im here");

from.addEventListener("submit", (e) => {
  //   window.alert("beep beep boop");
  let messages = [];
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value === "" || email.value == null || !re.test(email.value)) {
    // window.alert("bobbobob");
    messages.push("Please enter a valid email");
  }

  if (messages.length > 0) {
    e.preventDefault();
    email.classList.add("email-active");
    error.innerText = messages.join(", ");
    error.classList.add("error-active");
    errorIcon.classList.add("error-icon-active");
  }
});
