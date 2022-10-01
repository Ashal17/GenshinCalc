const version = 14;

function equip_setup() {

    error_count = 0;
    recalculate = true;
    equip_account_artifact_list_refresh_needed = false;
    equip_account_setups_refresh_needed = false;

    try {

        common_radio_showhide("index", "equip_", "_list");
        common_radio_showhide('index_equip', 'equip_', '_list');
        common_radio_showhide('index_skill', 'equip_', '_list');
        common_radio_showhide('index_setup', 'equip_', '_list');

        genshin_setup_characters("equip_character_select");
        genshin_setup_enemies("equip_enemy_select");
        equip_setup_artifacts_precalculate();

        equip_current_character = {};
        equip_current_character.level = 0;
        equip_current_character.passive = {};
        equip_current_character.const = 0;
        equip_current_character.skill_level = {};
        equip_current_character.skill_level.normal = 0;
        equip_current_character.skill_level.skill = 0;
        equip_current_character.skill_level.burst = 0;
        equip_current_enemy = {};
        equip_current_enemy.id = 0;
        equip_current_enemy.level = 0;
        
        equip_current_party = {};
        equip_current_party.character = [];
        equip_current_party.character_stats = [];
        equip_current_party.weapon = [];       
        for (var i = 0; i < 4; i++) {
            equip_current_party.character.push({});
            equip_current_party.character_stats.push({});
            equip_current_party.character[i].id = "none"
            equip_current_party.character_stats[i].id = "";
            equip_current_party.character_stats[i].stat = "";
            equip_current_party.character_stats[i].value = 0;

            equip_current_party.weapon.push({});
            equip_current_party.weapon[i].id = 0;
            equip_current_party.weapon[i].stat = "";
            equip_current_party.weapon[i].value = 0;
        }
        equip_current_party.vision = [];
        for (var i = 0; i < 7; i++) {
            equip_current_party.vision.push(0);
        }
        equip_current_weapon = {};
        equip_current_artifact = {};
        equip_current_artifact_sets = {};
        for (var i = 0; i < equip_list_artifacts_name.length; i++) {
            equip_current_artifact[equip_list_artifacts_name[i]] = {};
            equip_current_artifact[equip_list_artifacts_name[i]].stats = [];
        }
        equip_damage = {};
        equip_damage.key = [];
        equip_damage.damage = [];
        equip_damage.overwrite = false;

        equip_stats_total = [];
        equip_current_character.stats = [];
        equip_current_character.passive.stats = [];
        equip_current_party.stats = [];
        equip_current_weapon.stats = [];
        equip_current_artifact.stats = [];
        equip_current_artifact_sets.stats = [];
        equip_current_effect = {};
        equip_current_effect.active = [];
        equip_current_effect.stats = [];
        equip_current_enemy.stats = [];
        

        for (var i = 0; i < equip_list_stats.length; i++) {

            equip_stats_total.push(0);
            equip_current_character.stats.push(0);
            equip_current_character.passive.stats.push(0);
            equip_current_party.stats.push(0);
            equip_current_weapon.stats.push(0);
            equip_current_artifact.stats.push(0);
            equip_current_artifact_sets.stats.push(0);
            equip_current_effect.stats.push(0);
            equip_current_enemy.stats.push(0);

            for (var ii = 0; ii < equip_list_artifacts_name.length; ii++) {
                equip_current_artifact[equip_list_artifacts_name[ii]].stats.push(0);
            }
        }
        //common_select_setup("equip_character_level", level_list);
        common_select_setup_mass(equip_list_level_selects, level_list);

        common_select_setup("equip_weapon_refine", common_return_array_from_int(1, 5, "", ""));

        common_select_setup("equip_character_const", common_return_array_from_int(0, 6, "", ""));

        common_select_setup("equip_party_0", common_return_array_parameter_from_id_array(character_list_id, character_list, "name"), character_list_id);

        common_select_setup_mass_varid(common_return_array_from_int(1, 3, "", ""), "equip_party_", "", common_return_array_parameter_from_id_array(party_character_list_id, character_list, "name"), party_character_list_id);


        equip_setup_artifacts();

        

        if (equip_url_load()) {
            equip_passive_display_all();
            equip_stats_display_all();
            common_debug("Loading setup successful.");
        } else {
            equip_change_character();
            
            common_debug("No setup to load.");
        }

        equip_setup_setup();

        
        equip_artifact_list_setup();
        equip_damage_optimize_setup();
        equip_account_current_refresh_all(true);
    }
    catch (err) {
        common_loading_show_error(err, "An Error occured during loading the page.<br>Please reload the page with CTRL+F5.<br>If the Error persists, please contact the administrator.");

        error_count++;
    }

   // await new Promise(r => setTimeout(r, 2000));

    if (error_count == 0) {
        if (equip_account_logged_in == true) {
            equip_account_setup();
        } else {
            common_loading_hide();
        }
    }
}



function equip_stats_add_all() {
    for (var i = 0; i < equip_list_stats.length; i++) {

        equip_stats_total[i] = equip_current_character.stats[i] + equip_current_character.passive.stats[i] + equip_current_enemy.stats[i] + equip_current_party.stats[i] + equip_current_weapon.stats[i] + equip_current_artifact_sets.stats[i] + equip_current_effect.stats[i];

        for (var ii = 0; ii < equip_list_artifacts_name.length; ii++) {
            equip_stats_total[i] += equip_current_artifact[equip_list_artifacts_name[ii]].stats[i];

        }
    }
}

