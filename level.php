
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  
	<link rel="stylesheet" href="styles/select2.css" />
    <title>Ashal - Genshin</title>

	<meta charset="UTF-8" />
    <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="16x16" />
	<link rel="stylesheet" type="text/css" href="styles/main.css" media="screen" />	
	<script src="javascript/common/night_mode.js"></script>
	<script src="javascript/common/common.js"></script>
	<script src="javascript/common/common_analytics.js"></script>

	
	
	<link rel="stylesheet" type="text/css" href="styles/calc.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="styles/level.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="styles/svg.css" media="screen" />

	<script src="javascript/imported/jquery-3.2.0.min.js"></script>
    <script src="javascript/imported/select2.min.js"></script>

	<script src="javascript/calcs/logic/level.js"></script>
	<script src="javascript/calcs/logic/genshin.js"></script>
	<script src="javascript/calcs/resources/common.js"></script>
	<script src="javascript/calcs/resources/level.js"></script>
	<script src="javascript/calcs/resources/equip.js"></script>
	<script src="javascript/calcs/resources/character.js"></script>
	<script src="javascript/calcs/resources/weapon.js"></script>
	<script src="javascript/calcs/resources/item.js"></script>
	<script>analytics_send()</script>

</head>

<body class="dark_theme" onload="level_setup()">

	<?php
		require_once "nav.php";
	?>

	<div class="automatic" id="automatic">
			
	</div>

	<div class="main" onchange="level_change()" >
		
			<div class="loader" id="loader">
            <div class="loader_circle"></div>
            <div class="loader_percent" id="loader_percent"></div>
            <div class="loader_desc" id="loader_desc"></div>
            <div class="hidden" id="loader_error">
                <div class="loader_error" id="loader_error_text">Error</div>
                <div class="loader_btn" onclick="common_loading_hide()">Continue</div>
            </div>
        </div>
        <div class="overlay" id="loader_overlay"></div>
		

		<!--MAIN-->
		<div class="frame character_frame">
		<div class="line">
        <p class="frame_title">Type</p>
		</div>
			<div class="type_line">
			<label class="type_icon label_icon"><input type="radio" checked = "checked" value="character" name="type_select"><div class="label_img"><img src="images/icons/characters.png"><p>Characters</p></div></label>
			<label class="type_icon label_icon"><input type="radio" value="weapon" name="type_select"><div class="label_img"><img src="images/icons/weapons.png"><p>Weapons</p></div></label>
		</div>
			</div>

		<!--CHARACTER-->
		<div class="frame" id="level_character_frame">
		<div class="line">
        <p class="frame_title">Character</p>
		</div>
			<div class="calc character_calc" id="level_character_list">
			
			</div>
		</div>

		<!--WEAPON-->
		<div class="frame" id="level_weapon_frame">
		<div class="line">
        <p class="frame_title">Weapon</p>
		</div>
			<div class="calc weapon_type_calc" id="level_weapon_type_list" onchange="genshin_setup_weapon('level_weapon_list')">
			
			</div>
			<div class="calc weapon_calc" id="level_weapon_list">
			
			</div>
		</div>

		<!--CHARACTER PROGRESS-->
		<div class="frame">
		<div class="line">
        <p class="frame_title">Level</p>
		</div>

			<div class="calc level_calc" >
				<div class="calc_title">From</div>
				<div class="level_line" id="level_list_low" >

			</div>
				<div class="calc_title">To</div>
				<div class="level_line" id="level_list_high" >

				</div>

			</div>

			<div class="calc level_result" id="level_result">

			</div>
		</div>


	</div>

	<?php
		require_once "footer.php";
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