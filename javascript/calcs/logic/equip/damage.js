
function equip_damage_setup_stats() {
    var stats = {};
    stats.atk = equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "atk")];
    stats.def = equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "def")];
    stats.hp = equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "hp")];
    stats.elemastery = equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "elemastery")];
    stats.healing = equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "healing")];
    stats.additional = equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "additional")];
    stats.bonus = equip_damage_return_bonus();

    return stats;
}

function equip_damage_display() {
    var stats = equip_damage_setup_stats();

    var character = character_list[equip_current_character.id];
    equip_damage.damage = [];
    equip_damage.vision = [];

    var damage_table = document.getElementById('equip_damage_container');
    common_clear_children(damage_table, 2);

    var rowcount = 0;

    for (var i = 0; i < character.attacks.length; i++) {


        if (equip_damage_part_check_req(character.attacks[i])) {
            var skill_line = common_create_obj("div", "equip_damage_skill");
            if (character.attacks[i].type) {
                var level = equip_current_character.skill_level[character.attacks[i].type] + equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "level" + character.attacks[i].type)];
            } else {
                var level = 0;
            }

            skill_line.appendChild(equip_damage_display_skill(character.attacks[i], i, level));




            if (character.attacks[i].parts) {
                skill_line.className = "equip_damage_skill skill_parts";




                var part_line = common_create_obj("div", "equip_damage_part_container")

                for (var ii = 0; ii < character.attacks[i].parts.length; ii++) {

                   

                    if (equip_damage_part_check_req(character.attacks[i].parts[ii])) {
                        part_line.appendChild(equip_damage_display_row(stats, i, ii, level, rowcount));
                    } else {
                        equip_damage.damage.push(0);
                        equip_damage.vision.push("physical");
                        equip_damage.key[rowcount] = false;                      
                    }

                    rowcount++;

                }
                skill_line.appendChild(part_line);
            } 

            damage_table.appendChild(skill_line);
        } 


    }

    

    //reactions
    var reaction_line = common_create_obj("div", "equip_damage_skill skill_parts");
    reaction_line.appendChild(equip_damage_display_skill("Elemental Reactions"));
    var part_reaction_line = common_create_obj("div", "equip_damage_part_container");

    for (var i = 0; i < equip_list_visions[character.vision].reactions.length; i++) {
        part_reaction_line.appendChild(equip_damage_display_row_reaction(equip_list_visions[character.vision].reactions[i], character, rowcount));
        if (equip_list_visions[character.vision].reactions != "crystalize") {
            rowcount++;
        }
        
    }
    equip_damage_check_key();
    reaction_line.appendChild(part_reaction_line);
    damage_table.appendChild(reaction_line);
    equip_setup_current_refresh();
}

function equip_damage_check_key() {
    var active = false;
    for (var i = 0; i < equip_damage.key.length; i++) {
        if (equip_damage.key[i]) {
                active = true;
                break;
            }
    }
    if (active == false) {
        equip_damage_reset_key()
    }
}

function equip_damage_reset_key(){
    equip_damage_create_key()
    equip_damage.key[0] = true;
    common_apply_radio("0", "equip_damage_key");
}



function equip_damage_res_effect(res) {

    var result = 0;

    if (res < 0) {
        result = 100 - res / 2;
    } else if (res > 75) {
        result = 100 / (4 * res + 100)
    } else {
        result = 100 - res;
    }

    return result / 100;
}


