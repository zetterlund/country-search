const HOST = process.env.REACT_APP_HOST_PREFIX;
// const HOST = "http://localhost:8765";

// Function to call backend service to get country list
async function getCountries(searchType, searchString) {
  // Instantiate return variables
  let countries = [];
  let error = null;

  // Call backend service
  const rawResponse = await fetch(`${HOST}/api/index.php`, {
    method: "post",
    mode: "cors",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({ searchType, searchString }),
  });
  // (Parse JSON response)
  const response = await rawResponse.json();

  // Check for errors in response
  if (response["result"] !== "success") {
    error = response["result"];
    return { error, countries };
  }

  // Save resulting data as countries
  countries = response["data"];

  // Modify results in-place to replace empty strings with "(None)"
  for (const country of countries) {
    country.region = country.region === "" ? "(None)" : country.region;
    country.subregion = country.subregion === "" ? "(None)" : country.subregion;
  }

  return { error, countries };
}

export default getCountries;
