<?php

// Allow CORS for React development server
if (isset($_SERVER['HTTP_ORIGIN'])) {
    if ($_SERVER['HTTP_ORIGIN'] == 'http://localhost:3000') {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    }
}

// Define function that will make the external API call
function CallAPI($searchType, $searchString) {

    // Instantiate response object
    $response = array();
    $response['result'] = '';
    $response['data'] = array();   

    // If a search parameter is empty, return error
    if (is_null($searchString) || $searchString == '' || is_null($searchType) || $searchType == '') {
        $response['result'] = "errorEmptySearch";
        return $response;
    }

    // Initialize endpoint URI based on what type of search has been requested
    switch ($searchType) {
        case 'country-name':
            $uri = "http://restcountries.eu/rest/v2/name/{$searchString}?";
            break;
        case 'full-name':
            $uri = "http://restcountries.eu/rest/v2/name/{$searchString}?fullText=true&";
            break;
        case 'country-code':
            $uri = "http://restcountries.eu/rest/v2/alpha/{$searchString}?";
            break;            
    }
    // Add "fields" query parameter to only request the fields we are interested in
    $searchFields = "name;alpha2Code;alpha3Code;region;subregion;population;languages;flag";
    $uri .= "fields={$searchFields}";

    // Execute API call
    $rawData = file_get_contents($uri);

    /* Check response for errors */
    $statusCode = trim($http_response_header[0]);
    if ($statusCode == "HTTP/1.1 400") {
        // (Server error)
        $response['result'] = "errorServerError";
        return $response;      
    }
    if ($statusCode == "HTTP/1.1 404") {
        // (No search results)
        $response['result'] = "errorNoResults";
        return $response;      
    }
    if ($statusCode != "HTTP/1.1 200") {
        // (Unknown error)
        $response['result'] = "errorUnknownError";
        return $response;      
    }    

    // Decode JSON API response data
    $countryData = json_decode($rawData, true); 

    // (If response is an associatve array, wrap it in a sequential array)
    if (array_keys($countryData) !== range(0, count($countryData) - 1)) {
        $countryData = array(0 => $countryData); // (Is it a bad PHP pattern to mutate instance?)
    }

    // Sort the results by population
    usort($countryData, function($a, $b) {
        return $b['population'] <=> $a['population'];
    });

    // Return response
    $response['result'] = 'success';
    $response['data'] = $countryData;
    return $response;
}

// Get "country search" form values from frontend search call
$input = json_decode(file_get_contents('php://input'), TRUE);

// Call external API to get country list
$countries = CallAPI($input["searchType"], $input["searchString"]);

// Return results to frontend
echo json_encode($countries);

?>
