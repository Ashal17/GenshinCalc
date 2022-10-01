<?php
// Initialize the session
session_start();
 
// Unset all of the session variables
$_SESSION = array();
 
// Destroy the session.
session_destroy();

$cookie_name = "authentication_token";

if (isset($_COOKIE[$cookie_name]))
{
	require_once "../php/config_db.php";

	setcookie($cookie_name, "", time() - 3600, "/", "ashal.eu", true);

	$sql = "UPDATE users_tokens SET expire_at = NOW() WHERE token = ?";

							if($stmt = mysqli_prepare($link, $sql)){
							 // Bind variables to the prepared statement as parameters
							mysqli_stmt_bind_param($stmt, "s", $param_token);
							$param_token = $_COOKIE[$cookie_name];
							mysqli_stmt_execute($stmt);
							}
}

 
// Redirect to login page
header("location: login");
exit();
?>