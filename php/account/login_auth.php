<?php

$username = $password = "";
$username_err = $password_err = "";
 
// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){
if ($_POST["login"])
{
	
    // Check if username is empty
    if(empty(trim($_POST["username"]))){
        $username_err = "Please enter username.";
    } else{
        $username = trim($_POST["username"]);
    }
    
    // Check if password is empty
    if(empty(trim($_POST["password"]))){
        $password_err = "Please enter your password.";
    } else{
        $password = trim($_POST["password"]);
    }
    
    // Validate credentials
    if(empty($username_err) && empty($password_err)){


        // Prepare a select statement
        $sql = "SELECT users.id, users.username, users.password, users.wrong_password, users.role_id, users.admin_note FROM users WHERE username = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_username);
			$param_username = $username;

            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // Store result
                mysqli_stmt_store_result($stmt);
                
                // Check if username exists, if yes then verify password
                if(mysqli_stmt_num_rows($stmt) == 1){                    
                    // Bind result variables
                    mysqli_stmt_bind_result($stmt, $id, $username, $hashed_password, $wrong_password, $role_id, $admin_note);
                    if(mysqli_stmt_fetch($stmt)){
						
						$param_id = $id;
						$param_username = $username;

						if ($wrong_password < 5){
							if(password_verify($password, $hashed_password)){

							

							if($wrong_password > 0){
							$sql = "UPDATE users SET wrong_password = 0 WHERE id = ?";
    
							 if($stmt = mysqli_prepare($link, $sql)){
							 // Bind variables to the prepared statement as parameters
							mysqli_stmt_bind_param($stmt, "i", $param_id);
							mysqli_stmt_execute($stmt);
							}
							}

							if($role_id > 0){
							// Password is correct, so start a new session

							$sql = "INSERT INTO action_log_logins (user_id, username, result) VALUES (?, ?, 1)";

							if($stmt = mysqli_prepare($link, $sql)){
							 // Bind variables to the prepared statement as parameters
							mysqli_stmt_bind_param($stmt, "is", $param_id, $param_username);
							mysqli_stmt_execute($stmt);
							}

							require_once "login_setup.php";
                            // Redirect user to welcome page

							if ($_POST["stay_logged"])
							{
										do{

		$token = bin2hex(random_bytes(64));

		$sql = "SELECT id FROM users_tokens WHERE token = ?";
        
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

		$sql = "INSERT INTO users_tokens (user_id, token, created_at, expire_at) VALUES (?, ?, NOW(), NOW() + INTERVAL 30 DAY)";

							if($stmt = mysqli_prepare($link, $sql)){
							 // Bind variables to the prepared statement as parameters
							mysqli_stmt_bind_param($stmt, "is", $param_id, $param_token);
							$param_token = $token;
							$param_id = $id;
							if (mysqli_stmt_execute($stmt)){
								$cookie_name = "authentication_token";
								$cookie_value = $token;
								setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/", "ashal.eu", true);
							}
							}

								

							}
							



                            //header("location: welcome");
							}else{
							$password_err = "The account has been Banned<br>Reason: " . $admin_note;

							$sql = "INSERT INTO action_log_logins (user_id, username, result) VALUES (?, ?, 3)";

							if($stmt = mysqli_prepare($link, $sql)){
							 // Bind variables to the prepared statement as parameters
							mysqli_stmt_bind_param($stmt, "is", $param_id, $param_username);
							mysqli_stmt_execute($stmt);
							}
							}


                            
                        } else{
                            // Display an error message if password is not valid
                            $password_err = "The account/password is not valid. If you forgot your password, contact an  <a href='https://ashal.eu/market/contacts'  class='shop_link'>administrator</a>.";
							$sql = "UPDATE users SET wrong_password = wrong_password + 1 WHERE id = ?";
    
							 if($stmt = mysqli_prepare($link, $sql)){
							 // Bind variables to the prepared statement as parameters
							mysqli_stmt_bind_param($stmt, "i", $param_id);
							mysqli_stmt_execute($stmt);
							}

							$sql = "INSERT INTO action_log_logins (user_id, username, result) VALUES (?, ?, 0)";

							if($stmt = mysqli_prepare($link, $sql)){
							 // Bind variables to the prepared statement as parameters
							mysqli_stmt_bind_param($stmt, "is", $param_id, $param_username);
							mysqli_stmt_execute($stmt);
							}
                        }
						}else{
                            $password_err = "Account has been blocked due to too many unsucessful login attemtps. Please contact an  <a href='https://ashal.eu/market/contacts'  class='shop_link'>administrator</a>.";
							$sql = "UPDATE users SET wrong_password = wrong_password + 1 WHERE id = ?";
    
							 if($stmt = mysqli_prepare($link, $sql)){
							 // Bind variables to the prepared statement as parameters
							mysqli_stmt_bind_param($stmt, "i", $param_id);
							mysqli_stmt_execute($stmt);
							}

							$sql = "INSERT INTO action_log_logins (user_id, username, result) VALUES (?, ?, 2)";

							if($stmt = mysqli_prepare($link, $sql)){
							 // Bind variables to the prepared statement as parameters
							mysqli_stmt_bind_param($stmt, "is", $param_id, $param_username);
							mysqli_stmt_execute($stmt);
							}
						}

                        
                    }
                } else{
                    // Display an error message if username doesn't exist
                    $password_err = "The account/password is not valid. If you forgot your password, contact an  <a href='https://ashal.eu/market/contacts'  class='shop_link'>administrator</a>.";	

					$sql = "INSERT INTO action_log_logins (user_id, username, result) VALUES (0, ?, 7)";
					$param_username = $username;
							if($stmt = mysqli_prepare($link, $sql)){
							 // Bind variables to the prepared statement as parameters
							mysqli_stmt_bind_param($stmt, "s", $param_username);
							mysqli_stmt_execute($stmt);
							}
                }
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }
        }else{
                    $password_err = "Oops! Something went wrong. Please try again later.";					
}
        
        // Close statement
        mysqli_stmt_close($stmt);
    }
    
}

 
    // Close connection
    
}

?>