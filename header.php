<?php
$favicon_ver = 20201031;
$imports_ver = 20201229;
$styles_ver = 20220827;
$javascript_common_ver = 20220918;
$javascript_logic_ver = 20220918;
$javascript_resources_ver = 20220930;

echo '
	<meta charset="UTF-8" />
	<link rel="icon" href="/favicon.ico?' . $favicon_ver .'" type="image/x-icon" sizes="16x16" />
	<link rel="stylesheet" href="/styles/select2.css?' . $styles_ver .'" />
	<link rel="stylesheet" type="text/css" href="/styles/main.css?' . $styles_ver .'" media="screen" />	
	<script src="/javascript/imported/jquery-3.2.0.min.js?' . $imports_ver .'"></script>
    <script src="/javascript/imported/select2.min.js?' . $imports_ver .'"></script>
	<script src="/javascript/common/night_mode.js"></script>
	<script src="/javascript/common/common.js?' . $javascript_common_ver .'"></script>
	<script src="/javascript/common/common_analytics.js"></script>
	<script>analytics_send()</script>
 
	<link rel="stylesheet" type="text/css" href="/styles/svg.css?' . $styles_ver .'" media="screen" />
	<link rel="stylesheet" type="text/css" href="/styles/account.css?' . $styles_ver .'" media="screen" />

';
?>