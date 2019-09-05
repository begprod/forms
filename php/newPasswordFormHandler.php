<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

$_POST = json_decode(file_get_contents('php://input'), true);
$data = $_POST['newPasswordData'];
$response = [];

if(isset($data)) {
	$response = array(
		"PasswordRecoveryResult" => true
	);
}

echo json_encode($response);