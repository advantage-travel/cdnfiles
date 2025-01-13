document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    PageLoad();
  }, 1000);
});

function PageLoad() {
  try {
    //debugger;
    const queryParams = getQueryParams();
    storeQueryParamsInCookies(queryParams);

    //const userCookies = readUserCookies();
    // console.log("User Cookies");
    //console.log(userCookies);
  } catch (error) {
    //console.log("Page Load Error:" + error);
  }
}

// // Function to save form data to cookies
// function saveFormDataToCookies() {
//   try {
//     alert("Save cookie function called");
//     // Get all input fields
//     const phone = document.getElementById("phone").value;
//     const email = document.getElementById("email").value;
//     const city = document.getElementById("city").value;
//     const state = document.getElementById("state").value;
//     const address = document.getElementById("address").value;

//     // Save each field in separate cookies (expires in 30 days)
//     setCookie("phone", phone, 30);
//     setCookie("email", email, 30);
//     setCookie("city", city, 30);
//     setCookie("state", state, 30);
//     setCookie("address", address, 30);

//     return true;
//   } catch (error) {
//     console.log("Error:" + error);
//   }
// }

// // Add event listener to submit button
// document.addEventListener("DOMContentLoaded", function () {
//   const submitButton = document.querySelector('button[type="submit"]');
//   if (submitButton) {
//     submitButton.addEventListener("click", function (e) {
//       //e.preventDefault(); // Prevent form submission if needed
//       saveFormDataToCookies();
//     });
//   }
// });
