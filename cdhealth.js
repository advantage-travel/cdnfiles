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
      "insurance_interest",
      "has_insurance",
      "household_count",
      "employment_status",
      "personal_income",
      "med_conditions",
      "tobacco_user",
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
    "insurance_interest",
    "has_insurance",
    "household_count",
    "employment_status",
    "personal_income",
    "med_conditions",
    "tobacco_user",
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
    const insurance_interest_cookie = userCookies["insurance_interest"];
    const has_insurance_cookie = userCookies["has_insurance"];
    const household_count_cookie = userCookies["household_count"];
    const employment_status_cookie = userCookies["employment_status"];
    const personal_income_cookie = userCookies["personal_income"];
    const tobacco_user_cookie = userCookies["tobacco_user"];
    const med_conditions_cookie = userCookies["med_conditions"];
    if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      insurance_interest_cookie &&
      has_insurance_cookie &&
      household_count_cookie &&
      employment_status_cookie &&
      personal_income_cookie &&
      tobacco_user_cookie &&
      med_conditions_cookie
    ) {
      urlToRedirect =
        "https://consumerdirecthealth.com/comments?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&insurance_interest=" +
        insurance_interest_cookie +
        "&has_insurance=" +
        has_insurance_cookie +
        "&household_count=" +
        household_count_cookie +
        "&employment_status=" +
        employment_status_cookie +
        "&personal_income=" +
        personal_income_cookie +
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
      insurance_interest_cookie &&
      has_insurance_cookie &&
      household_count_cookie &&
      employment_status_cookie &&
      personal_income_cookie &&
      tobacco_user_cookie
    ) {
      urlToRedirect =
        "https://consumerdirecthealth.com/conditions?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&insurance_interest=" +
        insurance_interest_cookie +
        "&has_insurance=" +
        has_insurance_cookie +
        "&household_count=" +
        household_count_cookie +
        "&employment_status=" +
        employment_status_cookie +
        "&personal_income=" +
        personal_income_cookie +
        "&tobacco_user=" +
        tobacco_user_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      insurance_interest_cookie &&
      has_insurance_cookie &&
      household_count_cookie &&
      employment_status_cookie &&
      personal_income_cookie
    ) {
      urlToRedirect =
        "https://consumerdirecthealth.com/tobacco?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&insurance_interest=" +
        insurance_interest_cookie +
        "&has_insurance=" +
        has_insurance_cookie +
        "&household_count=" +
        household_count_cookie +
        "&employment_status=" +
        employment_status_cookie +
        "&personal_income=" +
        personal_income_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      insurance_interest_cookie &&
      has_insurance_cookie &&
      household_count_cookie &&
      employment_status_cookie
    ) {
      urlToRedirect =
        "https://consumerdirecthealth.com/income?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&insurance_interest=" +
        insurance_interest_cookie +
        "&has_insurance=" +
        has_insurance_cookie +
        "&household_count=" +
        household_count_cookie +
        "&employment_status=" +
        employment_status_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      insurance_interest_cookie &&
      has_insurance_cookie &&
      household_count_cookie
    ) {
      urlToRedirect =
        "https://consumerdirecthealth.com/workstatus?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&insurance_interest=" +
        insurance_interest_cookie +
        "&has_insurance=" +
        has_insurance_cookie +
        "&household_count=" +
        household_count_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      insurance_interest_cookie &&
      has_insurance_cookie
    ) {
      urlToRedirect =
        "https://consumerdirecthealth.com/hhcount?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&insurance_interest=" +
        insurance_interest_cookie +
        "&has_insurance=" +
        has_insurance_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie &&
      insurance_interest_cookie
    ) {
      urlToRedirect =
        "https://consumerdirecthealth.com/hasins?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie +
        "&gender=" +
        gender_cookie +
        "&insurance_interest=" +
        insurance_interest_cookie;
    } else if (
      insturance_type_cookie &&
      postal_code_cookie &&
      date_of_birth_cookie &&
      email_cookie &&
      gender_cookie
    ) {
      urlToRedirect =
        "https://consumerdirecthealth.com/interest?insturance_type=" +
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
        "https://consumerdirecthealth.com/gender?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie +
        "&date_of_birth=" +
        date_of_birth_cookie +
        "&email=" +
        email_cookie;
    } else if (insturance_type_cookie && postal_code_cookie) {
      urlToRedirect =
        "https://consumerdirecthealth.com/birthday?insturance_type=" +
        insturance_type_cookie +
        "&postal_code=" +
        postal_code_cookie;
    }

    return urlToRedirect;
  } catch (error) {
    // console.log("GetRedirectUrl " + error);
  }
}
