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
      "insurance_interest",
      "personal_income",
      "coverage_amount",
      "coverage_term",
      "tobacco_user",
      "med_conditions",
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
      //debugger;
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

function clearInsuranceCookies() {
  const cookiesToClear = [
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
    "insurance_interest",
    "personal_income",
    "coverage_amount",
    "coverage_term",
    "tobacco_user",
    "med_conditions",
    "good_driver",
    "risk_activities",
  ];

  cookiesToClear.forEach((cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });

  //console.log("All specified insurance cookies have been cleared.");
}

function GetRedirectUrl(userCookies) {
  try {
    let urlToRedirect = "";
    const insturance_type_cookie = userCookies["insturance_type"];
    const postal_code_cookie = userCookies["postal_code"];
    const date_of_birth_cookie = userCookies["date_of_birth"];
    const email_cookie = userCookies["email"];
    const gender_cookie = userCookies["gender"];
    const rated_health_cookie = userCookies["rated_health"];
    const height_feet_cookie = userCookies["height_feet"];
    const height_inches_cookie = userCookies["height_inches"];
    const weight_lbs_cookie = userCookies["weight_lbs"];
    const has_insurance_cookie = userCookies["has_insurance"];
    const insurance_interest_cookie = userCookies["insurance_interest"];
    const personal_income_cookie = userCookies["personal_income"];
    const coverage_amount_cookie = userCookies["coverage_amount"];
    const coverage_term_cookie = userCookies["coverage_term"];
    const tobacco_user_cookie = userCookies["tobacco_user"];
    const med_conditions_cookie = userCookies["med_conditions"];
    const good_driver_cookie = userCookies["good_driver"];
    const risk_activities_cookie = userCookies["risk_activities"];

    if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      rated_health_cookie &&
      height_feet_cookie &&
      height_inches_cookie &&
      weight_lbs_cookie &&
      has_insurance_cookie &&
      insurance_interest_cookie &&
      personal_income_cookie &&
      coverage_amount_cookie &&
      coverage_term_cookie &&
      tobacco_user_cookie &&
      med_conditions_cookie &&
      good_driver_cookie &&
      risk_activities_cookie
    ) {
      urlToRedirect =
        "https://consumerdirectlife.com/parent-sibling?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&rated_health=" +
        rated_health_cookie +
        "&height_feet=" +
        height_feet_cookie +
        "&height_inches=" +
        height_inches_cookie +
        "&weight_lbs=" +
        weight_lbs_cookie +
        "&has_insurance=" +
        has_insurance_cookie +
        "&insurance_interest=" +
        insurance_interest_cookie +
        "&personal_income=" +
        personal_income_cookie +
        "&coverage_amount=" +
        coverage_amount_cookie +
        "&coverage_term=" +
        coverage_term_cookie +
        "&tobacco_user=" +
        tobacco_user_cookie +
        "&med_conditions=" +
        med_conditions_cookie +
        "&good_driver=" +
        good_driver_cookie +
        "&risk_activities=" +
        risk_activities_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      rated_health_cookie &&
      height_feet_cookie &&
      height_inches_cookie &&
      weight_lbs_cookie &&
      has_insurance_cookie &&
      insurance_interest_cookie &&
      personal_income_cookie &&
      coverage_amount_cookie &&
      coverage_term_cookie &&
      tobacco_user_cookie &&
      med_conditions_cookie &&
      good_driver_cookie
    ) {
      urlToRedirect =
        "https://consumerdirectlife.com/activities?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&rated_health=" +
        rated_health_cookie +
        "&height_feet=" +
        height_feet_cookie +
        "&height_inches=" +
        height_inches_cookie +
        "&weight_lbs=" +
        weight_lbs_cookie +
        "&has_insurance=" +
        has_insurance_cookie +
        "&insurance_interest=" +
        insurance_interest_cookie +
        "&personal_income=" +
        personal_income_cookie +
        "&coverage_amount=" +
        coverage_amount_cookie +
        "&coverage_term=" +
        coverage_term_cookie +
        "&tobacco_user=" +
        tobacco_user_cookie +
        "&med_conditions=" +
        med_conditions_cookie +
        "&good_driver=" +
        good_driver_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      rated_health_cookie &&
      height_feet_cookie &&
      height_inches_cookie &&
      weight_lbs_cookie &&
      has_insurance_cookie &&
      insurance_interest_cookie &&
      personal_income_cookie &&
      coverage_amount_cookie &&
      coverage_term_cookie &&
      tobacco_user_cookie &&
      med_conditions_cookie
    ) {
      urlToRedirect =
        "https://consumerdirectlife.com/driving?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&rated_health=" +
        rated_health_cookie +
        "&height_feet=" +
        height_feet_cookie +
        "&height_inches=" +
        height_inches_cookie +
        "&weight_lbs=" +
        weight_lbs_cookie +
        "&has_insurance=" +
        has_insurance_cookie +
        "&insurance_interest=" +
        insurance_interest_cookie +
        "&personal_income=" +
        personal_income_cookie +
        "&coverage_amount=" +
        coverage_amount_cookie +
        "&coverage_term=" +
        coverage_term_cookie +
        "&tobacco_user=" +
        tobacco_user_cookie +
        "&med_conditions=" +
        med_conditions_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      rated_health_cookie &&
      height_feet_cookie &&
      height_inches_cookie &&
      weight_lbs_cookie &&
      has_insurance_cookie &&
      insurance_interest_cookie &&
      personal_income_cookie &&
      coverage_amount_cookie &&
      coverage_term_cookie &&
      tobacco_user_cookie
    ) {
      urlToRedirect =
        "https://consumerdirectlife.com/conditions?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&rated_health=" +
        rated_health_cookie +
        "&height_feet=" +
        height_feet_cookie +
        "&height_inches=" +
        height_inches_cookie +
        "&weight_lbs=" +
        weight_lbs_cookie +
        "&has_insurance=" +
        has_insurance_cookie +
        "&insurance_interest=" +
        insurance_interest_cookie +
        "&personal_income=" +
        personal_income_cookie +
        "&coverage_amount=" +
        coverage_amount_cookie +
        "&coverage_term=" +
        coverage_term_cookie +
        "&tobacco_user=" +
        tobacco_user_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      rated_health_cookie &&
      height_feet_cookie &&
      height_inches_cookie &&
      weight_lbs_cookie &&
      has_insurance_cookie &&
      insurance_interest_cookie &&
      personal_income_cookie &&
      coverage_amount_cookie &&
      coverage_term_cookie
    ) {
      urlToRedirect =
        "https://consumerdirectlife.com/tobacco_user?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&rated_health=" +
        rated_health_cookie +
        "&height_feet=" +
        height_feet_cookie +
        "&height_inches=" +
        height_inches_cookie +
        "&weight_lbs=" +
        weight_lbs_cookie +
        "&has_insurance=" +
        has_insurance_cookie +
        "&insurance_interest=" +
        insurance_interest_cookie +
        "&personal_income=" +
        personal_income_cookie +
        "&coverage_amount=" +
        coverage_amount_cookie +
        "&coverage_term=" +
        coverage_term_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      rated_health_cookie &&
      height_feet_cookie &&
      height_inches_cookie &&
      weight_lbs_cookie &&
      has_insurance_cookie &&
      insurance_interest_cookie &&
      personal_income_cookie
    ) {
      urlToRedirect =
        "https://consumerdirectlife.com/amount-length?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&rated_health=" +
        rated_health_cookie +
        "&height_feet=" +
        height_feet_cookie +
        "&height_inches=" +
        height_inches_cookie +
        "&weight_lbs=" +
        weight_lbs_cookie +
        "&has_insurance=" +
        has_insurance_cookie +
        "&insurance_interest=" +
        insurance_interest_cookie +
        "&personal_income=" +
        personal_income_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      rated_health_cookie &&
      height_feet_cookie &&
      height_inches_cookie &&
      weight_lbs_cookie &&
      has_insurance_cookie &&
      insurance_interest_cookie
    ) {
      urlToRedirect =
        "https://consumerdirectlife.com/income?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&rated_health=" +
        rated_health_cookie +
        "&height_feet=" +
        height_feet_cookie +
        "&height_inches=" +
        height_inches_cookie +
        "&weight_lbs=" +
        weight_lbs_cookie +
        "&has_insurance=" +
        has_insurance_cookie +
        "&insurance_interest=" +
        insurance_interest_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      rated_health_cookie &&
      height_feet_cookie &&
      height_inches_cookie &&
      weight_lbs_cookie &&
      has_insurance_cookie
    ) {
      urlToRedirect =
        "https://consumerdirectlife.com/insurance-preferences?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&rated_health=" +
        rated_health_cookie +
        "&height_feet=" +
        height_feet_cookie +
        "&height_inches=" +
        height_inches_cookie +
        "&weight_lbs=" +
        weight_lbs_cookie +
        "&has_insurance=" +
        has_insurance_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      rated_health_cookie &&
      height_feet_cookie &&
      height_inches_cookie &&
      weight_lbs_cookie
    ) {
      urlToRedirect =
        "https://consumerdirectlife.com/life-insurance?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&rated_health=" +
        rated_health_cookie +
        "&height_feet=" +
        height_feet_cookie +
        "&height_inches=" +
        height_inches_cookie +
        "&weight_lbs=" +
        weight_lbs_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      rated_health_cookie
    ) {
      urlToRedirect =
        "https://consumerdirectlife.com/height-weight?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&rated_health=" +
        rated_health_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie
    ) {
      urlToRedirect =
        "https://consumerdirectlife.com/rate-health?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie
    ) {
      urlToRedirect =
        "https://consumerdirectlife.com/gender?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie;
    }
    return urlToRedirect;
  } catch (error) {
    //console.log("GetRedirectUrl " + error);
  }
}