function equip_damage_display_skill(skill, attackid, attacklevel) {

    if (equip_damage.overwrite != false && skill.vision == "physical" && skill.type == "normal") {
        var skill_vision = equip_damage.overwrite;
    } else if (skill.vision) {
        var skill_vision = skill.vision;
    } else {
        skill_vision = false;
    }


    if (skill_vision) {
        var skill_div = common_create_obj("div", "equip_damage_skill_main " + skill_vision);
    } else {
        var skill_div = common_create_obj("div", "equip_damage_skill_main");
    }

    var name = common_create_obj("div", "equip_damage_skill_name");
    skill_div.appendChild(name);

    if (skill.name) {
        var name_text = common_create_obj("p", "", skill.name);
    } else {
        var name_text = common_create_obj("p", "", skill);
    }


    name.appendChild(name_text);

    if (skill.apply) {
        var effects_btn = common_create_obj("div", "equip_button");
        effects_btn.innerHTML = "Apply";

        effects_btn.onclick = function () { equip_effect_apply_skill(attackid, attacklevel); };

        name.appendChild(effects_btn);
    }

    var level_container = common_create_obj("div", "equip_damage_skill_level");
    skill_div.appendChild(level_container);

    if (skill.type) {
        if (equip_current_character.skill_level[skill.type] <= 0) {
            var level_minus = common_create_obj("div", "equip_damage_skill_level_btn svg svg-minus-circle-outline disabled");
        } else {
            var level_minus = common_create_obj("div", "equip_damage_skill_level_btn svg svg-minus-circle-outline");
            level_minus.onclick = function () { equip_damage_skill_change_level(skill.type, -1); };
        }

        if (equip_current_character.skill_level[skill.type] >= 9) {
            var level_plus = common_create_obj("div", "equip_damage_skill_level_btn svg svg-plus-circle-outline disabled");
        } else {
            var level_plus = common_create_obj("div", "equip_damage_skill_level_btn svg svg-plus-circle-outline");
            level_plus.onclick = function () { equip_damage_skill_change_level(skill.type, 1); };
        }


        level_container.appendChild(level_minus);

        var bonuslevel = equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "level" + skill.type)];
        if (bonuslevel > 0) {
            var level = common_create_obj("div", "equip_damage_skill_level_value level_increase");
        } else {
            var level = common_create_obj("div", "equip_damage_skill_level_value");
        }
        level.innerHTML = equip_current_character.skill_level[skill.type] + 1 + bonuslevel;


        level_container.appendChild(level);

        level_container.appendChild(level_plus);
    }



    return skill_div;
}

function equip_damage_calculate_row_reaction(reaction_name, vision) {
    var reaction = equip_list_reactions[reaction_name];

    var reaction_mult = 1 + equip_stats_total[common_lookup_parameter(equip_list_stats, "id", reaction_name)] / 100

    switch (reaction.type) {
        case "elemasterymult":
            var result = reaction.multiplier[vision] * reaction_mult;
            break;

        case "elemasteryadd":
            var res_mod = equip_damage_res_effect(equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "enemy" + reaction.vision + "res")]);
            var result = equip_list_reaction_values[reaction.type][equip_current_character.level] * reaction.multiplier * reaction_mult * res_mod;
            if (result < 0) {
                result = 0;
            }
            break;
        case "elemasterybonus":
            var res_mod = equip_damage_res_effect(equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "enemy" + reaction.vision + "res")]);
            var dmg_mod = equip_damage_return_modifier_raw(false, reaction.vision, true);
            var unmod_result = equip_list_reaction_values[reaction.type][equip_current_character.level] * reaction.multiplier * reaction_mult
            var result = unmod_result * res_mod * dmg_mod;
            if (result < 0) {
                result = 0;
            }
            break;
        case "elemasterycrystalize":
            var result = equip_list_reaction_values[reaction.type][equip_current_character.level] * reaction.multiplier * reaction_mult;
            if (result < 0) {
                result = 0;
            }
            break;


    }

    var result_obj = {};
    result_obj.dmg = result;


    if (reaction.type == "elemasterybonus") {
        var crit = equip_damage_return_crit_raw(false, reaction.vision);
        var critdmg_bonus = equip_damage_return_critdmg_raw(false, reaction.vision);

        var critdmg = result * (1 + critdmg_bonus);
        var average = result * (1 - crit + crit * (1 + critdmg_bonus));

        result_obj.critdmg = critdmg;
        result_obj.average = average;
        result_obj.raw = unmod_result;
    } else {
        result_obj.critdmg = result;
        result_obj.average = result;
        result_obj.raw = result;
    }

    
    

    return result_obj;

}