function equip_stats_calculate_all() {
    equip_stats_add_all();
    equip_damage.overwrite = false;
    equip_effects_apply_transform_all(2);
    equip_stats_transform(equip_list_transformations.main, equip_stats_total);
    equip_effects_apply_transform_all(1);
    equip_stats_transform(equip_list_transformations.mult, equip_stats_total);
    equip_stats_transform(equip_list_transformations.character, equip_stats_total);
    equip_effects_apply_transform_all(0);
    equip_stats_transform(equip_list_transformations.merge, equip_stats_total);
    equip_stats_transform(equip_list_transformations.elemastery, equip_stats_total);
    equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "enemyred")] = 100 * equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "enemydef")] / (equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "enemydef")] + (5 * level_list_values[equip_current_character.level]) + 500);
}

function equip_stats_display_all() {
    if (recalculate) {
        common_debug("Calculating...");
        equip_stats_calculate_all();
        
        for (var i = 1; i < 5; i++) {
            var column = document.getElementById("equip_stats_" + i);
            common_clear_children(column, 0);
        }

        common_clear_children(document.getElementById("equip_stats_5"), 2);
        for (var i = 0; i < equip_list_stats.length; i++) {
            if (equip_list_stats[i].display) {
                var rightclass = "";

                if (equip_list_stats[i].display == 5) {
                    if (equip_stats_total[i] > 10) {
                        rightclass = "negative";
                    } else if (equip_stats_total[i] < 10) {
                        rightclass = "positive";
                    }
                } else {
                    if (equip_stats_total[i] > 0) {
                        rightclass = "positive";
                    } else if (equip_stats_total[i] < 0) {
                        rightclass = "negative";
                    }
                }

                
                if (equip_list_stats[i].total_name) {
                    var statline = common_create_statline(equip_list_stats[i].total_name, equip_display_stat(equip_stats_total[i], i), false, "", "", rightclass);
                } else {
                    var statline = common_create_statline(equip_list_stats[i].name, equip_display_stat(equip_stats_total[i], i), false, "", "", rightclass);
                }
                document.getElementById("equip_stats_" + equip_list_stats[i].display).appendChild(statline)
            }
        }
        equip_damage_display();
    }
    
}

function equip_stats_transform(transform_list, list_transformed) {
    for (var i = 0; i < transform_list.length; i++) {
        mainid = common_lookup_parameter(equip_list_stats, "id", transform_list[i].stat);
        mainvalue = list_transformed[mainid];
        change = transform_list[i].change;

        switch (change) {
            case "mult":
                for (var j = 0; j < transform_list[i].mods.length; j++) {
                    modid = common_lookup_parameter(equip_list_stats, "id", transform_list[i].mods[j]);
                    modvalue = list_transformed[modid] / 100 + 1;
                    mainvalue = mainvalue * modvalue;
                }
                break;
            case "mult_100":
                for (var j = 0; j < transform_list[i].mods.length; j++) {
                    modid = common_lookup_parameter(equip_list_stats, "id", transform_list[i].mods[j]);
                    modvalue = list_transformed[modid] / 100;
                    mainvalue = mainvalue * modvalue;
                }
                break;
            case "mult_red":
                for (var j = 0; j < transform_list[i].mods.length; j++) {
                    modid = common_lookup_parameter(equip_list_stats, "id", transform_list[i].mods[j]);
                    modvalue = list_transformed[modid];
                    mainvalue = 100 - (100 - mainvalue) * (100 - modvalue) / 100;
                }
                break;

            case "times":
                for (var j = 0; j < transform_list[i].mods.length; j++) {

                    if (isNaN(transform_list[i].mods[j])) {
                        modid = common_lookup_parameter(equip_list_stats, "id", transform_list[i].mods[j]);
                        modvalue = list_transformed[modid] / 100;
                    } else {
                        modvalue = transform_list[i].mods[j];
                    }
                    mainvalue = mainvalue * modvalue;
                }
                break;

            case "divide":
                for (var j = 0; j < transform_list[i].mods.length; j++) {

                    if (isNaN(transform_list[i].mods[j])) {
                        modid = common_lookup_parameter(equip_list_stats, "id", transform_list[i].mods[j]);
                        modvalue = list_transformed[modid];
                    } else {
                        modvalue = transform_list[i].mods[j];
                    }
                    mainvalue = mainvalue / modvalue;
                }
                break;

            case "add":
                for (var j = 0; j < transform_list[i].mods.length; j++) {
                    if (isNaN(transform_list[i].mods[j])) {
                        modid = common_lookup_parameter(equip_list_stats, "id", transform_list[i].mods[j]);
                        modvalue = list_transformed[modid];
                    } else {
                        modvalue = transform_list[i].mods[j];
                    }
                    mainvalue = mainvalue + modvalue;
                }
                break;

            case "substract":
                for (var j = 0; j < transform_list[i].mods.length; j++) {
                    if (isNaN(transform_list[i].mods[j])) {
                        modid = common_lookup_parameter(equip_list_stats, "id", transform_list[i].mods[j]);
                        modvalue = list_transformed[modid];
                    } else {
                        modvalue = transform_list[i].mods[j];
                    }
                    mainvalue = mainvalue - modvalue;
                }
                break;
            case "cap":
                var modvalue = 0;
                for (var j = 0; j < transform_list[i].mods.length; j++) {
                    if (isNaN(transform_list[i].mods[j])) {
                        modid = common_lookup_parameter(equip_list_stats, "id", transform_list[i].mods[j]);
                        modvalue += list_transformed[modid];
                    } else {
                        modvalue += transform_list[i].mods[j];
                    }
                }
                if (mainvalue > modvalue) { mainvalue = modvalue }
                break;
            case "character":
                if (equip_current_character.id == transform_list[i].character) {
                    modid = common_lookup_parameter(equip_list_stats, "id", transform_list[i].mods);
                    mainvalue = list_transformed[modid];
                }
                break;
            case "default":
                if (mainvalue == transform_list[i].mods[0]) {
                    mainvalue = transform_list[i].mods[1];
                }
                break;
            case "minimum":
                if (mainvalue < transform_list[i].value) { mainvalue = transform_list[i].value }
                break;
            case "elemastery":
                modid = common_lookup_parameter(equip_list_stats, "id", "elemastery");
                modvalue = list_transformed[modid];
                mainvalue += equip_transform_elemastery(transform_list[i].stat, modvalue);
                break;
            case "enemyres":
                if (mainvalue < 0) {
                    mainvalue = mainvalue / 2;
                } else if (mainvalue > 75) {
                    mainvalue = 100 - (100 / (4 * res + 100))
                } 
                break;
        }


        list_transformed[mainid] = mainvalue;
    }
}

