<?php
echo'
<script type="text/javascript">
	equip_account_logged_in = true
</script>
';
echo'
	<div class="calc">
		<div class="calc_title">
			Artifacts
		</div>
		<div class="line">
			<div class="equip_account_column">
				<div class="equip_account_title">
					Current
				</div>
				<div class="equip_account_data" id="equip_account_artifact_list_current">
				</div>
			</div>
			<div class="equip_account_column_actions">
				<div class="img_button">
					<div class="img_icon svg svg-transfer-right" onclick="common_construct_prompt(function () { equip_account_artifact_list_save(); }, \'Do you want to overwrite saved Artifacts?\', this.parentElement)"></div>
					<div class="img_button_hover">Save Current to Account</div>
				</div>
				<div class="img_button">
					<div class="img_icon svg svg-transfer-left" onclick="common_construct_prompt(function () { equip_account_artifact_list_load(); }, \'Do you want to overwrite current Artifacts?\', this.parentElement)"></div>
					<div class="img_button_hover">Load Account to Current</div>
				</div>
			</div>
			<div class="equip_account_column">
				<div class="equip_account_title">
					Account
				</div>
				<div class="equip_account_data" id="equip_account_artifact_list_account">
				</div>
			</div>
		</div>
	</div>
';
echo'
	<div class="calc">
		<div class="calc_title">
			Setups
		</div>
		<div class="line">
			<div class="equip_account_column">
				<div class="equip_account_title">
					Current
				</div>
				<div class="equip_account_data" id="equip_account_setups_current">
				</div>
			</div>
			<div class="equip_account_column_actions">
				<div class="img_button">
					<div class="img_icon svg svg-transfer-right" onclick="common_construct_prompt(function () { equip_account_setups_save(); }, \'Do you want to overwrite saved Setups?\', this.parentElement)"></div>
					<div class="img_button_hover">Save Current to Account</div>
				</div>
				<div class="img_button">
					<div class="img_icon svg svg-transfer-left" onclick="common_construct_prompt(function () { equip_account_setups_load(); }, \'Do you want to overwrite current Setups?\', this.parentElement)"></div>
					<div class="img_button_hover">Load Account to Current</div>
				</div>
			</div>
			<div class="equip_account_column">
				<div class="equip_account_title">
					Account
				</div>
				<div class="equip_account_data" id="equip_account_setups_account">
				</div>
			</div>
		</div>
	</div>
';
?>