function equip_damage_display_row_reaction(reaction_name, character, rowcount) {

    var result_obj = equip_damage_calculate_row_reaction(reaction_name, character.vision);

    var reaction = equip_list_reactions[reaction_name];
    if (reaction.type == "elemasterymult") {
        var vision = character.vision;
    } else {
        var vision = reaction.vision;
    }


    var row = common_create_obj("div", "equip_damage_part " + vision);

    if (reaction.type == "elemasterymult" || reaction.type == "elemasterybonus") {
        row.appendChild(common_create_obj("div", "equip_damage_part_checkbox_container dummy"));
        
    } else {
        row.appendChild(equip_damage_create_key_container(rowcount));
        
    }

    row.appendChild(common_create_obj("div", "equip_damage_part_checkbox_container dummy"));


    row.appendChild(common_create_obj("div", "equip_damage_part_text", reaction.name));

    equip_damage.damage.push(result_obj.average);
    

    if (reaction.type == "elemasterybonus") {
        row.appendChild(common_create_obj("div", "equip_damage_part_text equip_damage_part_num", "+" + common_number_spaces(((result_obj.dmg * 10) / 10).toFixed(1))));
        row.appendChild(common_create_obj("div", "equip_damage_part_text equip_damage_part_num", "+" + common_number_spaces(((result_obj.critdmg * 10) / 10).toFixed(1))));
        row.appendChild(common_create_obj("div", "equip_damage_part_text equip_damage_part_num", "+" + common_number_spaces(((result_obj.average * 10) / 10).toFixed(1))));
    } else {
        row.appendChild(common_create_obj("div", "equip_damage_part_text equip_damage_part_num"));
        row.appendChild(common_create_obj("div", "equip_damage_part_text equip_damage_part_num"));
        if (reaction.type == "elemasterymult") {
            row.appendChild(common_create_obj("div", "equip_damage_part_text equip_damage_part_num", "&times; " + common_number_spaces(((result_obj.average * 100) / 100).toFixed(2))));
        } else {
            row.appendChild(common_create_obj("div", "equip_damage_part_text equip_damage_part_num", common_number_spaces(((result_obj.average * 10) / 10).toFixed(1))));
        }
    }

    return row;

}

function equip_damage_hits_return(part) {
    if (part.stat) {
        if (Array.isArray(part.stat)) {
            var scaling = part.scale[0][0];                       
        } else {
            var scaling = part.scale[0];
        }
        if (Array.isArray(scaling)) {
            var result = scaling.length;
        } else {
            var result = 1;
        } 
    } else {
        var result = 1;
    } 
    return result;
}

function equip_damage_return(stats, part, level, vision) {

    var result = 0;

    if (part.stat) {
        if (Array.isArray(part.stat)) {    

            if (part.multiplication) {
                result = equip_damage_return_single(part.scale[level]);
                for (var i = 0; i < part.stat.length; i++) {
                    result = result * stats[part.stat[i]];
                }
            } else {
                for (var i = 0; i < part.stat.length; i++) {
                    result += stats[part.stat[i]] * equip_damage_return_single(part.scale[i][level]);
                }
            }
            
        } else {
            result = stats[part.stat] * equip_damage_return_single(part.scale[level]);
        }
    } 

    if (part.type) {
        result = result * equip_stats_total[common_lookup_parameter(equip_list_stats, "id", part.type + "_mult")] / 100;
    }

    if (stats.bonus) {
        for (var i = 0; i < equip_list_bonus_list.length; i++) {
            if (stats.bonus[i] != 0 && equip_damage_bonus_check(equip_list_bonus_list[i], part, vision)) {
                if (stats[equip_list_bonus_list[i].stat]) {
                    result += stats[equip_list_bonus_list[i].stat] * stats.bonus[i] / 100;
                } else {
                    result += equip_stats_total[common_lookup_parameter(equip_list_stats, "id", equip_list_bonus_list[i].stat)] * stats.bonus[i] / 100;
                }
                
            }
        }
    }

    if (part.flat) {
        if (Array.isArray(part.flat[level])) {
            var flat = 0;
            for (var i = 0; i < part.flat[level].length; i++) {
                flat += part.flat[level][i];
            }
        } else {
            var flat = part.flat[level];
        }
        result = result + flat;
    } 

   

    return result;
}

function equip_damage_bonus_check(bonus, part, vision) {
    
    if (Array.isArray(bonus.type)) {
        if (bonus.type.includes(part.type) == false) {
            return false;
        }
    } else {
        if (bonus.type != part.type) {
            return false;
        }
    }
    if (bonus.vision && (bonus.vision != vision)) {
        return false;
    }
    return true;
}

function equip_damage_return_single(partscale) {
    if (Array.isArray(partscale)) {
        var scaling = 0;
        for (var i = 0; i < partscale.length; i++) {
            scaling += partscale[i];
        }
    } else {
        var scaling = partscale;
    }

    return scaling / 100;
}

function equip_damage_return_defense(vision, type) {
    var enemydef = equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "enemydef")];
    if (type) {
        var defignore = equip_stats_total[common_lookup_parameter(equip_list_stats, "id", type + "defignore")];
        enemydef = enemydef * (1 - defignore / 100);
    }

    var defense_mod = 1 - equip_damage_return_defense_reduction(enemydef) / 100;
    var res_mod = equip_damage_res_effect(equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "enemy" + vision + "res")]);
    return defense_mod * res_mod;
}

