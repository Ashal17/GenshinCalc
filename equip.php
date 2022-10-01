<?php

session_start();

require_once "php/config_db.php";
require_once "php/account/token_auth.php";
require_once "php/account/login_auth.php";


?>


<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  
	
    <title>Ashal - Genshin</title>

<?php
	require_once "header.php";
	require_once "php/equip/dependencies.php";
	require_once "php/equip/meta_og.php";
?>

</head>

<body class="dark_theme" onload="equip_setup()">

	<?php
		require_once "nav.php";
	?>

	<div class="automatic" id="automatic">
			
	</div>

	<div class="main" onchange="equip_url_save()">
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
		<!--CHARACTER-->
		<div class="frame character_frame frame_selectable">
		<div class="line_2" onchange="common_radio_showhide('index', 'equip_', '_list')">
			<div class="title_container" style="width:34%;">

                        <label class="checkbox_container">

                            <input type="radio" name="index" value="character" checked>
                            <div class="frame_title">Character</div>
                        </label>
                    </div>

			<div class="title_container" style="width:34%;" >

                        <label class="checkbox_container">

                            <input type="radio" name="index"  value="party">
                            <div class="frame_title">Party</div>
                        </label>
                    </div>

			<div class="title_container" style="width:34%;" >

                        <label class="checkbox_container">

                            <input type="radio" name="index"  value="enemy">
                            <div class="frame_title">Enemy</div>
                        </label>
                    </div>
        
		</div>

	<div id="equip_character_list" class="calc_container">

			<div class="calc filter_calc" id="equip_character_filter" onchange="genshin_filter_characters()">

				<div class="filter_list">

				<label class="label_icon">
				<input type="checkbox"  id="character_filter_anemo">
				<div class="label_img"><img src="images/icons/element/64p/anemo.png">
					</div>
					<div class="label_img_hover">
						Anemo
					</div>
				</label>

				<label class="label_icon">
				<input type="checkbox"  id="character_filter_cryo">
				<div class="label_img"><img src="images/icons/element/64p/cryo.png">
					</div>
					<div class="label_img_hover">
						Cryo
					</div>
				</label>

				<label class="label_icon">
				<input type="checkbox"  id="character_filter_dendro">
				<div class="label_img"><img src="images/icons/element/64p/dendro.png">
					</div>
					<div class="label_img_hover">
						Dendro
					</div>
				</label>

				<label class="label_icon">
				<input type="checkbox"  id="character_filter_electro">
				<div class="label_img"><img src="images/icons/element/64p/electro.png">
					</div>
					<div class="label_img_hover">
						Electro
					</div>
				</label>

				<label class="label_icon">
				<input type="checkbox"  id="character_filter_geo">
				<div class="label_img"><img src="images/icons/element/64p/geo.png">
					</div>
					<div class="label_img_hover">
						Geo
					</div>
				</label>

				<label class="label_icon">
				<input type="checkbox"  id="character_filter_hydro">
				<div class="label_img"><img src="images/icons/element/64p/hydro.png">
					</div>
					<div class="label_img_hover">
						Hydro
					</div>
				</label>

				<label class="label_icon">
				<input type="checkbox"  id="character_filter_pyro">
				<div class="label_img"><img src="images/icons/element/64p/pyro.png">
					</div>
					<div class="label_img_hover">
						Pyro
					</div>
				</label>

				</div>

				<div class="filter_list">

				<label class="label_icon">
				<input type="checkbox"  id="character_filter_bow">
				<div class="label_img"><img src="images/icons/weapon/64p/bow.png">
					</div>
					<div class="label_img_hover">
						Bow
					</div>
				</label>

				<label class="label_icon">
				<input type="checkbox"  id="character_filter_catalyst">
				<div class="label_img"><img src="images/icons/weapon/64p/catalyst.png">
					</div>
					<div class="label_img_hover">
						Catalyst
					</div>
				</label>

				<label class="label_icon">
				<input type="checkbox"  id="character_filter_claymore">
				<div class="label_img"><img src="images/icons/weapon/64p/claymore.png">
					</div>
					<div class="label_img_hover">
						Claymore
					</div>
				</label>

				<label class="label_icon">
				<input type="checkbox"  id="character_filter_polearm">
				<div class="label_img"><img src="images/icons/weapon/64p/polearm.png">
					</div>
					<div class="label_img_hover">
						Polearm
					</div>
				</label>

				<label class="label_icon">
				<input type="checkbox"  id="character_filter_sword">
				<div class="label_img"><img src="images/icons/weapon/64p/sword.png">
					</div>
					<div class="label_img_hover">
						Sword
					</div>
				</label>
					</div>
			
			</div>

			<div class="calc character_calc" onchange="equip_change_character()" id="equip_character_select">
			
			</div>

			</div>

			<div class="calc party_calc" id="equip_party_list">
				<div class="column" id="equip_party_column_0">
				<div class="character_icon" id="equip_party_img_container_0">
					<div class="label_img"><img src="images/icons/characters.png"  id="equip_party_img_0"></div>
				</div>
				<div class="line" >
                         <select class="select_full search"  id="equip_party_0" onchange="equip_change_party_0()"></select>
                    </div>
			</div>
			<div class="column" id="equip_party_column_1">
				<div class="character_icon" id="equip_party_img_container_1">
					<div class="label_img"><img src="images/icons/characters.png"  id="equip_party_img_1"></div>
				</div>
				<div class="line" >
                         <select class="select_full search"  id="equip_party_1" onchange="equip_change_party(1)"></select>
                    </div>
			</div> 
				<div class="column" id="equip_party_column_2">
				<div class="character_icon" id="equip_party_img_container_2">
					<div class="label_img"><img  src="images/icons/characters.png" id="equip_party_img_2"></div>
				</div>
					<div class="line" >
                         <select class="select_full search"  id="equip_party_2" onchange="equip_change_party(2)"></select>
                    </div>
			</div> 
				<div class="column" id="equip_party_column_3">
				<div class="character_icon" id="equip_party_img_container_3">
					<div class="label_img"><img src="images/icons/characters.png" id="equip_party_img_3"></div>
				</div>
					<div class="line" >
                         <select class="select_full search"  id="equip_party_3" onchange="equip_change_party(3)"></select>
                    </div>
			</div> 
				<div class="column" id="party_stats">

			</div> 
			</div>

			<div class="calc_container" id="equip_enemy_list">

			<div class="calc character_calc" id="equip_enemy_select" onchange="equip_change_enemy()">
				
			
			</div>

				<div class="calc enemy_calc">

						<p class="equip_enemy_name" id="equip_enemy_name">None</p>


					<div class="equip_enemy_stats" id="equip_stats_5">
						<div class="line">
							<p>Level</p>
							<input  placeholder="0" id="equip_enemy_level" onchange="equip_change_enemy_level()">
						</div>
					</div>
				
			
			</div>
				</div>
		</div>

		<!--STATS-->
		<div class="frame">
		<div class="line">
        <p class="frame_title">Stats</p>
		</div>

			<div class="equip_stats calc">
				<div class="equip_stats_column" id="equip_stats_1">

				</div>

				<div class="equip_stats_column" id="equip_stats_2">


				</div>

				<div class="equip_stats_column" id="equip_stats_3">


				</div>

				<div class="equip_stats_column" id="equip_stats_4">


				</div>

			</div>
		</div>

		<!--EQUiPMENT-->


	<div class="frame frame_selectable" >

		<div class="line_2" onchange="common_radio_showhide('index_equip', 'equip_', '_list')">
			<div class="title_container" style="width:50%;">

                        <label class="checkbox_container">

                            <input type="radio" name="index_equip" value="equipment" checked>
                            <div class="frame_title">Equipment</div>
                        </label>
                    </div>

			<div class="title_container" style="width:50%;" >

                        <label class="checkbox_container">

                            <input type="radio" name="index_equip"  value="scanner">
                            <div class="frame_title">Scanner Load</div>
                        </label>
                    </div>
	
        
		</div>

		<div class="calc_container"  id="equip_equipment_list" onchange="equip_stats_display_all()">


			<div class="line">
				<div class="equip_column calc" onchange="equip_change_character_level()">
					<div class="line">
						<p class="equip_title">Character</p>
					</div>

					<div class="line">
						 <p>Level</p>
                         <select class="select_statval " id="equip_character_level" ></select>
                    </div>

					<div class="line">
						 <p>Constellation</p>
                         <select class="select_statval " id="equip_character_const" ></select>
                    </div>

					<div class="equip_list" id="equip_character_stats">


					</div>
					
				</div>

				<div class="equip_column calc" onchange="equip_change_weapon()">
					<div class="line">
						<p class="equip_title">Weapon</p>
					</div>
					<div class="line">
                         <select class="select_full search" id="equip_weapon_select"></select>
                    </div>

					<div class="line icon_line">
						
						<div class="item_img_container" id="equip_weapon_img_container">
						<img class="item_img" id="equip_weapon_img">
						</div>
						
						<div class="column">
							<div class="line">
						 <p>Level</p>
                         <select class="select_statval " id="equip_weapon_level"></select>
                    </div>

					<div class="line">
						 <p>Refine</p>
                         <select class="select_statval " id="equip_weapon_refine"></select>
                    </div>
						</div>

					</div>

					<div class="equip_list" id="equip_weapon_stats">


					</div>
				</div>

				<div class="equip_column calc" onchange="equip_change_artifact_stats('flower')">
					<div class="line">
						<p class="equip_title">Flower of Life</p>
					</div>
					<div class="line">
                         <select class="select_full search" id="equip_flower_select" onchange="equip_change_artifact('flower')"></select>
                    </div>
					<div class="line icon_line">
						
						<div class="item_img_container" id="equip_flower_img_container">
						<img class="item_img" id="equip_flower_img">
						</div>
						
						<div class="column">
					<div class="line">
						 <p>Stars</p>
                         <select class="select_statval " id="equip_flower_star" onchange="equip_change_artifact_stars('flower')"></select>
                    </div>
					<div class="line">
						 <p>Level</p>
                         <select class="select_statval " id="equip_flower_level"></select>
                    </div>
							</div></div>
					<div class="line">
						<p class="equip_subtitle">Main Stat</p>
					</div>
					<div class="line">						 
                         <select class="select_stat " id="equip_flower_main"></select>
						<p class="result" id="equip_flower_main_val">0</p>
                    </div>
					<div class="line">
						<p class="equip_subtitle">Sub Stats</p>
					</div>
					<div class="line">						 
                         <select class="select_stat " id="equip_flower_sub_0"></select>
						 <p class="stat_rate" id="equip_flower_sub_rate_0"></p>
						 <input class="input_statval" placeholder="0"  id="equip_flower_sub_val_0">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_flower_sub_1"></select>
						<p class="stat_rate" id="equip_flower_sub_rate_1"></p>
						 <input class="input_statval" placeholder="0" id="equip_flower_sub_val_1">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_flower_sub_2"></select>
						<p class="stat_rate" id="equip_flower_sub_rate_2"></p>
						 <input class="input_statval" placeholder="0" id="equip_flower_sub_val_2">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_flower_sub_3"></select>
						<p class="stat_rate" id="equip_flower_sub_rate_3"></p>
						 <input class="input_statval" placeholder="0" id="equip_flower_sub_val_3">
                    </div>
					<div class="line artifact_buttons">
						<div class="img_button"><div class="img_icon svg svg-eye-outline" id="artifact_list_show_flower" onclick="equip_artifact_list_show('flower')"></div><div class="img_button_hover">Show List</div></div>
						<div class="img_button"><div class="img_icon svg svg-download" onclick="common_construct_prompt(function () { equip_artifact_list_save('flower'); }, 'Do you want to save this Artifact?', this.parentElement)"></div><div class="img_button_hover">Save</div></div>
						<div class="img_button" id="artifact_btn_img_flower"><div class="img_icon svg svg-image" onclick="common_construct_prompt_input(function () { equip_artifact_list_load_url_btn('flower', 'artifact_btn_img_flower'); }, 'Enter image URL', this.parentElement, '');"></div><div class="img_button_hover">Load Image</div></div>
						<div class="img_button"><div class="img_icon svg svg-code-tags" onclick="common_construct_prompt_input(function () { equip_artifact_list_load_code_btn('flower'); }, 'Enter Artifact Code', this.parentElement, '');"></div><div class="img_button_hover">Load Code</div></div>
						<div class="img_button"><div class="img_icon svg svg-content-copy" onclick="equip_artifact_list_copy_code('flower', this)"></div><div class="img_button_hover">Copy Code</div></div>
						<div class="img_button"><div class="img_icon svg svg-delete-forever" onclick="common_construct_prompt(function () { equip_artifact_list_delete_piece_refresh('flower'); }, 'Do you want to delete all stored Flowers?', this.parentElement)"></div><div class="img_button_hover">Delete All</div></div>
					</div>
					
				</div>

				<div class="equip_column calc" onchange="equip_change_artifact_stats('plume')">
					<div class="line">
						<p class="equip_title">Plume of Death</p>
					</div>
					<div class="line">
                         <select class="select_full search" id="equip_plume_select" onchange="equip_change_artifact('plume')"></select>
                    </div>
					<div class="line icon_line">
						
						<div class="item_img_container" id="equip_plume_img_container">
						<img class="item_img" id="equip_plume_img">
						</div>
						
						<div class="column">
					<div class="line">
						 <p>Stars</p>
                         <select class="select_statval " id="equip_plume_star" onchange="equip_change_artifact_stars('plume')"></select>
                    </div>
					<div class="line">
						 <p>Level</p>
                         <select class="select_statval " id="equip_plume_level"></select>
                    </div>
							</div></div>
					<div class="line">
						<p class="equip_subtitle">Main Stat</p>
					</div>
					<div class="line">						 
                         <select class="select_stat " id="equip_plume_main"></select>
						<p class="result" id="equip_plume_main_val">0</p>
                    </div>
					<div class="line">
						<p class="equip_subtitle">Sub Stats</p>
					</div>
					<div class="line">						 
                         <select class="select_stat " id="equip_plume_sub_0"></select>
						<p class="stat_rate" id="equip_plume_sub_rate_0"></p>
						 <input class="input_statval" placeholder="0" id="equip_plume_sub_val_0">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_plume_sub_1"></select>
						<p class="stat_rate" id="equip_plume_sub_rate_1"></p>
						 <input class="input_statval" placeholder="0" id="equip_plume_sub_val_1">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_plume_sub_2"></select>
						<p class="stat_rate" id="equip_plume_sub_rate_2"></p>
						 <input class="input_statval" placeholder="0" id="equip_plume_sub_val_2">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_plume_sub_3"></select>
						<p class="stat_rate" id="equip_plume_sub_rate_3"></p>
						 <input class="input_statval" placeholder="0" id="equip_plume_sub_val_3">
                    </div>
					<div class="line artifact_buttons">
						<div class="img_button"><div class="img_icon svg svg-eye-outline"  id="artifact_list_show_plume"  onclick="equip_artifact_list_show('plume')"></div><div class="img_button_hover">Show List</div></div>
						<div class="img_button"><div class="img_icon svg svg-download" onclick="common_construct_prompt(function () { equip_artifact_list_save('plume'); }, 'Do you want to save this Artifact?', this.parentElement)"></div><div class="img_button_hover">Save</div></div>
						<div class="img_button" id="artifact_btn_img_plume"><div class="img_icon svg svg-image" onclick="common_construct_prompt_input(function () { equip_artifact_list_load_url_btn('plume', 'artifact_btn_img_plume'); }, 'Enter image URL', this.parentElement, '');"></div><div class="img_button_hover">Load Image</div></div>
						<div class="img_button"><div class="img_icon svg svg-code-tags" onclick="common_construct_prompt_input(function () { equip_artifact_list_load_code_btn('plume'); }, 'Enter Artifact Code', this.parentElement, '');"></div><div class="img_button_hover">Load Code</div></div>
						<div class="img_button"><div class="img_icon svg svg-content-copy" onclick="equip_artifact_list_copy_code('plume', this)"></div><div class="img_button_hover">Copy Code</div></div>
						<div class="img_button"><div class="img_icon svg svg-delete-forever" onclick="common_construct_prompt(function () { equip_artifact_list_delete_piece_refresh('plume'); }, 'Do you want to delete all stored Plumes?', this.parentElement)"></div><div class="img_button_hover">Delete All</div></div>
					</div>
					
				</div>
				

			</div>
		<div class="calc artifact_list" id="artifact_list_flower">
			<div class="artifact_list_name">Flower of Life</div>
						<div class="artifact_list_header">
							<p></p>
							<p>Name</p>
							<p>Main Stat</p>
							<p>Sub Stats</p>
							<p></p>
						</div>
						<div class="artifact_list_table" id="artifact_list_table_flower">
							
						</div>
					</div>
				<div class="calc artifact_list" id="artifact_list_plume">
					<div class="artifact_list_name">Plume of Death</div>
						<div class="artifact_list_header">
							<p></p>
							<p>Name</p>
							<p>Main Stat</p>
							<p>Sub Stats</p>
							<p></p>
						</div>
						<div class="artifact_list_table" id="artifact_list_table_plume">
							
						</div>
					</div>

			<div class="line">
				<div class="equip_column calc" id="equip_sets">
					<div class="line">
						<p class="equip_title">Set Bonuses</p>
					</div>
					
				</div>
				<div class="equip_column calc" onchange="equip_change_artifact_stats('sands')">
					<div class="line">
						<p class="equip_title">Sands of Eon</p>
					</div>
					<div class="line">
                         <select class="select_full search" id="equip_sands_select" onchange="equip_change_artifact('sands')"></select>
                    </div>
					<div class="line icon_line">
						
						<div class="item_img_container" id="equip_sands_img_container">
						<img class="item_img" id="equip_sands_img">
						</div>
						
						<div class="column">
					<div class="line">
						 <p>Stars</p>
                         <select class="select_statval " id="equip_sands_star" onchange="equip_change_artifact_stars('sands')"></select>
                    </div>
					<div class="line">
						 <p>Level</p>
                         <select class="select_statval " id="equip_sands_level"></select>
                    </div>
							</div></div>
					<div class="line">
						<p class="equip_subtitle">Main Stat</p>
					</div>
					<div class="line">						 
                         <select class="select_stat " id="equip_sands_main"></select>
						<p class="result" id="equip_sands_main_val">0 %</p>
                    </div>
					<div class="line">
						<p class="equip_subtitle">Sub Stats</p>
					</div>
					<div class="line">						 
                         <select class="select_stat " id="equip_sands_sub_0"></select>
						<p class="stat_rate" id="equip_sands_sub_rate_0"></p>
						 <input class="input_statval" placeholder="0" id="equip_sands_sub_val_0">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_sands_sub_1"></select>
						<p class="stat_rate" id="equip_sands_sub_rate_1"></p>
						 <input class="input_statval" placeholder="0" id="equip_sands_sub_val_1">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_sands_sub_2"></select>
						<p class="stat_rate" id="equip_sands_sub_rate_2"></p>
						 <input class="input_statval" placeholder="0" id="equip_sands_sub_val_2">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_sands_sub_3"></select>
						<p class="stat_rate" id="equip_sands_sub_rate_3"></p>
						 <input class="input_statval" placeholder="0" id="equip_sands_sub_val_3">
                    </div>
					<div class="line artifact_buttons">
						<div class="img_button"><div class="img_icon svg svg-eye-outline"  id="artifact_list_show_sands"  onclick="equip_artifact_list_show('sands')"></div><div class="img_button_hover">Show List</div></div>
						<div class="img_button"><div class="img_icon svg svg-download" onclick="common_construct_prompt(function () { equip_artifact_list_save('sands'); }, 'Do you want to save this Artifact?', this.parentElement)"></div><div class="img_button_hover">Save</div></div>
						<div class="img_button" id="artifact_btn_img_sands"><div class="img_icon svg svg-image" onclick="common_construct_prompt_input(function () { equip_artifact_list_load_url_btn('sands', 'artifact_btn_img_sands'); }, 'Enter image URL', this.parentElement, '');"></div><div class="img_button_hover">Load Image</div></div>
						<div class="img_button"><div class="img_icon svg svg-code-tags" onclick="common_construct_prompt_input(function () { equip_artifact_list_load_code_btn('sands'); }, 'Enter Artifact Code', this.parentElement, '');"></div><div class="img_button_hover">Load Code</div></div>
						<div class="img_button"><div class="img_icon svg svg-content-copy" onclick="equip_artifact_list_copy_code('sands', this)"></div><div class="img_button_hover">Copy Code</div></div>
						<div class="img_button"><div class="img_icon svg svg-delete-forever" onclick="common_construct_prompt(function () { equip_artifact_list_delete_piece_refresh('sands'); }, 'Do you want to delete all stored Sands?', this.parentElement)"></div><div class="img_button_hover">Delete All</div></div>
					</div>
					
				</div>

				<div class="equip_column calc" onchange="equip_change_artifact_stats('goblet')">
					<div class="line">
						<p class="equip_title">Goblet of Eonothem</p>
					</div>
					<div class="line">
                         <select class="select_full search" id="equip_goblet_select" onchange="equip_change_artifact('goblet')"></select>
                    </div>
					<div class="line icon_line">
						
						<div class="item_img_container" id="equip_goblet_img_container">
						<img class="item_img" id="equip_goblet_img">
						</div>
						
						<div class="column">
					<div class="line">
						 <p>Stars</p>
                         <select class="select_statval " id="equip_goblet_star" onchange="equip_change_artifact_stars('goblet')"></select>
                    </div>
					<div class="line">
						 <p>Level</p>
                         <select class="select_statval " id="equip_goblet_level"></select>
                    </div>
							</div></div>
					<div class="line">
						<p class="equip_subtitle">Main Stat</p>
					</div>
					<div class="line">						 
                         <select class="select_stat " id="equip_goblet_main"></select>
						<p class="result" id="equip_goblet_main_val">0 %</p>
                    </div>
					<div class="line">
						<p class="equip_subtitle">Sub Stats</p>
					</div>
					<div class="line">						 
                         <select class="select_stat " id="equip_goblet_sub_0"></select>
						<p class="stat_rate" id="equip_goblet_sub_rate_0"></p>
						 <input class="input_statval" placeholder="0" id="equip_goblet_sub_val_0">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_goblet_sub_1"></select>
						<p class="stat_rate" id="equip_goblet_sub_rate_1"></p>
						 <input class="input_statval" placeholder="0" id="equip_goblet_sub_val_1">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_goblet_sub_2"></select>
						<p class="stat_rate" id="equip_goblet_sub_rate_2"></p>
						 <input class="input_statval" placeholder="0" id="equip_goblet_sub_val_2">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_goblet_sub_3"></select>
						<p class="stat_rate" id="equip_goblet_sub_rate_3"></p>
						 <input class="input_statval" placeholder="0" id="equip_goblet_sub_val_3">
                    </div>
					<div class="line artifact_buttons">
						<div class="img_button"><div class="img_icon svg svg-eye-outline"  id="artifact_list_show_goblet"  onclick="equip_artifact_list_show('goblet')"></div><div class="img_button_hover">Show List</div></div>
						<div class="img_button"><div class="img_icon svg svg-download" onclick="common_construct_prompt(function () { equip_artifact_list_save('goblet'); }, 'Do you want to save this Artifact?', this.parentElement)"></div><div class="img_button_hover">Save</div></div>
						<div class="img_button" id="artifact_btn_img_goblet"><div class="img_icon svg svg-image" onclick="common_construct_prompt_input(function () { equip_artifact_list_load_url_btn('goblet', 'artifact_btn_img_goblet'); }, 'Enter image URL', this.parentElement, '');"></div><div class="img_button_hover">Load Image</div></div>
						<div class="img_button"><div class="img_icon svg svg-code-tags" onclick="common_construct_prompt_input(function () { equip_artifact_list_load_code_btn('goblet'); }, 'Enter Artifact Code', this.parentElement, '');"></div><div class="img_button_hover">Load Code</div></div>
						<div class="img_button"><div class="img_icon svg svg-content-copy" onclick="equip_artifact_list_copy_code('goblet', this)"></div><div class="img_button_hover">Copy Code</div></div>
						<div class="img_button"><div class="img_icon svg svg-delete-forever" onclick="common_construct_prompt(function () { equip_artifact_list_delete_piece_refresh('goblet'); }, 'Do you want to delete all stored Goblets?', this.parentElement)"></div><div class="img_button_hover">Delete All</div></div>
					</div>
					
				</div>

				<div class="equip_column calc" onchange="equip_change_artifact_stats('circlet')">
					<div class="line">
						<p class="equip_title">Circlet of Logos</p>
					</div>
					<div class="line">
                         <select class="select_full search" id="equip_circlet_select" onchange="equip_change_artifact('circlet')"></select>
                    </div>
					<div class="line icon_line">
						
						<div class="item_img_container" id="equip_circlet_img_container">
						<img class="item_img" id="equip_circlet_img">
						</div>
						
						<div class="column">
					<div class="line">
						 <p>Stars</p>
                         <select class="select_statval " id="equip_circlet_star" onchange="equip_change_artifact_stars('circlet')"></select>
                    </div>
					<div class="line">
						 <p>Level</p>
                         <select class="select_statval " id="equip_circlet_level"></select>
                    </div>
