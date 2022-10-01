<?php

require_once "config_ocr.php";

$json = json_decode(file_get_contents("php://input"));
$jsondata = $json ->data;
$imgurl = $jsondata ->url;

$send = array('apikey' => $apikey, 'url' => $imgurl);

$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($send)
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
if ($result === FALSE) { 
echo '{"code":"400", "error":"Bad Request Error", "message":"Can\'t parse URL"}';
}else{

$parsedresults = json_decode($result) ->ParsedResults;
$parsedtext = $parsedresults[0] ->ParsedText;
$parsedtext = str_replace("\r\n","\\n",$parsedtext);

http_response_code(200);
echo '{"code":"200", "error":"-", "message":"'.$parsedtext.'"}';
}





?>