function equip_transform_elemastery(type, value) {
    

    if (type == "elemasteryadd") {
        var result = value / (2000 + value);
        result = 144 / 9 * result;
    } else if (type == "elemasterymult") {
        var result = value / (1400 + value);
        result = 25 / 9 * result;
    } else if (type == "elemasterycrystalize") {
        var result = value / (1400 + value);
        result = 40 / 9 * result;
    } else if (type == "elemasterybonus") {
        var result = value / (1200 + value);
        result = 45 / 9 * result;
    }

    return result * 100;
}

function equip_change_character() {
    if (equip_current_character.id) {
        var old_weapon_type = character_list[equip_current_character.id].weapon;
    } else {
        var old_weapon_type = 0;
    }
    
    equip_current_character.id = document.querySelector('input[name="character_select"]:checked').value;

    equip_damage_reset_key();
    equip_damage_create_reaction_key();
    
    equip_change_party(0);

    if (old_weapon_type != character_list[equip_current_character.id].weapon) {
        equip_setup_weapon();
        equip_change_weapon();
    }   
    equip_passive_display_all();
    equip_display_character_stats();

    if (equip_setup_filter) {
        equip_setup_refresh();
    }
    
}

function equip_change_enemy_level() {
    equip_current_enemy.level = common_input_decimal("equip_enemy_level", 0, 0, 100);
    equip_change_enemy_display();
}

function equip_change_enemy() {
    equip_current_enemy.id = document.querySelector('input[name="enemy_select"]:checked').value;

    equip_change_enemy_display();
}

function equip_change_enemy_display() {
    var enemy = enemy_list[common_lookup_parameter(enemy_list, "id", equip_current_enemy.id)];

    if (equip_current_enemy.level > 0) {
        var defense = 5 * equip_current_enemy.level + 500;
    } else {
        var defense = 0;
    }

    

    

    document.getElementById("equip_enemy_name").innerHTML = enemy.name;

    common_array_set_value(equip_current_enemy.stats, 0);

    for (var i = 0; i < enemy.stats.length; i++) {
        var value = enemy.stats[i].value;
        var statid = common_lookup_parameter(equip_list_stats, "id", enemy.stats[i].id);
        

        equip_current_enemy.stats[statid] += value;
    }

    equip_current_enemy.stats[common_lookup_parameter(equip_list_stats, "id", "enemydef")] = defense;


    equip_display_character_stats();
}

function equip_setup_weapon() {
    var weapon_list = equip_return_weapons_by_type(character_list[equip_current_character.id].weapon);
    common_select_setup("equip_weapon_select", weapon_list.name, weapon_list.id);
    
}


function equip_return_weapons_by_type(type) {
    var result_name = [];
    var result_id = [];

    for (var i = 0; i < equip_list_weapons[type].length; i++) {
            result_name.push(equip_list_weapons[type][i].name);
            result_id.push(equip_list_weapons[type][i].id);
    }

    var result = {};
    result.name = result_name;
    result.id = result_id;
    return result;
}

function equip_setup_artifacts() {

    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        var piece = equip_list_artifacts_name[i];
        var select = document.getElementById("equip_" + piece + "_select");

        for (var ii = 0; ii < equip_list_artifacts_sets.length; ii++) {
            if (equip_list_artifacts_sets[ii][piece]) {
                var opt = document.createElement("option");
                opt.innerHTML = equip_list_artifacts_sets[ii][piece];
                opt.value = equip_list_artifacts_sets[ii].id;
                select.appendChild(opt);
            }            
        }

        var select_main = document.getElementById("equip_" + piece + "_main");

        for (var ii = 0; ii < equip_list_artifacts_stats[piece].length; ii++) {
            var opt = document.createElement("option");
            var statid = common_lookup_parameter(equip_list_stats, "id", equip_list_artifacts_stats[piece][ii])
            var statname = equip_list_stats[statid].name;
            opt.innerHTML = statname;
            opt.value = equip_list_artifacts_stats[piece][ii];
            select_main.appendChild(opt);
        }

        for (var iii = 0; iii < 4; iii++) {
            var select_sub = document.getElementById("equip_" + piece + "_sub_" + iii)
            for (var ii = 0; ii < equip_list_artifacts_substats.length; ii++) {
                var opt = document.createElement("option");
                var statid = common_lookup_parameter(equip_list_stats, "id", equip_list_artifacts_substats[ii].id)
                var statname = equip_list_stats[statid].name;
                opt.innerHTML = statname;
                opt.value = equip_list_artifacts_substats[ii].id;
                select_sub.appendChild(opt);
            }
        }
    }

    equip_change_artifact_list(equip_list_artifacts_name);
}