function equip_damage_return_defense_reduction(enemydef) {
    var result = 100 * enemydef / (enemydef + (5 * level_list_values[equip_current_character.level]) + 500);
    return result;
}

function equip_damage_return_name_single(statid, partscale, namebonus, nameadd, brackets) {
    if (Array.isArray(partscale)) {
        var result = "";
        for (var i = 0; i < partscale.length; i++) {
            if (i > 0) {
                result += " + ";
            }
            result += equip_damage_return_name_single_value(partscale[i], statid);
        }
        if (namebonus) {
            if (brackets) {
                result = result + " + (" + namebonus + "</span>) &times;" + i;
            } else {
                result += " + " + namebonus + " &times;" + i + "</span>";
            }
        }
        if (nameadd) {
            result += "</span>";
        }
    } else if (partscale) {

        var result = equip_damage_return_name_single_value(partscale, statid);
        if (namebonus) {
            result += " + " + namebonus;
        }
        if (nameadd) {
            result += "</span>";
        }
    } else {
        var result = equip_list_stats[statid].shortname;
    }
    return result;
}

function equip_damage_return_name_single_value(val, statid) {
    var result;
    if (equip_list_stats[statid].conversion == "percent") {
        result = Math.round(val * 100) / 100 + "% " + equip_list_stats[statid].shortname;
    } else if (equip_list_stats[statid].conversion == "flat") {
        result = Math.round(val) / 100 + "&times; " + equip_list_stats[statid].shortname
    }
    return result;
}

function equip_damage_return_name(part, level, stats, vision) {

    var brackets = 0;
    var namebonus = "";
    var nameadd = false;
    

    if (stats.bonus) {
        for (var i = 0; i < equip_list_bonus_list.length; i++) {
            if (stats.bonus[i] != 0 && equip_damage_bonus_check(equip_list_bonus_list[i], part, vision)) {
                brackets++;
                if (brackets > 1) {
                    namebonus += " + ";
                }
                namebonus += Math.round(stats.bonus[i] * 100) / 100 + "% " + equip_list_stats[common_lookup_parameter(equip_list_stats, "id", equip_list_bonus_list[i].stat)].shortname;
            }
        }
    }

    if ((part.type == "normal" || part.type == "charged") && stats.additional != 0) {
        brackets++;
        if (brackets > 1) {
            namebonus += "<span class='additional_physical'> + " + Math.round(stats.additional * 100) / 100 + "% " + equip_list_stats[common_lookup_parameter(equip_list_stats, "id", "atk")].shortname;
        } else {
            namebonus += "<span class='additional_physical'>" + Math.round(stats.additional * 100) / 100 + "% " + equip_list_stats[common_lookup_parameter(equip_list_stats, "id", "atk")].shortname;
        }
        nameadd = true;
    } 

    if (part.stat) {
        brackets++;
        if (Array.isArray(part.stat)) {
            brackets++;
            var namescale = "";
            if (part.multiplication) {
                for (var i = 0; i < part.stat.length; i++) {
                    if (i > 0) {
                        namescale += " &times; ";
                    }
                    var statid = common_lookup_parameter(equip_list_stats, "id", part.stat[i]);
                    if (i == (part.stat.length - 1)) {
                        namescale += equip_damage_return_name_single(statid, false, namebonus, nameadd, brackets);
                    } else if (i == 0) {
                        namescale += equip_damage_return_name_single(statid, part.scale[level], false, false, false);
                    } else {
                        namescale += equip_damage_return_name_single(statid, false, false, false, false);
                    }
                }
            } else {
                for (var i = 0; i < part.stat.length; i++) {
                    if (i > 0) {
                        namescale += " + ";
                    }
                    var statid = common_lookup_parameter(equip_list_stats, "id", part.stat[i]);
                    if (i == (part.stat.length - 1)) {
                        namescale += equip_damage_return_name_single(statid, part.scale[i][level], namebonus, nameadd, brackets);
                    } else {
                        namescale += equip_damage_return_name_single(statid, part.scale[i][level], false, false, false);
                    }
                }
            }          
        } else {
            var statid = common_lookup_parameter(equip_list_stats, "id", part.stat);
            var namescale = equip_damage_return_name_single(statid, part.scale[level], namebonus, nameadd, brackets); 
        }
    } else {
        var namescale = "";
    }

    

    if (part.flat) {
        brackets++;
        if (Array.isArray(part.flat[level])) {
            var nameflat = "";
            for (var i = 0; i < part.flat[level].length; i++) {
                nameflat += " + " + Math.round(part.flat[level][i] * 100) / 100;
            }
        } else {
            var nameflat = " + " + Math.round(part.flat[level] * 100) / 100;
        }
    } else {
        var nameflat = "";
    }

    if (part.hits) {
        var namehits = " &times;" + part.hits;
    } else {
        var namehits = "";
    }

    
    if (brackets > 1 && namehits) {
        var result = "(" + namescale + nameflat+ ")" + namehits;
    } else {
        var result = namescale + nameflat + namehits;
    }

    return result;
}

