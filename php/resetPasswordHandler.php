<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

$_POST = json_decode(file_get_contents('php://input'), true);
$data = $_POST['resetPasswordFormData'];
$response = [];

echo json_encode($data);