function equip_change_artifact_list(array) {
    for (var i = 0; i < array.length; i++) {
        equip_change_artifact(array[i])
        equip_change_artifact_stats(array[i])
    }
}

function equip_change_artifact_display(piece) {
    var star_list = equip_list_artifacts_sets[common_lookup_parameter(equip_list_artifacts_sets, "id", equip_current_artifact[piece].id)].stars;
    common_select_setup("equip_" + piece + "_star", star_list, star_list);
    equip_display_artifact_sets(equip_return_artifact_sets(equip_list_artifacts_name));
}

function equip_change_artifact(piece) {
    equip_current_artifact[piece].id = document.getElementById("equip_" + piece + "_select").value;
    equip_change_artifact_display(piece);
    equip_change_artifact_stars(piece);
    equip_effect_check_requirement();
}

function equip_change_artifact_stars_display(piece) {
    var max_level = equip_list_artifacts_stars[equip_current_artifact[piece].star];
    common_select_setup("equip_" + piece + "_level", common_return_array_from_int(max_level, 0, "+ ", ""), common_return_array_from_int(max_level, 0, "", ""));

    var icon_container = document.getElementById("equip_" + piece +"_img_container");
    var icon_img = document.getElementById("equip_" + piece + "_img");

    var artifact_id = common_lookup_parameter(equip_list_artifacts_sets, "id", equip_current_artifact[piece].id)

    if (equip_list_artifacts_sets[artifact_id].icon) {
        icon_container.style.display = "flex";

        icon_container.className = "item_img_container item_stars_" + equip_current_artifact[piece].star;
        icon_img.src = "images/icons/artifact/" + piece + "/" + equip_list_artifacts_sets[artifact_id].icon + ".png";

    } else {
        icon_container.style.display = "none";
    }
}

function equip_change_artifact_stars(piece) {
    equip_current_artifact[piece].star = document.getElementById("equip_" + piece + "_star").value;
    equip_change_artifact_stars_display(piece)
}

function equip_change_artifact_stats(piece) {
    equip_current_artifact[piece].level = document.getElementById("equip_" + piece + "_level").value;
    equip_current_artifact[piece].main = document.getElementById("equip_" + piece + "_main").value;

    for (var i = 0; i < 4; i++) {
        equip_current_artifact[piece]["sub_" + i] = document.getElementById("equip_" + piece + "_sub_" + i).value;
        var unique = false;
        if (equip_current_artifact[piece]["sub_" + i] != "blank") {
            unique = true;
            if (equip_current_artifact[piece].main == equip_current_artifact[piece]["sub_" + i]) {
                equip_reset_artifact_substat(piece, i);
                unique = false;
            } else {
                for (var ii = 0; ii < i; ii++) {
                    if (equip_current_artifact[piece]["sub_" + i] == equip_current_artifact[piece]["sub_" + ii]) {
                        equip_reset_artifact_substat(piece, i);
                        unique = false;
                        break;
                    }
                }
            }
        }
        if (unique) {
            var stat = equip_list_stats[common_lookup_parameter(equip_list_stats, "id", equip_current_artifact[piece]["sub_" + i])]
            if (stat.type == "percent") {
                equip_current_artifact[piece]["sub_val_" + i] = common_input_decimal("equip_" + piece + "_sub_val_" + i, 1, 0, stat.limit);
            } else if (stat.type == "flat") {
                equip_current_artifact[piece]["sub_val_" + i] = common_input_decimal("equip_" + piece + "_sub_val_" + i, 0, 0, stat.limit);
            }
            
            equip_current_artifact[piece].stats[common_lookup_parameter(equip_list_stats, "id", equip_current_artifact[piece]["sub_" + i])] += equip_current_artifact[piece]["sub_val_" + i];
        } else {
            equip_current_artifact[piece]["sub_val_" + i] = 0;
        }
    }

    equip_change_artifact_stats_display(piece);
}

function equip_change_artifact_stats_display(piece) {
    
    common_array_set_value(equip_current_artifact[piece].stats, 0);
    var stars = equip_current_artifact[piece].star;
    var level = equip_current_artifact[piece].level;
    var value_obj = document.getElementById("equip_" + piece + "_main_val");
    var value = equip_list_artifacts_stats_values[stars][equip_current_artifact[piece].main][level];
    var statid = common_lookup_parameter(equip_list_stats, "id", equip_current_artifact[piece].main)
    value_obj.innerHTML = equip_display_stat(value, statid);

    equip_current_artifact[piece].stats[statid] += value;

    for (var i = 0; i < 4; i++) {
        if (equip_current_artifact[piece]["sub_" + i] != "blank" && stars > 0) {
            var subvalue = equip_current_artifact[piece]["sub_val_" + i];
            var substat = equip_current_artifact[piece]["sub_" + i];
            equip_current_artifact[piece].stats[common_lookup_parameter(equip_list_stats, "id", substat)] += subvalue;
            var subrate = subvalue / equip_list_artifacts_substats[common_lookup_parameter(equip_list_artifacts_substats, "id", substat)].average_values[stars]
           
        } else {
            var subrate = 0;
        }
        equip_current_artifact[piece]["sub_rate_" + i] = subrate;
        var subrate_obj = document.getElementById("equip_" + piece + "_sub_rate_" + i);
        subrate_obj.innerHTML = common_number_spaces(Math.round(subrate * 10) / 10);
    }
}


