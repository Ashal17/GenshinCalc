
function equip_url_save() {
    common_url_generate("", equip_url_generate(), false)
}

function equip_url_generate() {
    var url_version = version;

    var url_character = equip_url_save_character();
    var url_equipment = common_url_short(equip_url_save_equip());
    var url_substats = common_url_short(equip_url_save_substats());
    var url_effects = common_url_short(equip_url_save_effects());
    var url_enemy = common_url_short(equip_url_save_enemy());
    var url_key = common_url_short(equip_url_save_key());

    var url_data = url_version + "$" + url_character + "$" + url_equipment + "$" + url_substats + "$" + url_effects + "$" + url_enemy + "$" + url_key +"$";

    return url_data;
}

function equip_url_save_character() {
    var result = "";
    result += base_convert(character_list[equip_current_character.id].id, 10, 64);
    for (var i = 1; i < 4; i++) {
        if (equip_current_party.character[i].id != "none") {
            result += "&" + base_convert(character_list[equip_current_party.character[i].id].id, 10, 64);
            if (equip_current_party.character_stats[i].value != 0) {
                result += "!" + base_convert(equip_current_party.character_stats[i].value, 10, 64)
            }
        }
    }
    return result;
}

function equip_url_save_enemy() {
    var convert = "";
    convert += common_url_save_int(equip_current_enemy.level, 7);
    convert += common_url_save_int(equip_current_enemy.id, 11);

    return common_url_secure_base64(convert);

}

function equip_url_save_equip() {
    var convert = "";
    convert += common_url_save_int(equip_current_character.level, 4);
    convert += common_url_save_int(equip_current_character.const, 3);

    for (var i = 0; i < skill_type_list.length; i++) {
        convert += common_url_save_int(equip_current_character.skill_level[skill_type_list[i]], 4);
    }

    convert += common_url_save_int(equip_current_weapon.id, 8);
    convert += common_url_save_int(equip_current_weapon.level, 4);
    convert += common_url_save_int(equip_current_weapon.refine, 3);

    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        convert += common_url_save_int(equip_current_artifact[equip_list_artifacts_name[i]].id, 6);
        convert += common_url_save_int(equip_current_artifact[equip_list_artifacts_name[i]].star, 3);
        convert += common_url_save_int(equip_current_artifact[equip_list_artifacts_name[i]].level, 5);
        convert += common_url_save_int(common_lookup_index(equip_list_artifacts_stats[equip_list_artifacts_name[i]], equip_current_artifact[equip_list_artifacts_name[i]].main), 4);



        for (var ii = 0; ii < 4; ii++) {
            convert += common_url_save_int(common_lookup_parameter(equip_list_artifacts_substats, "id", equip_current_artifact[equip_list_artifacts_name[i]]["sub_" + ii]), 4);
        }
    }

    return common_url_secure_base64(convert);
}

function equip_url_save_key() {
    var convert = "";
    convert += common_url_save_int(equip_damage.key.length, 6);

    var multikey = 0;

    for (var i = 0; i < equip_damage.key.length; i++) {
        if (equip_damage.key[i] > 1) {
            multikey = 1;
            break;
        } 
    }

    convert += multikey;

    var reactkey = 0;

    for (var i = 0; i < equip_damage.reaction.length; i++) {
        if (equip_damage.reaction[i] && equip_damage.reaction[i] > 0) {
            reactkey = 1;
            break;
        }
    }

    convert += reactkey;

    if (multikey) {
        for (var i = 0; i < equip_damage.key.length; i++) {
            if (equip_damage.key[i]) {
                convert += "1";
                convert += common_url_save_int(equip_damage.key[i], 7);
            } else {
                convert += "0";
            }
            if (reactkey) {
                convert += common_url_save_int(equip_damage.reaction[i], 2);
            }
        }
    } else {
        for (var i = 0; i < equip_damage.key.length; i++) {
            if (equip_damage.key[i]) {
                convert += "1";
            } else {
                convert += "0";
            }
            if (reactkey) {
                convert += common_url_save_int(equip_damage.reaction[i], 2);
            }
        }
    }
    
    return common_url_secure_base64(convert);

}

function equip_url_save_substats() {
    var convert = "";

    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        for (var ii = 0; ii < 4; ii++) {

            var stat = equip_list_stats[common_lookup_parameter(equip_list_stats, "id", equip_current_artifact[equip_list_artifacts_name[i]]["sub_" + ii])];

            if (stat.type == "percent") {
                convert += common_url_save_int(Math.round(equip_current_artifact[equip_list_artifacts_name[i]]["sub_val_" + ii] * 10), stat.bitsize);
            } else if (stat.type == "flat") {
                convert += common_url_save_int(Math.round(equip_current_artifact[equip_list_artifacts_name[i]]["sub_val_" + ii]), stat.bitsize);
            }
        }
    }

    return common_url_secure_base64(convert);

}

