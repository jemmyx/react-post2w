<?php
require_once('/home/www/sysadm/base.php');

// var_dump($_POST);

/* https://github.com/axios/axios/issues/1195

An alternative

$body = file_get_contents('php://input');
if you expect json:

$json=json_decode($body);
This code: */

/* var_dump($_POST); */


$itemID = $_POST["itemID"];

$res = execUpdate("delete from socialweb.sys_socialwebsite where id = $itemID");

echo json_encode(	array('success'=>(int)$res, 'code'=>'deleted', 'itemID'=>$itemID)	);




?>