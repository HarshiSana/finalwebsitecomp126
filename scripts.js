function toggleMobileMenu() {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle("open");
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  if (name === "" || email === "" || message === "") {
    alert("All fields are required.");
  } else {
    alert("Thank you for your message. We'll get back to you soon.");
    this.reset();
  }
});