function equip_reset_artifact_substat(piece, i) {
    common_message("Artifact can't have the same stat more than once!", "automatic_red")
    document.getElementById("equip_" + piece + "_sub_" + i).selectedIndex = 0;
    $("#equip_" + piece + "_sub_" + i).select2({
        minimumResultsForSearch: Infinity
    });
    equip_current_artifact[piece]["sub_" + i] = document.getElementById("equip_" + piece + "_sub_" + i).value;
}

function equip_change_weapon() {
    equip_current_weapon.id = document.getElementById("equip_weapon_select").value;
    equip_current_weapon.level = document.getElementById("equip_weapon_level").value;
    equip_current_weapon.refine = document.getElementById("equip_weapon_refine").value;

    equip_change_weapon_display();
    equip_effect_check_requirement();
}


function equip_change_weapon_display() {

    var weapon_type = character_list[equip_current_character.id].weapon;

    var weapon = equip_list_weapons[weapon_type][common_lookup_parameter(equip_list_weapons[weapon_type], "id", equip_current_weapon.id)];
    var weapon_stats = document.getElementById("equip_weapon_stats");

    common_clear_children(weapon_stats, 0);
    common_array_set_value(equip_current_weapon.stats, 0);

    weapon_attack = equip_list_weapon_attack[weapon.atk_base][equip_current_weapon.level]
    var atk_base_id = common_lookup_parameter(equip_list_stats, "id", "atk_base");
    weapon_stats.appendChild(common_create_statline("Base ATK", equip_display_stat(weapon_attack, atk_base_id)));
    if (typeof weapon_attack == "number") {
        equip_current_weapon.stats[atk_base_id] += weapon_attack;
    }
    for (var i = 0; i < weapon.stats.length; i++) {
        var statobj = weapon.stats[i];
        var statid = common_lookup_parameter(equip_list_stats, "id", statobj.stat)
        var statname = equip_list_stats[statid].name;
        if (statobj.type == "level") {
            var value = equip_list_weapon_secondary[statobj.value][genshin_legacy_level_to(equip_current_weapon.level)];
        } else if (statobj.type == "flat") {
            var value = statobj.value;
        } else if (statobj.type == "refine") {
            var value = statobj.value[equip_current_weapon.refine];
        }

        weapon_stats.appendChild(common_create_statline(statname, equip_display_stat(value, statid)));
        if (typeof value == "number") {
            equip_current_weapon.stats[statid] += value;
        }
        
    }

    var effects_obj = common_create_obj("div", "line");
    weapon_stats.appendChild(effects_obj);
    var effects_text = common_create_obj("p");
    effects_obj.appendChild(effects_text);

    for (var i = 0; i < weapon.effects.length; i++) {
        var effectsobj = weapon.effects[i]
        var text = "";
        if (effectsobj.type == "refine") {
            text += " <span class='result'>"
            text += effectsobj.value[equip_current_weapon.refine];
            if (effectsobj.post) {
                text += effectsobj.post;
            }
            text += "</span>"
        } else if (effectsobj.type == "text"){
            text += effectsobj.value;
        }
        effects_text.innerHTML += text;
    }

    if (weapon.apply_effect) {
        var effects_btn = common_create_obj("div", "equip_button");
        effects_btn.innerHTML = "Apply";
        effects_btn.onclick = function () { equip_effect_apply_weapon(); };
        weapon_stats.appendChild(effects_btn);
    }

    var icon_container = document.getElementById("equip_weapon_img_container");
    var icon_img = document.getElementById("equip_weapon_img");

    if (weapon.icon) {
        icon_container.style.display = "flex";

        icon_container.className = "item_img_container item_stars_" + weapon.rarity;
        icon_img.src = "images/icons/weapon/" + weapon_type + "/" + weapon.icon + ".png";

    } else {
        icon_container.style.display = "none";
    }
}

function equip_effect_apply_weapon() {
    var weapon_type = character_list[equip_current_character.id].weapon;
    var weapon = equip_list_weapons[weapon_type][common_lookup_parameter(equip_list_weapons[weapon_type], "id", equip_current_weapon.id)];

    for (var i = 0; i < weapon.apply_effect.length; i++) {
        var effect_id = weapon.apply_effect[i].id;
        if (weapon.apply_effect[i].refine) {
            effect_id += weapon.apply_effect[i].refine[equip_current_weapon.refine]
        }
        if (Array.isArray(weapon.apply_effect[i].option)) {
            equip_effects_new_check(true, effect_id, weapon.apply_effect[i].option[equip_current_weapon.refine]);
        } else {
            equip_effects_new_check(true, effect_id, weapon.apply_effect[i].option);
        }
    }
}

function equip_effect_apply_skill(attackid, attacklevel) {
    var effects = character_list[equip_current_character.id].attacks[attackid].apply;
    if (Array.isArray(effects)) {
        for (var i = 0; i < effects.length; i++) {
            equip_effect_apply_skill_single(effects[i], attacklevel);
        }
    } else {
        equip_effect_apply_skill_single(effects, attacklevel);
    }
    
}

function equip_effect_apply_skill_single(effect, attacklevel) {
    if (typeof effect.option == "undefined") {
        equip_effects_new_check(true, effect.id, attacklevel);
    } else {
        equip_effects_new_check(true, effect.id, effect.option);
    }
}

