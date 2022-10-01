<?php

session_start();

require_once "../config_db.php";
require_once "token_auth.php";

if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){

	$user_id = $_SESSION["id"];
	$input = file_get_contents("php://input");
	$errormessage = false;
	//$json = json_decode(file_get_contents("php://input"));
	$sql = "SELECT id FROM genshin_user_data WHERE id = ?";
	if($stmt = mysqli_prepare($link, $sql)){
		mysqli_stmt_bind_param($stmt, "i", $param_userid);				
		$param_userid = $user_id;
		if (mysqli_stmt_execute($stmt)){
			mysqli_stmt_store_result($stmt);
			if(mysqli_stmt_num_rows($stmt) == 1){
			//update
				$sql = "UPDATE genshin_user_data SET setup = ? WHERE id = ?";
			}else{
			//insert
				$sql = "INSERT INTO genshin_user_data(setup, id, artifact_list) VALUES (?, ?, NULL)";
			}
			if($stmt = mysqli_prepare($link, $sql)){
			    mysqli_stmt_bind_param($stmt, "si", $param_input, $param_userid);
				$param_input = $input;
				if (mysqli_stmt_execute($stmt)){
					//success
				}else{
					$errormessage = "Error when updating Setups";
				}
			}else{		
				$errormessage = "Error when updating Setups";
			}
		}else{		
			$errormessage = "Error when querying database";
		}
	}else{		
		$errormessage = "Error when querying database";
	}
	mysqli_close($link);				
	if ($errormessage)
	{
		http_response_code(500);
		echo '{"code":"500", "error":"Internal Server Error", "message":"' . $errormessage . '"}';
	}else{
		http_response_code(200);
		echo '{"code":"200", "error":"-", "message":"Success"}';
	}
				
	
}else{
	http_response_code(403);
	echo '{"code":"403", "error":"Forbidden", "message":"You have been logged out. Please use \"Stay logged in\" option or relog before trying again."}';
}

?>