function equip_damage_return_vision(part) {
    if (equip_damage.overwrite != false && part.vision == "physical" && (part.type == "normal" || part.type == "charged" || part.type == "plunge")) {
       return equip_damage.overwrite;
    } else if (part.vision) {
        return part.vision;
    } else {
        return false;
    }
}

function equip_damage_return_modifier(part, vision) {
    return equip_damage_return_modifier_raw(part.type, vision, part.damage)
}

function equip_damage_return_modifier_raw(type, vision, damage) {

    var modifier = 100;

    if (vision && damage && type) {
        modifier = modifier + equip_stats_total[common_lookup_parameter(equip_list_stats, "id", type + vision)] + equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "all")];
    } else if (vision && damage) {
        modifier = modifier + equip_stats_total[common_lookup_parameter(equip_list_stats, "id", vision)] + equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "all")];
    } else if (damage) {
        modifier = modifier + equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "all")];
    } else if (type) {
        modifier = modifier + equip_stats_total[common_lookup_parameter(equip_list_stats, "id", type)];

        if (type == "healing") {
            modifier = modifier + equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "healinginc")];
        }
    }

    modifier = modifier / 100;

    if (damage == true) {
        modifier = modifier * equip_damage_return_defense(vision, type);
    }

    return modifier;
}

function equip_damage_return_crit(part, vision) {

    return equip_damage_return_crit_raw(part.type, vision)
}

function equip_damage_return_crit_raw(type, vision) {
    var crit = equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "crit")] / 100;
    if (type) {
        crit += equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "crit" + type)] / 100;
    }
    if (vision) {
        crit += equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "crit" + vision)] / 100;
    }
    if (crit < 0) {
        crit = 0;
    } else if (crit > 1) {
        crit = 1;
    }
    return crit;
}

function equip_damage_return_critdmg(part, vision) {
    return equip_damage_return_critdmg_raw(part.type, vision);
}

function equip_damage_return_critdmg_raw(type, vision) {
    var critdmg = equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "critdmg")] / 100;
    if (type) {
        critdmg += equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "critdmg" + type)] / 100;
    }
    if (vision) {
        critdmg += equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "critdmg" + vision)] / 100;
    }
    return critdmg;
}

function equip_damage_calculate_row(stats, attackid, partid, level, rowcount) {

    var part = character_list[equip_current_character.id].attacks[attackid].parts[partid];
    var vision = equip_damage_return_vision(part);
    var result_obj = equip_damage_calculate_row_lite(stats, part, vision, level, rowcount);
    return result_obj.average;
    
}

function equip_damage_calculate_row_lite(stats, part, vision, level, rowcount) {

    var result = equip_damage_return(stats, part, level, vision);

    if (equip_damage.reaction[rowcount] && equip_damage.reaction[rowcount] > 0) {
        var reaction = equip_list_visions[vision].reactions_mod[equip_damage.reaction[rowcount] - 1];
        var reaction_obj = equip_damage_calculate_row_reaction(reaction, vision);
        if (equip_list_reactions[reaction].type == "elemasterymult") {
            result = result * reaction_obj.raw;
        } else if (equip_list_reactions[reaction].type == "elemasterybonus"){
            result = result + reaction_obj.raw;
        }
        
    }

    result = result * equip_damage_return_modifier(part, vision);

    if ((part.type == "normal" || part.type == "charged") && stats.additional != 0) {
        var additional = stats.additional * stats["atk"] / 100;
        var modifier_add = 1 + equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "physical")] / 100;
        additional = additional * modifier_add * equip_damage_return_defense("physical", false);
        additional = additional * equip_damage_hits_return(part);
        result += additional;
    } 

    if (part.hits) {
        result = result * part.hits;
    }

    if (result < 0) {
        result = 0;
    }

    var result_obj = {};
    result_obj.dmg = result;

    if (part.crit) {      
        var crit = equip_damage_return_crit(part, vision);
        var critdmg_bonus = equip_damage_return_critdmg(part, vision);
        var critdmg = result * (1 + critdmg_bonus);
        var average = result * (1 - crit + crit * (1 + critdmg_bonus));
             
        result_obj.critdmg = critdmg;
        result_obj.average = average;
    } else {       
        result_obj.critdmg = result;
        result_obj.average = result;     
    }

    return result_obj;
}

