
function equip_change_party_0() {
    var char_id = document.getElementById("equip_party_0").value;
    common_apply_radio(char_id, "character_select");

    equip_change_character();
}


function equip_change_party(id) {

    var old_char = equip_current_party.character[id].id;

    if (id == 0) {
        var char_id = equip_current_character.id;

        document.getElementById("equip_party_" + id).value = char_id;
        $("#equip_party_" + id).select2({
            minimumResultsForSearch: 1
        });
    } else {
        var char_id = document.getElementById("equip_party_" + id).value;
    }
    var unique = true;

    for (var i = 0; i < 4; i++) {
        if (char_id != "none" && id != i && char_id == equip_current_party.character[i].id) {

            if (i == 0) {
                if (old_char == "none") {
                    common_message("You can't remove Main Character!", "automatic_red");
                    common_apply_select_reload(old_char, "equip_party_" + id);

                } else {
                    equip_current_party.character[id].id = char_id;
                    equip_change_party_display(id);
                    common_apply_select_reload(old_char, "equip_party_" + i);
                    equip_current_party.character[i].id = old_char;
                    equip_change_party_display(i);
                    common_apply_radio(old_char, "character_select");
                    equip_change_character();
                }
            } else {
                equip_current_party.character[id].id = char_id;
                equip_change_party_display(id);
                common_apply_select_reload(old_char, "equip_party_" + i);
                equip_current_party.character[i].id = old_char;
                equip_change_party_display(i);
            }
            unique = false;
        }
    }

    if (unique) {
        equip_current_party.character[id].id = char_id;
        equip_change_party_display(id);
    }


}

function equip_change_party_display_all() {
    for (var i = 0; i < equip_current_party.character.length; i++) {
        equip_change_party_display_single(i)
    }
    equip_change_party_vision();
}

function equip_change_party_display(id) {

    equip_change_party_display_single(id, true);

    equip_change_party_vision();

}

function equip_change_party_display_single(id, manual) {

    var char_id = equip_current_party.character[id].id;

    var img_container = document.getElementById("equip_party_img_container_" + id);
    var img = document.getElementById("equip_party_img_" + id);
    var character = character_list[char_id];
    if (character.id >= 0) {
        img_container.className = "character_icon " + character.vision;
        img.src = "images/icons/character/" + char_id + "/char.png"
    } else {
        img_container.className = "character_icon";
        img.src = "images/icons/characters.png";
    }

    var column = document.getElementById("equip_party_column_" + id);

    common_clear_children(column, 4);
    if (character.party_effects) {
        var stat_input_effect = false;
        for (var i = 0; i < character.party_effects.length; i++) {
            if (character.party_effects[i].type == "apply") {

                var effect_obj = common_create_obj("div", "equip_party_effect_container");

                var effect_name = equip_list_effects[common_lookup_parameter(equip_list_effects, "id", character.party_effects[i].id)].name;
                var effect_name_obj = common_create_obj("p", "equip_party_effect_name", effect_name);
                effect_obj.appendChild(effect_name_obj);

                if (character.party_effects[i].desc) {
                    var effect_desc_obj = common_create_obj("p", "equip_party_effect_desc", character.party_effects[i].desc);
                    effect_obj.appendChild(effect_desc_obj);
                }

                effect_obj.appendChild(genshin_apply_button(character.party_effects[i]));
                column.appendChild(effect_obj);


            } else if (id != 0 && character.party_effects[i].type == "stat") {
                var stat_line = common_create_obj("div", "equip_party_stat");
                column.appendChild(stat_line);
                var stat_id = common_lookup_parameter(equip_list_stats, "id", character.party_effects[i].id);
                var stat_name = common_create_obj("p", "equip_party_stat_name", equip_list_stats[stat_id].basename);
                stat_line.appendChild(stat_name);
                var stat_input = common_create_obj("input", "input_statval");

                var obj_id = "equip_party_stat_" + id + "_" + i;
                stat_input.id = obj_id;
                stat_input.onchange = function () { equip_change_party_stat(id) };
                stat_line.appendChild(stat_input);
                equip_current_party.character_stats[id].id = obj_id;
                equip_current_party.character_stats[id].stat = character.party_effects[i].id;
                if (manual) {
                    stat_input.value = 0;
                    equip_current_party.character_stats[id].value = 0;
                } else {
                    stat_input.value = equip_current_party.character_stats[id].value;
                }
                stat_input_effect = true;
            }

        }

        if (stat_input_effect == false) {
            equip_current_party.character_stats[id].id = "";
            equip_current_party.character_stats[id].stat = "";
            equip_current_party.character_stats[id].value = 0;
        }
    }
    if (character.weapon) {

    }
}