function equip_effect_check_active(id) {
    for (var i = 0; i < equip_current_effect.active.length; i++) {
        if (equip_current_effect.active[i].select == id) {
            return true;
        }
    }
    return false;
}

function equip_effect_check_requirement() {
    var changed = false;
    for (var i = 0; i < equip_current_effect.active.length; i++) {
        if (equip_current_effect.active[i].auto == 1 && equip_current_effect.active[i].select > 0) {
            
            if (equip_effect_check_requirement_single(equip_current_effect.active[i].select) == false) {
                common_message(equip_list_effects[common_lookup_parameter(equip_list_effects, "id", equip_current_effect.active[i].select)].name + " removed", "automatic_red");
                equip_current_effect.active[i].select = -1;
                equip_current_effect.active[i].option = -1;

                document.getElementById("equip_effects_table_" + i).remove();

                changed = true;
            }
        }
    }
    if (changed) {
        equip_effects_apply_all();
    }
}

function equip_effect_check_requirement_single(effect_id) {
    var effect = equip_list_effects[common_lookup_parameter(equip_list_effects, "id", effect_id)];
    
    if (effect.requirement != false) {
        var req = false;
        if (effect.requirement_type) {
            if (effect.requirement_type == "or") {
                for (var ii = 0; ii < effect.requirement.length; ii++) {
                    if (equip_effect_check_requirement_single_req(effect.requirement[ii])) {
                        req = true;
                    }
                }
            } else if (effect.requirement_type == "and") {
                req = true;
                for (var ii = 0; ii < effect.requirement.length; ii++) {
                    if (equip_effect_check_requirement_single_req(effect.requirement[ii]) == false) {
                        req = false;
                    }
                }
            } else if (effect.requirement_type == "xor") {
                var req_count = 0;
                for (var ii = 0; ii < effect.requirement.length; ii++) {
                    if (equip_effect_check_requirement_single_req(effect.requirement[ii]) == true) {
                        req_count++;
                    }
                }
                if (req_count == 1) {
                    req = true;
                }
            }
        } else {
            req = equip_effect_check_requirement_single_req(effect.requirement)
        }

    } else {
        var req = true;
    }
    return req;
}

function equip_effect_check_requirement_single_req(effect_req) {
    var result = false;

    switch (effect_req.type) {
        case "weapon":
            if (effect_req.subtype == character_list[equip_current_character.id].weapon && (effect_req.id == equip_current_weapon.id) && (effect_req.refine == equip_current_weapon.refine || effect_req.refine == -1)) {
                result = true;
            }
            break;

        case "character":
            if (equip_current_character.id == effect_req.id) {
                result = true;
            }
            break;
        case "weapon_type":
            for (var i = 0; i < effect_req.subtype.length; i++) {
                if (character_list[equip_current_character.id].weapon == effect_req.subtype[i]) {
                    result = true;
                }
            }
            break;
        case "artifact_set":
            var set_count = 0;
            for (var i = 0; i < equip_list_artifacts_name.length; i++) {
                if (equip_current_artifact[equip_list_artifacts_name[i]].id == effect_req.id) {
                    set_count++;
                }
            }
            if (set_count >= effect_req.count) {
                result = true;
            }
            break;
        case "resonance":
            var vision_id = common_lookup_index(character_visions, effect_req.id);
            if (equip_current_party.vision[vision_id] >= effect_req.count) {
                result = true;
            }
            break;
        case "party":
            for (var i = 0; i < equip_current_party.character.length; i++) {
                if (equip_current_party.character[i].id == effect_req.id) {
                    result = true;
                    break;
                }
            }
            break;

        default:
    }


    return result
}

function equip_display_stat(statvalue, statid) {
    if (equip_list_stats[statid].type == "percent") {
        if (typeof statvalue == "number") {
            return (common_number_spaces(Math.round(statvalue * 10) / 10) + " %");
        } else {
            return statvalue + " %";
        }
    } else if (equip_list_stats[statid].type == "flat") {
        if (typeof statvalue == "number") {
            return common_number_spaces(Math.round(statvalue));
        } else {
            return statvalue;
        }
    } else {
        if (typeof statvalue == "number") {
            return common_number_spaces(statvalue);
        } else {
            return statvalue;
        }
    }
}

function equip_return_artifact_sets(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(parseInt(equip_current_artifact[array[i]].id,10))
    }
    return result;
}

