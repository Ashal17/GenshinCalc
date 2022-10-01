<?php
	$url = 'https://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
	$code = parse_url($url, PHP_URL_QUERY);

if ($code){
	$split = explode ("$", $code);
	$split2 = explode ("&", $split[1]);
	$sql = "SELECT genshin_characters.name, genshin_characters.name_id, genshin_visions.color FROM genshin_characters INNER JOIN genshin_visions ON genshin_characters.vision_id = genshin_visions.id WHERE BINARY genshin_characters.base64 = ?";

	if($stmt = mysqli_prepare($link, $sql)){

		mysqli_stmt_bind_param($stmt, "s", $param_base64);
		$param_base64 = $split2[0];
		if(mysqli_stmt_execute($stmt)){
			mysqli_stmt_store_result($stmt);
            if(mysqli_stmt_num_rows($stmt) == 1){
				mysqli_stmt_bind_result($stmt, $name, $nameid, $colorhex);
				if(mysqli_stmt_fetch($stmt)){
				echo'
				<meta property="og:site_name" content="Ashal.eu">
				<meta property="og:url" content="https://genshin.ashal.eu">
				<meta property="og:title" content="Genshin Calculator">
				<meta property="og:description" content="'. $name .'">
				<meta property="og:type" content="website">
				<meta name="theme-color" content="#'.$colorhex.'">
				<meta name="twitter:image" content="https://genshin.ashal.eu/images/icons/character/' . $nameid .'/char.png">
				<meta name="twitter:card" content="summary_large_image">
				';
				}
				
			}
		}	
		mysqli_stmt_close($stmt);	
	}
}

?>