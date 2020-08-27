<?php

// Allow CORS for React development server
if (isset($_SERVER['HTTP_ORIGIN'])) {

    if ($_SERVER['HTTP_ORIGIN'] == 'http://localhost:3000') {

        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        // header('Access-Control-Allow-Credentials: true');
        // header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
}




function CallAPI($searchType, $searchString) {

    // Instantiate response object
    $response = array();
    $response['result'] = '';
    $response['data'] = array();   

    // If search string is empty, return error
    if (is_null($searchString) || $searchString == '') {
        $response['result'] = "errorEmptySearch";
        return $response;
    }

    // (What about if $searchType is null?)

    // Retrieve country data based on what type of search has been requested
    switch ($searchType) {
        case 'country-name':
            $rawData = file_get_contents("http://restcountries.eu/rest/v2/name/{$searchString}?");
            break;
        case 'full-name':
            $rawData = file_get_contents("http://restcountries.eu/rest/v2/name/{$searchString}?fullText=true");
            break;
        case 'country-code':
            $rawData = file_get_contents("http://restcountries.eu/rest/v2/alpha/{$searchString}?");
            break;            
    }

    // Decode JSON API response data
    $countryData = json_decode($rawData, true); 

    // If request was empty, return error
    if (count($countryData) == 0) {
        $response['result'] = "errorNoResults";
        return $response;
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
// echo json_encode($input);


$countries = CallAPI($input["searchType"], $input["searchString"]);

// Return results to frontend
echo json_encode($countries);





// echo json_encode(['data' => ['Your data']]);

?>