function equip_apply_artifact_sets_lite(artifact_sets, apply_sets, applyid) {
    var a = [], b = [], prev;

    artifact_sets.sort();
    for (var i = 0; i < artifact_sets.length; i++) {
        if (artifact_sets[i] !== prev) {
            a.push(artifact_sets[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = artifact_sets[i];
    }

    common_array_set_value(equip_current_artifact_sets.stats, 0);

    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            var set_id = common_lookup_parameter(equip_list_artifacts_sets, "id", a[i]);
            var set_bonus = equip_list_artifacts_sets[set_id].set_bonus
            for (var ii = 0; ii < set_bonus.length; ii++) {
                if (b[i] >= set_bonus[ii].req) {
                    

                    var statval = equip_list_artifacts_sets[set_id].set_bonus[ii].value;
                    if (statval != 0) {
                        var statid = common_lookup_parameter(equip_list_stats, "id", set_bonus[ii].stat);
                        equip_current_artifact_sets.stats[statid] += statval;
                    } 

                    if (apply_sets && set_bonus[ii].apply && equip_effect_check_requirement_single(set_bonus[ii].apply.id)) {

                        equip_current_effect.active[applyid].select = set_bonus[ii].apply.id;
                        equip_current_effect.active[applyid].option = set_bonus[ii].apply.option;
                        equip_current_effect.active[applyid].auto = 1;
                    } else {
                            equip_current_effect.active[applyid].select = -1;
                            equip_current_effect.active[applyid].option = -1;
                            equip_current_effect.active[applyid].auto = 1;
                   
                    }
                }
            }
        }
    }

}

function equip_display_artifact_sets(artifact_sets) {
    var a = [], b = [], prev;

    artifact_sets.sort();
    for (var i = 0; i < artifact_sets.length; i++) {
        if (artifact_sets[i] !== prev) {
            a.push(artifact_sets[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = artifact_sets[i];
    }

    var sets_stats = document.getElementById('equip_sets');
    common_clear_children(sets_stats, 2);
    common_array_set_value(equip_current_artifact_sets.stats, 0);

    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            var set_id = common_lookup_parameter(equip_list_artifacts_sets, "id", a[i]);
            var set_bonus = equip_list_artifacts_sets[set_id].set_bonus
            var name_show = true;
            for (var ii = 0; ii < set_bonus.length; ii++) {
                if (b[i] >= set_bonus[ii].req) {
                    if (name_show) {
                        var name_show = false;
                        sets_stats.appendChild(common_create_statline(equip_list_artifacts_sets[set_id].name, b[i], false, "artifact_set_name"))
                    }
                    

                    var statval = equip_list_artifacts_sets[set_id].set_bonus[ii].value;
                    if (statval != 0) {
                        var statid = common_lookup_parameter(equip_list_stats, "id", set_bonus[ii].stat);
                        var statname = equip_list_stats[statid].name;
                        sets_stats.appendChild(common_create_statline(statname, equip_display_stat(statval, statid)));
                        equip_current_artifact_sets.stats[statid] += statval;
                    } else {
                        var text = set_bonus[ii].stat;
                        sets_stats.appendChild(common_create_statline(text))
                    }
                    if (set_bonus[ii].apply) {
                        sets_stats.appendChild(genshin_apply_button(set_bonus[ii].apply));
                    }
                    
                    
                }
            }
        }
    }
}

function equip_change_character_level() {
    equip_current_character.level = document.getElementById("equip_character_level").value;
    equip_current_character.const = document.getElementById("equip_character_const").value;
    equip_passive_display_all();
    equip_display_character_stats();
}



function equip_display_character_stats() {
    var char_stats = document.getElementById('equip_character_stats');
    common_clear_children(char_stats, 0);
    
    var level = equip_current_character.level;
    var stats_obj = character_list[equip_current_character.id].stats

    common_array_set_value(equip_current_character.stats, 0);

    for (var i = 0; i < stats_obj.length; i++) {
        var statval = stats_obj[i].values[level];
        if (statval != 0) {
            var statid = common_lookup_parameter(equip_list_stats, "id", stats_obj[i].stat);
            var statname = equip_list_stats[statid].name;
            char_stats.appendChild(common_create_statline(statname, equip_display_stat(statval, statid)));
            if (typeof statval == "number") {
                equip_current_character.stats[statid] += statval;
            }
            
        }
    }

    equip_stats_display_all();
}

function equip_passive_display_all() {

    var pass_obj = document.getElementById("equip_const_list");

    common_clear_children(pass_obj, 0);
    common_array_set_value(equip_current_character.passive.stats, 0);

    if (character_list[equip_current_character.id].passive) {
        var passive_list = character_list[equip_current_character.id].passive;
        for (var i = 0; i < passive_list.length; i++) {
            if (passive_list[i].level <= equip_current_character.level) {
                var passid = i + 1;
                equip_passive_display(pass_obj, passive_list[i], "images/icons/character/" + equip_current_character.id + "/passive" + passid + ".png");
                if (passive_list[i].bonus) {
                    for (var ii = 0; ii < passive_list[i].bonus.length; ii++) {
                      
                        var statobj = passive_list[i].bonus[ii];
                        var statid = common_lookup_parameter(equip_list_stats, "id", statobj.stat)
                        equip_current_character.passive.stats[statid] += statobj.value;                        
                    }
                }
            }
            
        }
    }



    if (character_list[equip_current_character.id].const) {
        var const_list = character_list[equip_current_character.id].const;
        for (var i = 0; i < equip_current_character.const; i++) {
            var constid = i + 1;
            equip_passive_display(pass_obj, const_list[i], "images/icons/character/" + equip_current_character.id + "/const" + constid + ".png");
            if (const_list[i].bonus) {
                for (var ii = 0; ii < const_list[i].bonus.length; ii++) {

                    var statobj = const_list[i].bonus[ii];
                    var statid = common_lookup_parameter(equip_list_stats, "id", statobj.stat)
                    equip_current_character.passive.stats[statid] += statobj.value;
                }
            }
        }
    }
    

}



function equip_passive_display(parent, passive, icon) {
    var passive_line = common_create_obj("div", "equip_passive_line");

    var passive_icon_container = common_create_obj("div", " equip_passive_icon_container");
    passive_line.appendChild(passive_icon_container);


    var passive_icon = common_create_obj("img", "equip_passive_icon");
    passive_icon.src = icon;

    passive_icon_container.appendChild(passive_icon);

    var passive_column = common_create_obj("div", "equip_passive_column");

    passive_line.appendChild(passive_column);

    var passive_name = common_create_obj("p", "", passive.name);

    passive_column.appendChild(passive_name);

    var passive_desc = common_create_obj("p", "", passive.desc);

    passive_column.appendChild(passive_desc);

    if (passive.apply) {
        passive_column.className = passive_column.className + " apply_width"
        passive_line.appendChild(genshin_apply_button(passive.apply))
    }

    parent.appendChild(passive_line);
}

function equip_apply_character() {

    common_apply_radio(equip_current_character.id, "character_select");
    for (var i = 0; i < 4; i++) {
        common_apply_select(equip_current_party.character[i].id, "equip_party_" + i);        
    }

    equip_change_party_display_all();
}



function equip_apply_enemy() {

    common_apply_radio(equip_current_enemy.id, "enemy_select");

    common_apply_select(equip_current_enemy.level, "equip_enemy_level");

    equip_change_enemy_display();
}






function equip_apply_equip() {

    
    common_apply_select(equip_current_character.level, "equip_character_level");
    common_apply_select(equip_current_character.const, "equip_character_const");

    equip_setup_weapon();
    
    common_apply_select(equip_current_weapon.id, "equip_weapon_select");
    common_apply_select(equip_current_weapon.level, "equip_weapon_level");
    common_apply_select(equip_current_weapon.refine, "equip_weapon_refine");

    equip_change_weapon_display();

    for (var i = 0; i < equip_list_artifacts_name.length; i++) {

        var piece = equip_list_artifacts_name[i];
        equip_apply_artifact(piece);
        
    }

        $("select").select2({
            minimumResultsForSearch: Infinity
        });
        $(".search").select2({
            minimumResultsForSearch: 1
        });
}

function equip_apply_artifact_all() {
    for (var i = 0; i < equip_list_artifacts_name.length; i++) {

        var piece = equip_list_artifacts_name[i];
        equip_apply_artifact(piece);

    }

    $("select").select2({
        minimumResultsForSearch: Infinity
    });
    $(".search").select2({
        minimumResultsForSearch: 1
    });
}

function equip_reset_artifact(piece) {
    equip_current_artifact[piece].id = 0;
    equip_current_artifact[piece].level = 0;
    equip_current_artifact[piece].star = 0;
    for (var i = 0; i < 4; i++) {
        equip_current_artifact[piece]["sub_" + i] = "blank";
        equip_current_artifact[piece]["sub_val_" + i] = 0;
    }
    
}

function equip_apply_artifact_lite(piece) {

    common_array_set_value(equip_current_artifact[piece].stats, 0);

    var value = equip_list_artifacts_stats_values[equip_current_artifact[piece].star][equip_current_artifact[piece].main][equip_current_artifact[piece].level];
    var statid = common_lookup_parameter(equip_list_stats, "id", equip_current_artifact[piece].main)

    equip_current_artifact[piece].stats[statid] += value;

    for (var i = 0; i < 4; i++) {
        if (equip_current_artifact[piece]["sub_" + i] != "blank") {
            equip_current_artifact[piece].stats[common_lookup_parameter(equip_list_stats, "id", equip_current_artifact[piece]["sub_" + i])] += equip_current_artifact[piece]["sub_val_" + i];
        }
    }
}

function equip_apply_artifact(piece) {
    common_apply_select(equip_current_artifact[piece].id, "equip_" + piece + "_select");
    equip_change_artifact_display(piece);
    common_apply_select(equip_current_artifact[piece].star, "equip_" + piece + "_star");
    equip_change_artifact_stars_display(piece);
    common_apply_select(equip_current_artifact[piece].level, "equip_" + piece + "_level");
    common_apply_select(equip_current_artifact[piece].main, "equip_" + piece + "_main");

    for (var ii = 0; ii < 4; ii++) {
        common_apply_select(equip_current_artifact[piece]["sub_" + ii], "equip_" + piece + "_sub_" + ii);
        common_apply_select(equip_current_artifact[piece]["sub_val_" + ii], "equip_" + piece + "_sub_val_" + ii);
    }
    equip_change_artifact_stats_display(piece);
}

function equip_apply_artifact_full(piece) {
    equip_apply_artifact(piece);

    $("select").select2({
        minimumResultsForSearch: Infinity
    });
    $(".search").select2({
        minimumResultsForSearch: 1
    });

    equip_effect_check_requirement();

    equip_stats_display_all();
    common_debug("Loading artifact successful.");
    equip_url_save();
}



function equip_apply_effects() {
    for (var i = 0; i < equip_current_effect.active.length; i++) {
        equip_effects_new_display(i);
    }
    equip_effects_apply_all();
}

function equip_setup_artifacts_precalculate() {

    for (var i = 0; i < equip_list_artifacts_substats.length; i++) {
        equip_list_artifacts_substats[i].average_values = [];
        for (var ii = 0; ii < equip_list_artifacts_substats[i].possible_values.length; ii++) {
            var sum = 0;
            for (var iii = 0; iii < equip_list_artifacts_substats[i].possible_values[ii].length; iii++) {
                sum += equip_list_artifacts_substats[i].possible_values[ii][iii];
            }
            var avg = sum / equip_list_artifacts_substats[i].possible_values[ii].length;
            equip_list_artifacts_substats[i].average_values.push(avg);
        }
    }
}


function equip_get_character_stat(statid) {
    return equip_stats_total[common_lookup_parameter(equip_list_stats, "id", statid)]
}