function equip_damage_display_row(stats, attackid, partid, level, rowcount) {

    var part = character_list[equip_current_character.id].attacks[attackid].parts[partid];

    var vision = equip_damage_return_vision(part);
    equip_damage.vision.push(vision);

    var row = common_create_obj("div", "equip_damage_part " + vision);

    row.appendChild(equip_damage_create_key_container(rowcount));

    row.appendChild(equip_damage_create_reaction_btn(rowcount, part));

    var result_obj = equip_damage_calculate_row_lite(stats, part, vision, level, rowcount);

    var part_text = common_create_obj("div", "equip_damage_part_text");

    if (part.type) {
        var part_text_type = common_create_obj("div", "equip_damage_part_text_type svg svg-" + attack_type_icons[part.type]);
        part_text.appendChild(part_text_type);       
    } 

    part_text.appendChild(equip_damage_return_type_tooltip(part, vision));

    var part_text_name_name = common_create_obj("div", "equip_damage_part_text_name_name");
    part_text_name_name.appendChild(common_create_obj("span", "equip_damage_part_text_name", part.name + "&nbsp;"));
    part_text_name_name.appendChild(common_create_obj("span", "equip_damage_part_text_detail", "(" + equip_damage_return_name(part, level, stats, vision) + ")"));

    part_text.appendChild(part_text_name_name);
    row.appendChild(part_text);

    if (part.crit) {
        row.appendChild(common_create_obj("div", "equip_damage_part_text equip_damage_part_num", common_number_spaces(result_obj.dmg.toFixed(1))));
        row.appendChild(common_create_obj("div", "equip_damage_part_text equip_damage_part_num", common_number_spaces(result_obj.critdmg.toFixed(1))));
    } else {
        row.appendChild(common_create_obj("div", "equip_damage_part_text equip_damage_part_num"));
        row.appendChild(common_create_obj("div", "equip_damage_part_text equip_damage_part_num"));          
    }
    row.appendChild(common_create_obj("div", "equip_damage_part_text equip_damage_part_num", common_number_spaces(result_obj.average.toFixed(1))));   

    equip_damage.damage.push(result_obj.average);
    

    return row;
}

function equip_damage_return_type_tooltip(part, vision) {

    var tooltip = common_create_obj("div", "img_button_hover");

    if (part.type) {
        var part_type = equip_list_skill_type[part.type].name;
    } else {
        var part_type = "None";
    }

    tooltip.appendChild(common_create_statline("Type", part_type, false, false, false, "none"));

    if (part.type == "healing") {
        var part_vision = "None";
        var part_vision_class = false;
    } else {
        var part_vision = equip_list_visions[vision].name;
        var part_vision_class = vision
    }
    tooltip.appendChild(common_create_statline("Vision", part_vision, false, false, false, part_vision_class));

    if (part.damage) {
        var part_damage = "Yes";
        var part_damage_class = "positive";
    } else {
        var part_damage = "No";
        var part_damage_class = "negative";
    }
    tooltip.appendChild(common_create_statline("Damage", part_damage, false, false, false, part_damage_class));

    if (part.crit) {
        var part_crit = "Yes";
        var part_crit_class = "positive";
    } else {
        var part_crit = "No";
        var part_crit_class = "negative";
    }
    tooltip.appendChild(common_create_statline("Crit", part_crit, false, false, false, part_crit_class));

    return tooltip;
}

