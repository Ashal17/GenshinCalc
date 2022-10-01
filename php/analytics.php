<?php
session_start();

require_once "config_db.php";

require_once "account/token_auth.php";

if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){

$user_id = $_SESSION["id"];
}else{
$user_id = 0;
}

$json = json_decode(file_get_contents("php://input"));
$data = $json ->data;

$sql = "INSERT INTO analytics(token, user_id, visited_at, new_session, host, path, query) VALUES (?, ?, NOW(),?, ?, ?, ?)";
		if($stmt = mysqli_prepare($link, $sql)){
			    mysqli_stmt_bind_param($stmt, "siisss", $param_token, $param_userid, $param_new, $param_host, $param_path, $param_query);
				$param_token = $data -> token;
				$param_userid = $user_id;
				$param_new = $data -> new;
				$param_host = $data -> host;
				$param_path = $data -> path;
				$param_query = $data -> query;

				if (mysqli_stmt_execute($stmt))
				{
					
				}				
				mysqli_stmt_close($stmt);
				}


?>