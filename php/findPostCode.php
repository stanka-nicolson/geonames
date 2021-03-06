<?php
	ini_set('display_errors','On');
	error_reporting(E_ALL);
	
	
	
	$executionStartTime = microtime(true) / 1000;

	$url='http://api.geonames.org/findNearbyPostalCodesJSON?formatted=true&postalcode='.$_REQUEST['postalcode'] . '&country='.$_REQUEST['country'] .'&radius=10&maxRows=3&username=c&style=full';

	
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	$result=curl_exec($ch);
	//echo $result;
	
	curl_close($ch);

	$decode = json_decode($result,true);	

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "mission saved";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = $decode['postalCodes'];
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>
