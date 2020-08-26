<?php
/**
 * This is a template php file for your countries search.
 * Use as you will, or start over. It's up to you.
 */
 // header('Content-Type: application/json');


// echo $_SERVER['REQUEST_URI'];
$input = (array) json_decode(file_get_contents('php://input'), TRUE);

// Allow CORS for React development server
if (isset($_SERVER['HTTP_ORIGIN'])) {

    if ($_SERVER['HTTP_ORIGIN'] == 'http://localhost:3000') {

        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        // header('Access-Control-Allow-Credentials: true');
        // header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
}

echo json_encode($input)




//  // echo json_encode(['data' => ['Your data']]);

// function CallAPI() {
//   $a = 'myResult';
//   return $a;
// }
// $response = CallAPI();
// echo $response;

?>
