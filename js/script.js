function submitForm() {
  var nameValue = document.getElementById("name").value;
  var dateValue = document.getElementById("date").value;
  var genderValue = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  var messageValue = document.getElementById("message").value;
  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleString();

  document.getElementById("output-name").textContent = "Name : " + nameValue;
  document.getElementById("output-date").textContent =
    "Date of Birth : " + dateValue;
  document.getElementById("output-gender").textContent =
    "Gender : " + genderValue;
  document.getElementById("output-message").textContent =
    "Message : " + messageValue;
  document.getElementById("output-submission").textContent =
    "Date of Submit : " + formattedDate;

  // Reset the input fields
  document.getElementById("name").value = "";
  document.getElementById("date").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.getElementById("message").value = "";
}
