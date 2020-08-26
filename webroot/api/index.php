<?php
/**
 * This is a template php file for your countries search.
 * Use as you will, or start over. It's up to you.
 */
 // header('Content-Type: application/json');


// Allow CORS for React development server
if (isset($_SERVER['HTTP_ORIGIN'])) {

    if ($_SERVER['HTTP_ORIGIN'] == 'http://localhost:3000') {

        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        // header('Access-Control-Allow-Credentials: true');
        // header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
}



// function CallAPI($method, $url) {
//     $curl = curl_init();

//     // // $url = sprintf("%s?%s", $url, http_build_query($data));

//     curl_setopt($curl, CURLOPT_URL, $url);
//     curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

//     $result = curl_exec($curl);

//     curl_close($curl);

//     echo $result;

//     return $result;
// }
// $r = CallAPI("GET", "http://restcountries.eu/rest/v2/name/est");

$r = file_get_contents("http://restcountries.eu/rest/v2/name/estonia");
$d = json_decode($r, true);

echo 'ok';

// echo $r;



// echo gettype($r);
// echo 'ok';

// echo json_decode(reset($response));


// echo json_encode(var_dump($response));

// echo json_encode($response);




// $input = (array) json_decode(file_get_contents('php://input'), TRUE);
// echo json_encode($input)




//  // echo json_encode(['data' => ['Your data']]);


?>
