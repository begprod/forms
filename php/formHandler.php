<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

$_POST = json_decode(file_get_contents('php://input'), true);
$data = array_values($_POST)[0];
$response = [];

if (isset($data)) {
	$response = array(
		"result" => true
	);
}

echo json_encode($response);