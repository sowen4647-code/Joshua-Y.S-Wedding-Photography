//Form success message//
const form = document.getElementById("contactForm");
const message = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  message.style.display = "block";

  form.reset();
});