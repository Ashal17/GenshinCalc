<?php

session_start();

require_once "../php/config_db.php";
require_once "../php/account/token_auth.php";
require_once "../php/config_recaptcha.php";

if(isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] === true){
    header("location: /account/");
    exit();
}

$username = $displayname = $password = $confirm_password = "";
$username_err = $displayname_err = $password_err = $confirm_password_err = $recaptcha_err = "";
 
// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){
 
    // Validate username
    if(empty(trim($_POST["username"]))){
        $username_err = "Please enter a username.";
    } else{
        // Prepare a select statement
        $sql = "SELECT id FROM users WHERE username = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_username);
            
            // Set parameters
            $param_username = trim($_POST["username"]);
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                /* store result */
                mysqli_stmt_store_result($stmt);
                
                if(mysqli_stmt_num_rows($stmt) == 1){
                    $username_err = "This username is already taken.";
                } else{
                    $username = trim($_POST["username"]);
                }
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }
        }
         
        // Close statement
        mysqli_stmt_close($stmt);
    }

	if(empty(trim($_POST["displayname"]))){
        $displayname_err = "Please enter a name.";
    }else{
	$displayname = trim($_POST["displayname"]);
	}
    
    // Validate password
    if(empty(trim($_POST["password"]))){
        $password_err = "Please enter a password.";     
    } elseif(strlen(trim($_POST["password"])) < 6){
        $password_err = "Password must have atleast 6 characters.";
    } else{
        $password = trim($_POST["password"]);
    }
    
    // Validate confirm password
    if(empty(trim($_POST["confirm_password"]))){
        $confirm_password_err = "Please confirm password.";     
    } else{
        $confirm_password = trim($_POST["confirm_password"]);
        if(empty($password_err) && ($password != $confirm_password)){
            $confirm_password_err = "Password did not match.";
        }
    }

	//recaptcha


    if(empty($_POST['g-recaptcha-response']))
 {
  $recaptcha_err = 'Captcha is required';
 }
 else
 {
  

  $response = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret_key.'&response='.$_POST['g-recaptcha-response']);

  $response_data = json_decode($response);

  if(!$response_data->success)
  {
   $recaptcha_err = 'Captcha verification failed';
  }
 }
    
    // Check input errors before inserting in database
    if(empty($username_err) && empty($displayname_err) && empty($password_err) && empty($confirm_password_err) && empty($recaptcha_err)){

		$characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 

		//generate random string
		do{

		$random_string = ''; 
  
		for ($i = 0; $i < 5; $i++) { 
			$index = rand(0, strlen($characters) - 1); 
			$random_string .= $characters[$index]; 
		}

		$sql = "SELECT id FROM users WHERE usercode = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_usercode);
            
            // Set parameters
            $param_usercode = $random_string;
            
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

		 

		$color_id = rand(1,12);
		$color = "";

		$sql = "SELECT color FROM CT_user_colors WHERE id = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "i", $param_colorid);
            
            // Set parameters
            $param_colorid = $color_id;
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                /* store result */
                mysqli_stmt_store_result($stmt);
				mysqli_stmt_bind_result($stmt, $color);
                    mysqli_stmt_fetch($stmt);
				}}
        
        // Prepare an insert statement
        $sql = "INSERT INTO users (username, password, displayname, server_id, usercode) VALUES (?, ?, ?, 1, ?)";
         
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "ssss", $param_username, $param_password, $param_displayname, $param_usercode);
            
            // Set parameters
            $param_username = $username;
			$param_displayname = htmlspecialchars($displayname);
            $param_password = password_hash($password, PASSWORD_DEFAULT); // Creates a password hash
			$param_usercode = $random_string;
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // Redirect to login page
                $sql = "SELECT id FROM users WHERE username = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_username);
            
            // Set parameters
            $param_username = $username;
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // Store result
                mysqli_stmt_store_result($stmt);
                
                // Check if username exists, if yes then verify password
                if(mysqli_stmt_num_rows($stmt) == 1){                    
                    // Bind result variables
                    mysqli_stmt_bind_result($stmt, $id);
                    if(mysqli_stmt_fetch($stmt)){
                            // Password is correct, so start a new session

							$sql = "INSERT INTO action_log_logins (user_id, result) VALUES (?, 1)";
    
							$param_id = $id;
							if($stmt = mysqli_prepare($link, $sql)){
							 // Bind variables to the prepared statement as parameters
							mysqli_stmt_bind_param($stmt, "i", $param_id);
							mysqli_stmt_execute($stmt);
							}

                            session_start();
                            
                            // Store data in session variables
                            $_SESSION["loggedin"] = true;
                            $_SESSION["id"] = $id;
                            $_SESSION["username"] = htmlspecialchars($username);
							$_SESSION["role_id"] = 10;
							$_SESSION["role_name"] = 'New User';
							$_SESSION["displayname"] = $displayname;
							$_SESSION["contact"] = '';
							$_SESSION["contact_discord"] = '';
							$_SESSION["server_id"] = 1;
							$_SESSION["color_id"] = $color_id;
							$_SESSION["color"] = $color;
							$_SESSION["post_paging"] = 20;
							$_SESSION["admin_note"] = '';
							$_SESSION["usercode"] = $random_string;
							$_SESSION["post_limit"] = 50;
							$_SESSION["post_count"] = 0;
							$_SESSION["post_limit_tears"] = 100;
							$_SESSION["post_count_tears"] = 0;
							$_SESSION["highlight_limit"] = 12;
							$_SESSION["highlight_sell"] = 0;
							$_SESSION["highlight_buy"] = 0;
							$_SESSION["highlight_tears_sell"] = 0;
							$_SESSION["highlight_buy_sell"] = 0;
                            
                            // Redirect user to welcome page
                            header("location: /account/");
							exit();
                        } 
                } else{
                    // Display an error message if username doesn't exist
                    echo "Oops! Something went wrong. Please try again later.";
                }
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }
        }
            } else{
                echo "Something went wrong. Please try again later.";
            }
        }
         
        // Close statement
        mysqli_stmt_close($stmt);
    }
    
    // Close connection
    mysqli_close($link);
}

