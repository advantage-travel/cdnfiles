// Function to set cookie with expiration
// function setCookie(name, value, daysToExpire) {
//   const date = new Date();
//   date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
//   const expires = "expires=" + date.toUTCString();
//   document.cookie = name + "=" + value + ";" + expires + ";path=/";
// }

// Function to save form data to cookies
function saveFormDataToCookies() {
  alert("Save cookie function called");
  // Get all input fields
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const address = document.getElementById("address").value;

  // Save each field in separate cookies (expires in 30 days)
  setCookie("phone", phone, 30);
  setCookie("email", email, 30);
  setCookie("city", city, 30);
  setCookie("state", state, 30);
  setCookie("address", address, 30);

  return true;
}

// Add event listener to submit button
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.addEventListener("click", function (e) {
      //e.preventDefault(); // Prevent form submission if needed
      saveFormDataToCookies();
    });
  }
});
