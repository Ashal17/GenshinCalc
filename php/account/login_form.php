<?php
echo'
	<script type="text/javascript">
		equip_account_logged_in = false
	</script>							
	<div class="login_form">
		<form action="' . htmlspecialchars($_SERVER['PHP_SELF']) . '" method="post">
            <div class="line">
                <label>Username</label>
                <input type="text" name="username" class="login" value="' . $username . '">
			</div>
			<div class="login_error">' . $username_err . '</div>    
            <div class="line">
                <label>Password</label>
                <input type="password" name="password" class="login">
			</div>
			<div class="login_error">' . $password_err . '</div>
            <div class="line_3">
                <input type="submit" name="login" class="account_button login_button" value="Login">
            </div>
			<div class="line_4">
				 <label class="checkbox_container">Stay Logged in<input type="checkbox" id="checkbox_login" name="stay_logged" ><span class="checkmark"></span></label>   
			</div>
			<div class="line_3">
				<p>Don\'t have an account? <a class="link" href="/account/register">Register</a></p>
			</div>
        </form>
	</div>
';
?>