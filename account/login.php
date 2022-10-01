<?php

session_start();

require_once "../php/config_db.php";
require_once "../php/account/token_auth.php";
require_once "../php/account/login_auth.php";

if(isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] === true){
    header("location: /account/");
    exit();
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
	<div class="main" >
		<div class="frame" >
			<div class="line">
				<p class="frame_title">Login</p>
			</div>
			<div class="account_form">
				<?php
					require_once "../php/account/login_form.php";
				?>
			</div>

			<div class="account_form">
				<p class="rules_desc">This website is not affiliated with Mihoyo/Genshin Impact Official and uses its own account for some features.</p>
				<p class="rules_desc">For your own safety do not enter your Mihoyo/genshin Impact Official username/password.</p>
			</div>
		</div>
	</div>

	<?php
		require_once "../footer.php";
	?>

	
<script type="text/javascript">
            $(document).ready(function () {
                $("select").select2({
                    minimumResultsForSearch: Infinity
                });
                $(".search").select2({
                    minimumResultsForSearch: 1
                });
            });
        </script>


</body>
</html>