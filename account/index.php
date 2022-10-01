<?php

session_start();

require_once "../php/config_db.php";
require_once "../php/account/token_auth.php";

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login");
    exit();
}

$new_password = $confirm_password = "";
$displayname = $_SESSION["displayname"];
$new_password_err = $confirm_password_err = $displayname_err = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){

	if($_POST['owner_info']) {

		if(empty(trim($_POST["displayname"]))){
				$displayname_err = "Please enter a name.";     
			} else{
				$displayname = trim($_POST["displayname"]);
			}

    if(empty($displayname_err)){

        $sql = "UPDATE users SET displayname = ? WHERE id = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
            mysqli_stmt_bind_param($stmt, "si", $param_displayname, $param_id);
            $param_displayname = htmlspecialchars($displayname);
            $param_id = $_SESSION["id"];
				if(mysqli_stmt_execute($stmt)){
					$_SESSION["displayname"] = $displayname;
				} else{
					echo "Oops! Something went wrong. Please try again later.";
				}
			}
			mysqli_stmt_close($stmt);
		}
	} elseif($_POST['acc_info']){
		if(empty(trim($_POST["new_password"]))){
			$new_password_err = "Please enter the new password.";     
		} elseif(strlen(trim($_POST["new_password"])) < 6){
			$new_password_err = "Password must have atleast 6 characters.";
		} else{
			$new_password = trim($_POST["new_password"]);
		}
		if(empty(trim($_POST["confirm_password"]))){
			$confirm_password_err = "Please confirm the password.";
		} else{
			$confirm_password = trim($_POST["confirm_password"]);
			if(empty($new_password_err) && ($new_password != $confirm_password)){
				$confirm_password_err = "Password did not match.";
			}
		}
        
		if(empty($new_password_err) && empty($confirm_password_err)){
			$sql = "UPDATE users SET password = ? WHERE id = ?";
        
			if($stmt = mysqli_prepare($link, $sql)){
            mysqli_stmt_bind_param($stmt, "si", $param_password, $param_id);
            
            $param_password = password_hash($new_password, PASSWORD_DEFAULT);
            $param_id = $_SESSION["id"];
            if(mysqli_stmt_execute($stmt)){
					session_destroy();
					header("location: /account/");
					exit();
				} else{
					echo "Oops! Something went wrong. Please try again later.";
				}
			}
			mysqli_stmt_close($stmt);
		}   
	}
}

?>


<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  
	
    <title>Ashal - Genshin</title>

<?php
	require_once "../header.php";
?>

</head>

<body class="dark_theme" >

	<?php
		require_once "../nav.php";
	?>

	<div class="main">
		<div class="frame">
			<div class="line">
				<p class="frame_title">My Account</p>
				<a href="logout.php" class="account_button menu_button">Sign Out</a>
			</div>

			<div class="double_form">
				<div class="account_form">
					<form action="<?php echo basename($_SERVER['PHP_SELF'],'.php'); ?>" method="post"> 
						<div class="line ">
							<label>Displayed name</label>
							<input type="text" name="displayname" class="login" value="<?php echo $displayname ?>">
						</div>
						<div class="error">
							<?php echo $displayname_err; ?>
						</div>
						<div class="line_3">
							<input type="submit" class="account_button" value="Change Info" name="owner_info">                
						</div>
					</form>
				</div>

				<div class="account_form">
					<form action="<?php echo basename($_SERVER['PHP_SELF'],'.php'); ?>" method="post"> 
						<div class="line">
							<p>Username</p>
							<p class="input_locked"><?php echo $_SESSION["username"]; ?></p>
						</div>
						<div class="line">
							<p>Usercode</p>
							<p class="input_locked"><?php echo $_SESSION["usercode"]; ?></p>
						</div>
						<div class="line">
							<p>Role</p>
							<p class="input_locked"><?php echo $_SESSION["role_name"]; ?></p>
						</div>			
						<div class="line <?php echo (!empty($new_password_err)) ? 'has-error' : ''; ?>">
							<label>New Password</label>
							<input type="password" name="new_password" class="login" value="<?php echo $new_password; ?>">
						</div>
						<div class="error">
							<?php echo $new_password_err; ?>
						</div>
						<div class="line ">
							<label>Confirm Password</label>
							<input type="password" name="confirm_password" class="login">
						</div>
						<div class="error">
							<?php echo $confirm_password_err; ?>
						</div>
						<div class="line_3">
							<input type="submit" class="account_button" value="Change Password" name="acc_info">                
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<?php
		require_once "../footer.php";
	?>

</body>
</html>