function equip_damage_part_check_req(part) {

    var result = true;

    if (typeof part.req != "undefined") {
        if (part.req.type == "const") {
            var constel = equip_current_character.const;
            if (part.req.subtype == "max") {
                if (constel > part.req.val) {
                    result = false;
                }
            } else if (part.req.subtype == "min") {
                if (constel < part.req.val) {
                    result = false;
                }
            } else if (part.req.subtype == "exact") {
                if (constel != part.req.val) {
                    result = false;
                }
            }
        } else if (part.req.type == "level") {
            var level = equip_current_character.level;
            if (part.req.subtype == "max") {
                if (level > part.req.val) {
                    result = false;
                }
            } else if (part.req.subtype == "min") {
                if (level < part.req.val) {
                    result = false;
                }
            } else if (part.req.subtype == "exact") {
                if (level != part.req.val) {
                    result = false;
                }
            }
        }
    }
    return result;

}

function equip_damage_return_bonus() {
    var result = [];
    var result_bool = false;
    for (var i = 0; i < equip_list_bonus_list.length; i++) {
        var bonus = equip_stats_total[common_lookup_parameter(equip_list_stats, "id", equip_list_bonus_list[i].id)];
        result.push(bonus)
        if (bonus != 0) {
            result_bool = true;
        }
    }
    if (result_bool) {
        return result;
    } else {
        return result_bool;
    }
}

function equip_damage_skill_change_level(type, change) {
    equip_current_character.skill_level[type] += change;
    equip_damage_display();
    equip_url_save();
}

function equip_damage_create_reaction_btn(rowcount, part) {
    var container = common_create_obj("div", "equip_damage_part_checkbox_container");
    var rowtype = equip_damage.vision[rowcount];
    
    if (part.damage && equip_list_visions[rowtype].reactions_mod.length > 0) {
        var btn_class = "equip_damage_part_reaction_btn ";
        var reaction_id = equip_damage.reaction[rowcount];
        if (reaction_id && reaction_id > 0 && reaction_id <= equip_list_visions[rowtype].reactions_mod.length) {
            btn_class += rowtype + "_" + equip_list_visions[rowtype].reactions_mod[equip_damage.reaction[rowcount] - 1];
        } else {
            equip_damage.reaction[rowcount] = 0;
            btn_class += rowtype + "_noreaction";
        }
        var btn = common_create_obj("div", btn_class);
        btn.onclick = function () { equip_damage_change_reaction_row(rowcount) };
        btn.id = "equip_damage_part_reaction_btn_" + rowcount;
        container.appendChild(btn);
    } else {
        equip_damage.reaction[rowcount] = 0;
    }

    return container;
}

function equip_damage_change_reaction_row(rowcount) {
    var vision = equip_damage.vision[rowcount];
    var reactions = equip_list_visions[vision].reactions_mod;   
    if (reactions.length > 0) {
        var prev = equip_damage.reaction[rowcount];
        prev++;
        if (prev > reactions.length) {
            prev = 0;
        }
        equip_damage.reaction[rowcount] = prev;
    }
 

    equip_damage_display();
    equip_url_save();
}

function equip_damage_create_key_container(rowcount) {
    var key_container = common_create_obj("div", "equip_damage_part_checkbox_container");
    if (equip_damage.key[rowcount]) {
        var checkbox = common_create_checkbox("checkbox_container simple_checkbox", "checkmark", rowcount, "equip_damage_key", true, "equip_damage_key_" + rowcount);     
    } else {
        var checkbox = common_create_checkbox("checkbox_container simple_checkbox", "checkmark", rowcount, "equip_damage_key", false, "equip_damage_key_" + rowcount);        
    }
    checkbox.id = "equip_damage_key_container_" + rowcount;
    
    key_container.appendChild(checkbox);

    checkbox.ondblclick = function () { equip_damage_multikey_switch(rowcount, true) };

    if (equip_damage.key[rowcount] > 9) {
        var multikey_class = "equip_damage_multikey multikey_long";
    } else {
        var multikey_class = "equip_damage_multikey"
    }

    var multikey_input = common_create_obj("input", multikey_class, false, "equip_damage_multikey_" + rowcount);
    multikey_input.value = equip_damage.key[rowcount];
    multikey_input.onblur = function () { equip_damage_multikey_change(rowcount) };
    multikey_input.oninput = function () { equip_damage_resize_key(rowcount) };
    multikey_input.maxLength = 2;
    key_container.appendChild(multikey_input);

    if (equip_damage.key[rowcount] > 1) {
        checkbox.style.display = "none";
            
    } else {
        multikey_input.style.display = "none";
    }
    
    
    

    return key_container;
}

function equip_damage_change_key_precheck() {
    var active = false;

    var keys = document.getElementsByName("equip_damage_key");

    for (var i = 0; i < keys.length; i++) {
        if (keys[i].checked) {
            active = true;
            break;
        } 
    }
    return active;
}

