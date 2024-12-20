// Function to store all query parameters in cookies
function storeQueryParamsInCookies(params) {
  //debugger;
  // Store each parameter in a cookie (setting expiry to 30 days)
  for (const [key, value] of Object.entries(params)) {
    //debugger;
    setCookie(key, value, 30);
  }
}

// Function to set cookie
function setCookie(name, value, days) {
  //debugger;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
  //console.log('Cookie set:', document.cookie); // Debug line
}

// Add this helper function to safely get query parameters
function getQueryParams() {
  try {
    const params = {};
    const searchParams = new URLSearchParams(window.location.search);
    for (const [key, value] of searchParams) {
      params[key] = value;
    }
    return params;
  } catch (error) {
    console.error("Error getting query params:", error);
    return {};
  }
}

// Add this helper function to safely read cookies
function readUserCookies() {
  try {
    const cookieKeys = [
      "insturance_type",
      "postal_code",
      "date_of_birth",
      "email",
      "gender",
      "rated_health",
      "height_feet",
      "height_inches",
      "weight_lbs",
      "has_insurance",
      "insurance_amount",
      "term_insurance",
      "permanent_insurance",
      "final_expense_insurance",
      "not_sure_insurance",
      "personal_income",
      "coverage_amount",
      "coverage_term",
      "tobacco_user",
      "alcohol_condition",
      "asthma_condition",
      "blood_pressure_condition",
      "cancer_condition",
      "cholesterol_condition",
      "depression_condition",
      "diabetes_condition",
      "heart_issue_condition",
      "sleep_condition",
      "good_driver",
      "risk_activities",
    ];

    const cookies = {};
    const allCookies = document.cookie.split(";");

    cookieKeys.forEach((key) => {
      // Initialize each key as null
      cookies[key] = null;

      // Search for the cookie
      const cookie = allCookies.find((c) => c.trim().startsWith(key + "="));

      if (cookie) {
        const value = cookie.split("=")[1].trim();
        if (value) {
          cookies[key] = value;
        }
      }
    });

    // Log the found cookies for debugging
    //console.log("Found cookies:", cookies);

    return cookies;
  } catch (error) {
    //console.error("Error reading cookies:", error);
    return {};
  }
}
