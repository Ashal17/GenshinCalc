<?php

$cookie_name = "ashal_cookie_test";
$cookie_value = 0;
if(isset($_COOKIE[$cookie_name])){
	$cookie_value = $_COOKIE[$cookie_name];
	setcookie($cookie_name, $cookie_value, time() + (86400 * 365), "/", "ashal.eu", true);
}else{

do{
		$token = bin2hex(random_bytes(64));

		$sql = "SELECT id FROM analytics_tokens WHERE token = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_token);
            
            // Set parameters
            $param_token = $token;
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                /* store result */
                mysqli_stmt_store_result($stmt);
                
                if(mysqli_stmt_num_rows($stmt) == 1){
                    $unique = false;
                } else{
                    $unique = true;
                }
            } else{
                echo "Oops! Something went wrong. Please try again later. Rnd";
            }
        }
         
        // Close statement
        mysqli_stmt_close($stmt);


		} while ($unique == false);

		$sql = "INSERT INTO analytics_tokens (token, created_at) VALUES (?, NOW())";

							if($stmt = mysqli_prepare($link, $sql)){
							 // Bind variables to the prepared statement as parameters
							mysqli_stmt_bind_param($stmt, "s", $param_token);
							$param_token = $token;
							if (mysqli_stmt_execute($stmt)){

								$cookie_value = $token;
								setcookie($cookie_name, $cookie_value, time() + (86400 * 365), "/", "ashal.eu", true);
							}
							}
							mysqli_stmt_close($stmt);

}

if(isset($_COOKIE["active_session"])){
	$session_starter = 0;
	
}else{
	$session_starter = 1;
}

setcookie("active_session", "1", time() + (1800), "/", "ashal.eu", true);


		$sql = "INSERT INTO analytics_visits (token, user_id, visited_at, new_session, host, path, query) VALUES (?, ?, NOW(),?, ?, ?, ?)";
	
	if($stmt = mysqli_prepare($link, $sql)){
	
							 // Bind variables to the prepared statement as parameters
							mysqli_stmt_bind_param($stmt, "siisss", $param_token, $param_userid, $param_session, $param_host, $param_path, $param_query);
							$param_token = $cookie_value;					

							if (isset($_SESSION["id"]))
							{
								$param_userid = $_SESSION["id"];

							}else{
								$param_userid = 0;
							}
							$param_session = $session_starter;
		
							$url = 'https://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

							$param_host = parse_url($url, PHP_URL_HOST);

							$param_path = parse_url($url, PHP_URL_PATH);

							$param_query = parse_url($url, PHP_URL_QUERY);


							if (mysqli_stmt_execute($stmt)){
							
							}
							}
							mysqli_stmt_close($stmt);

		





?>