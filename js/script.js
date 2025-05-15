const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const interestSelect = document.getElementById("interest");
const submitBtn = document.getElementById("submitBtn");

function validateFieldsRealtime() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const interest = interestSelect.value;

  const isNameValid = /^[A-Za-z\s]+$/.test(name);
  const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
  const isInterestSelected = interest !== "";

  submitBtn.disabled = !(isNameValid && isEmailValid && isInterestSelected);
}

nameInput.addEventListener("input", validateFieldsRealtime);
emailInput.addEventListener("input", validateFieldsRealtime);
interestSelect.addEventListener("change", validateFieldsRealtime);

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const interest = interestSelect.value;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const interestError = document.getElementById("interestError");
  const formError = document.getElementById("formError");

  formError.textContent = "";
  nameError.textContent = "";
  emailError.textContent = "";
  interestError.textContent = "";

  nameInput.classList.remove("input-error");
  emailInput.classList.remove("input-error");
  interestSelect.classList.remove("input-error");

  let isValid = true;

  if (!/^[A-Za-z\s]+$/.test(name)) {
    nameError.textContent = "Name must contain only letters and spaces.";
    nameInput.classList.add("input-error");
    isValid = false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    emailInput.classList.add("input-error");
    isValid = false;
  }

  if (!interest) {
    interestError.textContent = "Please select an option.";
    interestSelect.classList.add("input-error");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();

  } else {
    formError.textContent = "Please fix the errors highlighted below.";
  }
});