function equip_damage_change_key_precheck_val(id) {
    var active = false;

    for (var i = 0; i < equip_damage.key.length; i++) {
        if (i != id && equip_damage.key[i] > 0) {
            active = true;
            break;
        }
    }
    return active;
}



function equip_damage_change_key() {

    if (equip_damage_change_key_precheck()) {
        equip_damage_create_key()

        var keys = document.getElementsByName("equip_damage_key");

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i].value;
            if (keys[i].checked) {
                if (equip_damage.keymult[key]) {
                    equip_damage.key[key] = 1;
                } else {
                    var multikey = common_input_decimal("equip_damage_multikey_" + key, 0, 0, 99);
                    equip_damage.key[key] = Math.max(1, multikey);
                }
                
            } else {
                equip_damage.key[key] = 0;
            }
        }
        equip_setup_current_refresh();
    } else {
        var keys = document.getElementsByName("equip_damage_key");

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i].value;
            if (equip_damage.key[key]) {
                keys[i].checked = true;
            } else {
                keys[i].checked = false;
            }
        }
    }    
}

function equip_damage_create_key() {

    equip_damage.key = [];  
    equip_damage.keymult = [];

    var character = character_list[equip_current_character.id];

    for (var i = 0; i < character.attacks.length; i++) {
        for (var ii = 0; ii < character.attacks[i].parts.length; ii++) {
            equip_damage.key.push(0);
            equip_damage.keymult.push(false);
        }
    }
    for (var i = 0; i < equip_list_visions[character_list[equip_current_character.id].vision].reactions.length; i++) {  
        equip_damage.key.push(0);
        if (equip_list_reactions[equip_list_visions[character_list[equip_current_character.id].vision].reactions[i]].type == "elemasterymult") {
            equip_damage.keymult.push(true);
        } else {
            equip_damage.keymult.push(false);
        }        
    }

}

function equip_damage_create_reaction_key() {
    equip_damage.reaction = [];
    var character = character_list[equip_current_character.id];
    for (var i = 0; i < character.attacks.length; i++) {
        for (var ii = 0; ii < character.attacks[i].parts.length; ii++) {
            equip_damage.reaction.push(0);
        }
    }
    for (var i = 0; i < equip_list_visions[character_list[equip_current_character.id].vision].reactions.length; i++) {
        if (equip_list_visions[character_list[equip_current_character.id].vision].reactions[i] != "crystalize") {
            equip_damage.reaction.push(0);
        }
    }
}

function equip_damage_get_key() {
    var result = 0;
    for (var i = 0; i < equip_damage.key.length; i++) {
        if (equip_damage.key[i]) {
            if (equip_damage.keymult[i] && result > 0) {
                //result = result * equip_damage.damage[i];
            } else {
                result += equip_damage.damage[i] * equip_damage.key[i];
            }
        }
    }
    return result;
}

function equip_damage_get_key_from_coordinates(skill, row) {

    var result = 0;

    var character = character_list[equip_current_character.id];

    for (var i = 0; i < skill; i++) {
            result += character.attacks[i].parts.length;
    }

    result += row;

    return result;

}

function equip_damage_resize_key(id) {
    var multikey = document.getElementById("equip_damage_multikey_" + id);
    if (document.getElementById("equip_damage_multikey_" + id).value > 9) {
        multikey.className = "equip_damage_multikey multikey_long"
    } else {
        multikey.className = "equip_damage_multikey"
    }
}

function equip_damage_multikey_change(id) {
    var multival = document.getElementById("equip_damage_multikey_" + id).value;
    if (multival <= 1) {
        if (equip_damage_change_key_precheck_val(id) == false) {
            multival = 1;
        }
        equip_damage_multikey_switch(id, false, multival);
    }
}

function equip_damage_multikey_switch(id, multi, multival) {

    var key_container = document.getElementById("equip_damage_key_container_" + id);
    var key = document.getElementById("equip_damage_key_" + id);
    var multikey = document.getElementById("equip_damage_multikey_" + id);

    if (multi) {
        key_container.style.display = "none";
        multikey.style.display = "initial";
        multikey.value = 1;
        multikey.focus();
        key.checked = true;
        
    } else {
        key_container.style.display = "initial";
        multikey.style.display = "none";
        if (multival == 0) {
            key.checked = false;
        }
        
    }
    
    equip_damage_change_key();
}