</div></div>
					<div class="line">
						<p class="equip_subtitle">Main Stat</p>
					</div>
					<div class="line">						 
                         <select class="select_stat " id="equip_circlet_main"></select>
						<p class="result" id="equip_circlet_main_val">0 %</p>
                    </div>
					<div class="line">
						<p class="equip_subtitle">Sub Stats</p>
					</div>
					<div class="line">						 
                         <select class="select_stat " id="equip_circlet_sub_0"></select>
						<p class="stat_rate" id="equip_circlet_sub_rate_0"></p>
						 <input class="input_statval" placeholder="0" id="equip_circlet_sub_val_0">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_circlet_sub_1"></select>
						<p class="stat_rate" id="equip_circlet_sub_rate_1"></p>
						 <input class="input_statval" placeholder="0" id="equip_circlet_sub_val_1">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_circlet_sub_2"></select>
						<p class="stat_rate" id="equip_circlet_sub_rate_2"></p>
						 <input class="input_statval" placeholder="0" id="equip_circlet_sub_val_2">
                    </div>
					<div class="line">						 
                         <select class="select_stat " id="equip_circlet_sub_3"></select>
						<p class="stat_rate" id="equip_circlet_sub_rate_3"></p>
						 <input class="input_statval" placeholder="0" id="equip_circlet_sub_val_3">
                    </div>
					<div class="line artifact_buttons">
						<div class="img_button"><div class="img_icon svg svg-eye-outline"  id="artifact_list_show_circlet"  onclick="equip_artifact_list_show('circlet')"></div><div class="img_button_hover">Show List</div></div>
						<div class="img_button"><div class="img_icon svg svg-download" onclick="common_construct_prompt(function () { equip_artifact_list_save('circlet'); }, 'Do you want to save this Artifact?', this.parentElement)"></div><div class="img_button_hover">Save</div></div>
						<div class="img_button" id="artifact_btn_img_circlet"><div class="img_icon svg svg-image" onclick="common_construct_prompt_input(function () { equip_artifact_list_load_url_btn('circlet', 'artifact_btn_img_circlet'); }, 'Enter image URL', this.parentElement, '');"></div><div class="img_button_hover">Load Image</div></div>
						<div class="img_button"><div class="img_icon svg svg-code-tags" onclick="common_construct_prompt_input(function () { equip_artifact_list_load_code_btn('circlet'); }, 'Enter Artifact Code', this.parentElement, '');"></div><div class="img_button_hover">Load Code</div></div>
						<div class="img_button"><div class="img_icon svg svg-content-copy" onclick="equip_artifact_list_copy_code('circlet', this)"></div><div class="img_button_hover">Copy Code</div></div>
						<div class="img_button"><div class="img_icon svg svg-delete-forever" onclick="common_construct_prompt(function () { equip_artifact_list_delete_piece_refresh('circlet'); }, 'Do you want to delete all stored Circlets?', this.parentElement)"></div><div class="img_button_hover">Delete All</div></div>
					</div>
					
				</div>

				

			</div>
						<div class="calc artifact_list" id="artifact_list_sands">
							<div class="artifact_list_name">Sands of Eon</div>
						<div class="artifact_list_header">
							<p></p>
							<p>Name</p>
							<p>Main Stat</p>
							<p>Sub Stats</p>
							<p></p>
						</div>
						<div class="artifact_list_table" id="artifact_list_table_sands">
							
						</div>
					</div>
				<div class="calc artifact_list" id="artifact_list_goblet">
					<div class="artifact_list_name">Goblet of Eonothem</div>
						<div class="artifact_list_header">
							<p></p>
							<p>Name</p>
							<p>Main Stat</p>
							<p>Sub Stats</p>
							<p></p>
						</div>
						<div class="artifact_list_table" id="artifact_list_table_goblet">
							
						</div>
					</div>
				<div class="calc artifact_list" id="artifact_list_circlet">
					<div class="artifact_list_name">Circlet of Logos</div>
						<div class="artifact_list_header">
							<p></p>
							<p>Name</p>
							<p>Main Stat</p>
							<p>Sub Stats</p>
							<p></p>
						</div>
						<div class="artifact_list_table" id="artifact_list_table_circlet">
							
						</div>
					</div>
				</div>

			<div class="calc_container"  id="equip_scanner_list">
				<div class="calc">
					<div class="inputfile_container">
						<input type="file" id="equip_scanner_inputfile" class="inputfile" name="scanner_input" onchange="equip_scanner_load_file(event)">
						<label id="equip_scanner_inputfile_label" for="equip_scanner_inputfile">Choose File...</label>
						<div class="inputfile_file" id="equip_scanner_inputfile_file"></div>
					</div>
					<p class="equip_scanner_message">Only .json files in Genshin Open Object Description (GOOD) format are supported.</p>
					
				</div>

				<div class="calc equip_scanner_calc" id="equip_scanner_artifacts_container">
					<div class="calc_title">
						Artifacts
					</div>
					<div class="" id="equip_scanner_artifacts">

					</div>
				</div>				
			</div>
	
	</div>

		<!--EFFECTS-->

		<div class="frame" >
		<div class="line">
        <p class="frame_title">Effects</p>
		</div>
			<div class="calc equip_effects">
			<div class="equip_effects_table" id="equip_effects_table">

			</div>
			<div class="equip_button" onclick="equip_effects_new()">New</div>
			
			
			</div>


			</div>
   
		<!--DAMAGE-->

		<div class="frame frame_selectable">
			<div class="line_2" onchange="common_radio_showhide('index_skill', 'equip_', '_list')">
			<div class="title_container" style="width:34%;">

                        <label class="checkbox_container">

                            <input type="radio" name="index_skill" value="skill" checked>
                            <div class="frame_title">Skills</div>
                        </label>
                    </div>

			<div class="title_container" style="width:34%;" >

                        <label class="checkbox_container">

                            <input type="radio" name="index_skill"  value="const">
                            <div class="frame_title">Passives &amp; Constellations</div>
                        </label>
                    </div>
				
				<div class="title_container" style="width:34%;" >

                        <label class="checkbox_container">

                            <input type="radio" name="index_skill"  value="optim">
                            <div class="frame_title">Optimization</div>
                        </label>
                    </div>
					
        
		</div>
		
			<!--DAMAGE-->
			<div class="calc"  id="equip_skill_list">
				<div class="equip_damage_container" id="equip_damage_container" onchange="equip_damage_change_key()">
					<div class="equip_damage_title">
						<div class="equip_damage_skill_main">
						<p>Skill</p>
						<p>Level</p>
						</div>
						<div class="equip_damage_part">
						<p>Key</p>
						<div class="equip_damage_part_svg"><div class="svg svg-elemastery"></div></div>
						<p>Part</p>
						<p class="equip_damage_part_num">Non-Crit</p>
						<p class="equip_damage_part_num">Crit</p>
						<p class="equip_damage_part_num">Average</p>
						</div>
					</div>

				</div>


		



			</div>
			<!--PASSIVES-->
			<div class="calc equip_passive_calc"  id="equip_const_list">
				
				</div>
			<!--OPTIMIZATION-->

			<div class="calc_container" id="equip_optim_list">

				<div class="calc equip_passive_calc sub_calc" >
					<div class="calc_title">
						Artifact Optimization Settings
					</div>

				<div class="equip_setups_button_container">
					<div class="equip_button" onclick="common_loading(function () { equip_damage_optimize_artifacts(true); })">Artifacts - Effects</div>
					<div class="equip_button" onclick="common_loading(function () { equip_damage_optimize_artifacts(false); })">Artifacts - No effects</div>												
				</div>
				<div class="equip_setups_button_container equip_optimize_filter_set_button_container">
					<div class="column">
						 <p>Set Bonus 1</p>
                         <select class="select_full search" id="equip_optim_setselect_1" style="width:250px;"></select>
						</div>

					<div class="column">
						 <p>Set Bonus 2</p>
                         <select class="select_full search" id="equip_optim_setselect_2" style="width:250px;"></select>
						</div>

					<div class="equip_button" onclick="equip_damage_optimize_artifacts_set_filter_add()">Add Set Combination</div>
					</div>

				<div class="optimize_filter_set_list" id="optimize_filter_set_list">


				</div>
					
				</div>

				<div class="calc equip_passive_calc sub_calc" id="optimize_artifact_results">
					<div class="calc_title">
						Optimization Results
					</div>
				<div class="optimize_artifact_single storage_artifact" id="optimize_display_artifact_current"></div>
				<div class="optimize_artifact" id="optimize_artifact">
					
				</div>
			</div>

				</div>
				
		</div>
						
		

		<!--SETUPS-->
		<div class="frame frame_selectable">
			<div class="line_2" onchange="common_radio_showhide('index_setup', 'equip_', '_list'); equip_account_current_refresh_all();">
			<div class="title_container" style="width:50%;">

                        <label class="checkbox_container">

                            <input type="radio" name="index_setup" value="setup" checked>
                            <div class="frame_title">Setups</div>
                        </label>
                    </div>

			<div class="title_container" style="width:50%;" >

                        <label class="checkbox_container">

                            <input type="radio" name="index_setup"  value="account">
                            <div class="frame_title">Account</div>
                        </label>
                    </div>
				
					
        
		</div>

			<div class="calc equip_setups" id="equip_setup_list">
				<div class="equip_setups_header">
					<p class="img_icon_filler filler_3"></p>
					<p class="equip_setups_name" >Name</p>
					<p class="equip_setups_character" >Character</p>
					<p class="equip_setups_skill" id="equip_setups_skill" >Key Skill Average</p>
					<p class="equip_setups_comparison" id="equip_setups_comparison">Comparison</p>
					<p class="img_icon_filler filler_4"></p>
					
				
				</div>
				<div class="equip_setups_table" id="equip_setups_table">
					<div class="equip_setup_row" id="equip_setup_row_current">
						<p class="img_icon_filler filler_3"></p>
						<p class="equip_setups_name" id="equip_setup_name_current">Current Setup</p>
						<div class="resonance" id="equip_setup_resonance_current">
							<p id="equip_setup_character_current">Character Name</p>
						</div>
						<p class="equip_setups_skill" id="equip_setup_skill_current">0</p>
						<p class="equip_setups_comparison" id="equip_setup_comparison_current">0</p>						
						<label class="img_button label_icon">
							<input type="checkbox" id="equip_setup_filter" onchange="equip_setup_filter_change()">
							<div class="img_icon svg svg-filter-outline"></div>
							<div class="img_button_hover">Filter Character</div>
						</label>
						<label class="img_button label_icon">
							<input type="checkbox" id="equip_setup_pin" onchange="equip_setup_pin_change()">
							<div class="img_icon svg svg-pin-outline"></div>
							<div class="img_button_hover">Pin Damage</div>
						</label>
						<p class="img_icon_filler filler_2"></p>
					</div>

				</div>
				<div class="equip_setups_button_container">
					<div class="equip_button" onclick="common_construct_prompt_input(function () { equip_setup_new() }, `Enter name for new Setup`, this, ``)">New</div>
				</div>
			

			</div>

			<div class="calc_container" id="equip_account_list">
			
				<?php 
				if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
					require_once "php/equip/account.php";
				}else{
					echo'<div class="calc account_calc">
							<div class="calc_title">
								Login
							</div>';
					require_once "php/account/login_form.php";
					echo'
							<div class="line_3">
								<p>This website is not affiliated with Mihoyo/Genshin Impact Official and uses its own account for some features.</p>
							</div>
							<div class="line_3">
								<p>For your own safety do not enter your Mihoyo/Genshin Impact Official username/password.</p>
							</div>
						</div>
					';
				}				
				?>
				</div>
		</div>

		<!--PINNED SETUP-->
		<div class="calc equip_setup_pinned" id="equip_setup_pinned">
			<div class="equip_setup_pinned_table">
				<div class="equip_setups_header">
					<p>Character</p>
					<p>Key Skill Average</p>
					<p id="equip_setups_pinned_comparison">Comparison</p>			
				</div>
				<div class="equip_setup_row">
					<div class="resonance" id="equip_setup_resonance_pinned">
							<p id="equip_setup_character_pinned">Character Name</p>
					</div>
					<p id="equip_setup_skill_pinned">0</p>
					<p id="equip_setup_comparison_pinned">0</p>
				</div>

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