function equip_change_party_stat(id) {
    var input_id = equip_current_party.character_stats[id].id;
    var value = common_input_decimal(input_id, 0, 0, 100000);
    equip_current_party.character_stats[id].value = value;
    equip_change_party_vision();
}

function equip_add_party_stats() {
    for (var i = 0; i < equip_current_party.character.length; i++) {   
        if (equip_current_party.character[i].id != "none") {
            var character_stats = character_list[equip_current_party.character[i].id].stats;
            equip_current_party.stats[common_lookup_parameter(equip_list_stats, "id", "burst_energy_party")] += character_stats[common_lookup_parameter(character_stats, "stat", "burst_energy")].values[0];
            if (i > 0 && equip_current_party.character_stats[i].id) {
                var stat_id = equip_current_party.character_stats[i].stat;
                var value = equip_current_party.character_stats[i].value;
                equip_current_party.stats[common_lookup_parameter(equip_list_stats, "id", stat_id)] += value;
            }         
        }
    }
}



function equip_change_party_vision() {

    common_array_set_value(equip_current_party.vision, 0);

    common_array_set_value(equip_current_party.stats, 0);

    for (var i = 0; i < equip_current_party.character.length; i++) {
        if (equip_current_party.character[i].id != "none") {
            var character_id = equip_current_party.character[i].id;
            var vision = character_list[character_id].vision
            equip_current_party.vision[common_lookup_index(character_visions, vision)]++;
        }
    }

    equip_add_party_stats();

    var party_stats = document.getElementById('party_stats');
    common_clear_children(party_stats, 0);


    var resonance = 0;
    var party_count = 0;
    for (var i = 0; i < equip_current_party.vision.length; i++) {
        party_count += equip_current_party.vision[i];
    }

    for (var i = 0; i < party_resonance.length; i++) {
        if (party_resonance[i].vision) {
            var vision_id = common_lookup_index(character_visions, party_resonance[i].vision);
            var vision_count = equip_current_party.vision[vision_id];

            if (vision_count >= party_resonance[i].req) {
                resonance++;
                equip_display_resonance(i, party_stats);
            }
        }

    }

    if (resonance == 0 && party_count == 4) {
        equip_display_resonance(0, party_stats)
    }
    equip_effect_check_requirement();
    equip_stats_display_all();
}

function equip_display_resonance(i, parent) {

    var title = common_create_obj("p");
    title.innerHTML = party_resonance[i].name;
    var title_line = common_create_obj("div", "resonance " + party_resonance[i].vision);
    title_line.appendChild(title);
    parent.appendChild(title_line);

    for (var ii = 0; ii < party_resonance[i].bonus.length; ii++) {
        var statval = party_resonance[i].bonus[ii].value;

        if (statval != 0) {
            var statid = common_lookup_parameter(equip_list_stats, "id", party_resonance[i].bonus[ii].stat);
            var statname = equip_list_stats[statid].name;
            parent.appendChild(common_create_statline(statname, equip_display_stat(statval, statid)));
            equip_current_party.stats[statid] += statval;
        } else {
            var text = party_resonance[i].bonus[ii].stat;
            parent.appendChild(common_create_statline(text))
        }
        if (party_resonance[i].bonus[ii].apply) {
            parent.appendChild(genshin_apply_button(party_resonance[i].bonus[ii].apply))
        }
    }
}