function equip_url_save_effects() {
    var convert = "";

    for (var i = 0; i < equip_current_effect.active.length; i++) {
        if (equip_current_effect.active[i].select > 0 & equip_current_effect.active[i].option > -1) {

            convert += common_url_save_int(equip_current_effect.active[i].select, 10);
            convert += common_url_save_int(equip_current_effect.active[i].option, 5);
            convert += equip_current_effect.active[i].auto;
        }
    }

    return common_url_secure_base64(convert);
}

function equip_url_load() {
    
    return equip_url_apply(equip_url_get());
}

function equip_url_get() {
    var url = location.search;

    if (url == "") {
        if (localStorage.getItem("last_url")) {
            common_debug("No setup in URL, loading last setup.");
            url = localStorage.getItem("last_url");

            try {
                history.replaceState(null, '', "?" + url);
            }
            catch (err) {
                console.log(err);
            }
        }
    } else {
        url = url.slice(1);
    }
    return url;
}

function equip_url_apply(url) {
    if (url != "") {
        url = decodeURI(url.replace(/%24/g, "$"));
        var url_split = url.split("$");

        //for (var i = 0; i < url_split.length; i++) {
        //    common_debug("Loading URL[" + i + "]: " + url_split[i]);
        //}

        var url_patch = Number(url_split[0]);

        var url_character = url_split[1];

        equip_url_load_character(url_character)

        var url_equip = common_url_long(url_split[2]);

        equip_url_load_equip(base_convert(url_equip, 64, 2), url_patch);

        var url_substats = common_url_long(url_split[3]);

        equip_url_load_substats(base_convert(url_substats, 64, 2), url_patch);

        var url_effects = common_url_long(url_split[4]);

        equip_url_load_effects(base_convert(url_effects, 64, 2), url_patch);

        if (url_patch >= 5) {
            var url_enemy = common_url_long(url_split[5]);
            equip_url_load_enemy(base_convert(url_enemy, 64, 2));
        }

        equip_damage_create_reaction_key();

        if (url_patch >= 9 ) {
            var url_key = common_url_long(url_split[6]);
            
            equip_url_load_key(base_convert(url_key, 64, 2), url_patch);
        }

        recalculate = false;
        equip_apply_character();
        equip_apply_equip();
        equip_apply_effects();
        equip_apply_enemy();

        equip_display_character_stats();
        recalculate = true;


        return true;
    } else {
        return false;
    }
}

function equip_url_load_character(convert_character) {

    var character_split = convert_character.split("&");

    equip_current_character.id = common_lookup_property(character_list, "id", base_convert(character_split[0], 64, 10));

    for (var i = 0; i < character_split.length; i++) {
        var value_split = character_split[i].split("!")
        equip_current_party.character[i].id = common_lookup_property(character_list, "id", base_convert(value_split[0], 64, 10));

        if (value_split.length == 2) {
            equip_current_party.character_stats[i].value = parseInt(base_convert(value_split[1], 64, 10));
        }
    }

    equip_damage_create_key();
}

function equip_url_load_enemy(convert_enemy) {
    var a = 0;
    var b = 7;

    equip_current_enemy.level = base_convert(convert_enemy.slice(a, b), 2, 10);

    a = b; b += 11;

    equip_current_enemy.id = base_convert(convert_enemy.slice(a, b), 2, 10);
}