?>


<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  
	
    <title>Ashal - Genshin</title>

<?php
	require_once "../header.php";
?>
	<script type="text/javascript">
		if (localStorage.getItem("night_mode") == "night") {
			var onloadCallback = function() {
				grecaptcha.render('html_element', {
					'sitekey': '6Ldest8UAAAAAIuvkPsKQY474-rnNlZ3tq1Au7kp',
					'theme' : 'dark'
				});
			};
		} else {
			var onloadCallback = function() {
				grecaptcha.render('html_element', {
					'sitekey': '6Ldest8UAAAAAIuvkPsKQY474-rnNlZ3tq1Au7kp',
					'theme' : 'light'
				});
			};
		}
    </script>

</head>

<body class="dark_theme" >

	<?php
		require_once "../nav.php";
	?>

	<div class="main">
		<div class="frame">
			<div class="line">
                <p class="frame_title">Register</p>
            </div>

			<div class="double_form">

				<div class="account_form">
					<form action="<?php echo basename($_SERVER['PHP_SELF'],'.php'); ?>" method="post">
						<div class="line">
							<label>Username</label>
							<input type="text" name="username" class="login" value="<?php echo $username; ?>">
						</div>
						<div class="error">
							<?php echo $username_err; ?>
						</div>
						<div class="line">
							<label>Displayed name</label>
							<input type="text" name="displayname" class="login" value="<?php echo $displayname; ?>">
						</div>
						<div class="error">
							<span ><?php echo $displayname_err; ?></span>
						</div>
						<div class="line">
							<label>Password</label>
							<input type="password" name="password"  class="login"  value="<?php echo $password; ?>">
						</div>
						<div class="error">
							<?php echo $password_err; ?>
						</div>
						<div class="line">
							<label>Confirm Password</label>
							<input type="password" name="confirm_password"  class="login"  value="<?php echo $confirm_password; ?>">
						</div>
						<div class="error">
							<?php echo $confirm_password_err; ?>
						</div>
						<div class="line_3 html_element_parent">
							<div id="html_element"></div>
						</div>
						<div class="error">
							<?php echo $recaptcha_err; ?>
						</div>
						<div class="line_3">
							<input type="submit" class="account_button login_button" value="Submit">
						</div>
						<div class="line_3">
							<p>Already have an account? <a class="link" href="login">Login</a></p>
						</div>
					</form>

					<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
						async defer>
					</script>

				</div>
				<div class="account_form">
					<p class="rules_desc">Username is used only for login into your account and is not shown anywhere</p>
					<p class="rules_desc">Displayed name can be shown to other users and can be changed at any time</p>
					<p class="rules_desc">Passwords must be at least 6 characters long</p>
					<p class="rules_desc">For your own safety, do not use username/password that you use for other services</p>
					<p class="rules_desc">By registering you agree that any information you enter will be stored and linked to you account.</p>
				</div>
			</div>
		</div>
    </div>

	<?php
		require_once "../footer.php";
	?>

</body>
</html>