function equip_url_load_equip(convert_equip, url_patch) {
    var a = 0;
    var b = 4;

    if (url_patch < 4) {
        equip_current_character.level = genshin_legacy_level_from(base_convert(convert_equip.slice(a, b), 2, 10));
    } else {
        equip_current_character.level = base_convert(convert_equip.slice(a, b), 2, 10);
    }

    if (url_patch >= 2) {
        a = b; b += 3;
        equip_current_character.const = base_convert(convert_equip.slice(a, b), 2, 10);
    }

    if (url_patch >= 3) {
        for (var i = 0; i < skill_type_list.length; i++) {
            a = b; b += 4;
            equip_current_character.skill_level[skill_type_list[i]] = base_convert(convert_equip.slice(a, b), 2, 10);
        }
    }

    a = b; b += 8;
    equip_current_weapon.id = base_convert(convert_equip.slice(a, b), 2, 10);
    a = b; b += 4;
    if (url_patch < 4) {
        equip_current_weapon.level = genshin_legacy_level_from(base_convert(convert_equip.slice(a, b), 2, 10));
    } else {
        equip_current_weapon.level = base_convert(convert_equip.slice(a, b), 2, 10);
    }
    a = b; b += 3;
    equip_current_weapon.refine = base_convert(convert_equip.slice(a, b), 2, 10);



    for (var i = 0; i < equip_list_artifacts_name.length; i++) {

        a = b; b += 6;
        equip_current_artifact[equip_list_artifacts_name[i]].id = base_convert(convert_equip.slice(a, b), 2, 10);
        a = b; b += 3;
        equip_current_artifact[equip_list_artifacts_name[i]].star = base_convert(convert_equip.slice(a, b), 2, 10);
        a = b; b += 5;
        equip_current_artifact[equip_list_artifacts_name[i]].level = base_convert(convert_equip.slice(a, b), 2, 10);
        a = b; b += 4;
        equip_current_artifact[equip_list_artifacts_name[i]].main = equip_list_artifacts_stats[equip_list_artifacts_name[i]][base_convert(convert_equip.slice(a, b), 2, 10)];

        for (var ii = 0; ii < 4; ii++) {
            a = b; b += 4;
            equip_current_artifact[equip_list_artifacts_name[i]]["sub_" + ii] = equip_list_artifacts_substats[base_convert(convert_equip.slice(a, b), 2, 10)].id;
        }
    }

    if (url_patch >= 6) {
        if (url_patch == 8) {

            a = b; b += 6;
            var length = base_convert(convert_equip.slice(a, b), 2, 10);

            for (var i = 0; i < length; i++) {
                if (convert_equip[b + i] == 1) {
                    equip_damage.key[i] = true;
                }
            }
        } else {
            a = b; b += 3;
            var skill = base_convert(convert_equip.slice(a, b), 2, 10);
            a = b; b += 5;
            var row = base_convert(convert_equip.slice(a, b), 2, 10);

            equip_damage.key[equip_damage_get_key_from_coordinates(skill, row)] = true;
        }
    }

    
}

function equip_url_load_key(convert_key, url_patch) {
    var multikey_bitsize = 7;
    var a = 0;
    var b = 6;
    var length = base_convert(convert_key.slice(a, b), 2, 10);

    if (url_patch < 10) {
        var multi = false;
        var react = false;
    } else {
        a = b;
        b += 1;
        var multi = convert_key[a];
        if (url_patch < 11) {
            multikey_bitsize = 4;
        }
        if (url_patch < 12) {
            var react = false;
        } else {
            a = b;
            b += 1;
            var react = convert_key[a];
        }
    }

    if (multi == 1) {
        for (var i = 0; i < length; i++) {
            a = b;
            b += 1;
            if (convert_key[a] == 0) {
                equip_damage.key[i] = 0;
            } else {
                a = b;
                b += multikey_bitsize;
                equip_damage.key[i] = base_convert(convert_key.slice(a, b), 2, 10);
            }
            if (react == 1) {
                a = b;
                b += 2;
                equip_damage.reaction[i] = base_convert(convert_key.slice(a, b), 2, 10);
            } 
        }
    } else {
        for (var i = 0; i < length; i++) {
            a = b;
            b += 1;
            if (convert_key[a] == 1) {
                equip_damage.key[i] = 1;
            } else {
                equip_damage.key[i] = 0;
            }
            if (react == 1) {              
                a = b;
                b += 2;
                equip_damage.reaction[i] = base_convert(convert_key.slice(a, b), 2, 10);
            }
        }
    }

    
}

function equip_url_load_substats(convert_substats, url_patch) {
    var a = 0;
    var b = 0;
    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        for (var ii = 0; ii < 4; ii++) {

            var stat = equip_list_stats[common_lookup_parameter(equip_list_stats, "id", equip_current_artifact[equip_list_artifacts_name[i]]["sub_" + ii])];
            a = b;
            if (url_patch >= 7) {
                b += stat.bitsize;
            } else {
                b += 10;
            }

            if (stat.type == "percent") {
                equip_current_artifact[equip_list_artifacts_name[i]]["sub_val_" + ii] = base_convert(convert_substats.slice(a, b), 2, 10) / 10;
            } else if (stat.type == "flat") {
                equip_current_artifact[equip_list_artifacts_name[i]]["sub_val_" + ii] = base_convert(convert_substats.slice(a, b), 2, 10);
            }
        }
    }
}

function equip_url_load_effects(convert_effects, url_patch) {

    if (url_patch >= 13) {
        var sel = 10;
    } else {
        var sel = 9;
        while (convert_effects.length % 15 > 0) {
            convert_effects = convert_effects.slice(1);
        }
    }


    var a = 0;
    var b = 0;

    equip_effects_delete_all();

    for (var i = 0; i < Math.floor(convert_effects.length / (sel + 6)); i++) {

        equip_current_effect.active.push({});

        a = b;
        b = a + sel;

        equip_current_effect.active[i].select = base_convert(convert_effects.slice(a, b), 2, 10);

        a = b;
        b = a + 5;

        equip_current_effect.active[i].option = base_convert(convert_effects.slice(a, b), 2, 10);


        a = b;
        b = a + 1;

        equip_current_effect.active[i].auto = base_convert(convert_effects.slice(a, b), 2, 10);

    }



}