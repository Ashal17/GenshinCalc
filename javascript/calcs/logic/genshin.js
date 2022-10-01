function genshin_create_character_list_id() {
    character_list_id = [];
    party_character_list_id = [];
    for (var key in character_list) {
        if (character_list[key].id >= 0) {
            character_list_id.push(key);
            party_character_list_id.push(key);
        }       
    }
    character_list_id.sort();
    party_character_list_id.sort();
    party_character_list_id.unshift("none");
}

function genshin_setup_characters(parent_id) {
    var parent = document.getElementById(parent_id);

    genshin_create_character_list_id()

    for (var i = 0; i < character_list_id.length; i++) {
        var character = character_list[character_list_id[i]];
        var label = common_create_obj("label", "label_icon character_icon " + character.vision, false, "character_icon_" + character_list_id[i])
        var input = common_create_obj("input")
        input.value = character_list_id[i];
        input.type = "radio";
        input.name = "character_select";
        if (i == 0) {
            input.checked = "checked";
        }
        label.appendChild(input);
        var div = common_create_obj("div", "label_img")
        label.appendChild(div);
        var img = common_create_obj("img")
        img.src = "images/icons/character/" + character_list_id[i] + "/char.png";

        if (character.short_name) {
            var char_name = character.short_name;
        } else {
            var char_name = character.name;
        }
        

        var label_name = common_create_obj("div", "item_label", char_name);
        label.appendChild(label_name); 

        if (character.unreleased) {
            var label_beta = common_create_obj("div", "character_ribbon ribbon_left_top", "Beta");
            label.appendChild(label_beta); 
        }

        div.appendChild(img);

        parent.appendChild(label)
    }

}

function genshin_filter_characters() {
    var filter_list_element = [];
    var filter_list_weapon = [];
    var character_found = 0;

    for (var i = 0; i < character_visions.length; i++) {
        if (document.getElementById("character_filter_" + character_visions[i]).checked) {
            filter_list_element.push(character_visions[i]);
        }
    }

    for (var i = 0; i < equip_list_weapon_type.length; i++) {
        if (document.getElementById("character_filter_" + equip_list_weapon_type[i]).checked) {
            filter_list_weapon.push(equip_list_weapon_type[i]);
        }
    }

    for (var i = 0; i < character_list_id.length; i++) {
        if (filter_list_element.length > 0 || filter_list_weapon.length > 0) {
            if (genshin_filter_check_character(character_list_id[i], filter_list_element, filter_list_weapon)) {
                document.getElementById("character_icon_" + character_list_id[i]).style.display = "flex";
                character_found++;
            } else {
                document.getElementById("character_icon_" + character_list_id[i]).style.display = "none";
            }
        } else {
            document.getElementById("character_icon_" + character_list_id[i]).style.display = "flex";
            character_found++;
        }

    }

    if (character_found == 0) {
        document.getElementById("equip_character_select").style.display = "none";
    } else {
        document.getElementById("equip_character_select").style.display = "flex";
    }

}

function genshin_filter_check_character(char_id, filter_element, filter_weapon) {

    if (filter_element.length > 0) {
        var element_result = false;
        for (var i = 0; i < filter_element.length; i++) {
            if (filter_element[i] == character_list[char_id].vision) {
                element_result = true;
            }
        }
    } else {
        var element_result = true;
    }

    if (filter_weapon.length > 0) {
        var weapon_result = false;
        for (var i = 0; i < filter_weapon.length; i++) {
            if (filter_weapon[i] == character_list[char_id].weapon) {
                weapon_result = true;
            }
        }
    } else {
        var weapon_result = true;
    }

    return (element_result && weapon_result);

}

function genshin_setup_enemies(parent_id) {
    var parent = document.getElementById(parent_id);

    for (var i = 0; i < enemy_list.length; i++) {
        var enemy = enemy_list[i];
        if (enemy.vision) {
            var label = common_create_obj("label", "label_icon character_icon " + enemy.vision);
        } else {
            var label = common_create_obj("label", "label_icon character_icon")
        }
        var input = common_create_obj("input")
        input.value = enemy_list[i].id;
        input.type = "radio";
        input.name = "enemy_select";
        if (i == 0) {
            input.checked = "checked";
        }
        label.appendChild(input);
        var div = common_create_obj("div", "label_img")
        label.appendChild(div);
        var img = common_create_obj("img")
        img.src = "images/icons/enemy/" + enemy_list[i].icon + ".png";
        div.appendChild(img);

        parent.appendChild(label)
    }

}

function genshin_setup_weapon_type(parent_id) {
    var parent = document.getElementById(parent_id);

    for (var i = 0; i < equip_list_weapon_type.length; i++) {
        var label = common_create_obj("label", "weapon_type_icon label_icon")
        var input = common_create_obj("input")
        input.value = equip_list_weapon_type[i];
        input.type = "radio";
        input.name = "weapon_type_select";
        if (i == 0) {
            input.checked = "checked";
        }
        label.appendChild(input);
        var div = common_create_obj("div", "label_img");
        label.appendChild(div);
        var img = common_create_obj("img");
        img.src = "images/icons/weapon/" + equip_list_weapon_type[i] + ".png";
        div.appendChild(img);
        var p = common_create_obj("p");
        p.innerHTML = equip_list_weapon_type[i].charAt(0).toUpperCase() + equip_list_weapon_type[i].slice(1);
        div.appendChild(p);

        parent.appendChild(label)


    }
}

function genshin_setup_weapon(parent_id) {
    var parent = document.getElementById(parent_id);
    common_clear_children(parent, 0);
    var weapon_type = document.querySelector('input[name="weapon_type_select"]:checked').value;

    var selected = true;

    for (var i = 0; i < equip_list_weapons[weapon_type].length; i++) {
        if (equip_list_weapons[weapon_type][i].icon) {

            var label = common_create_obj("label", "weapon_icon label_icon")
            var input = common_create_obj("input")
            input.value = i;
            input.type = "radio";
            input.name = "weapon_select";
            if (selected) {
                input.checked = "checked";
                selected = false;
            }
            label.appendChild(input);
            var div = common_create_obj("div", "label_img");
            label.appendChild(div);
            div.appendChild(genshin_icon_create_parameters("images/icons/weapon/" + weapon_type + "/" + equip_list_weapons[weapon_type][i].icon + ".png", equip_list_weapons[weapon_type][i].rarity));
            var p = common_create_obj("p");



            if (equip_list_weapons[weapon_type][i].name.length > 25) {
                p.style["font-size"] = "80%";
            }
            p.innerHTML = equip_list_weapons[weapon_type][i].name;
            div.appendChild(p);

            parent.appendChild(label)
        }
    }
}

function genshin_icon_create(item) {

    var rarity = item.rarity;
    var iconsrc = "images/icons/" + item.icon;

    return genshin_icon_create_parameters(iconsrc, rarity);
}

function genshin_icon_create_parameters(iconsrc, rarity) {

    if (rarity) {
        var icon_div = common_create_obj("div", "item_img_container item_stars_" + rarity);
    } else {
        var icon_div = common_create_obj("div", "item_img_container item_stars_0");
    }

    var icon = common_create_obj("img", "item_img");
    icon.src = iconsrc;
    icon_div.appendChild(icon);
    return icon_div
}

function genshin_legacy_level_from(lvl) {
    if (lvl == 0) {
        return 0;
    } else {
        return lvl * 2 - 1;
    }
    
}

function genshin_legacy_level_to(lvl) {
    return Math.round(lvl / 2);
}

function genshin_apply_button(apply_obj) {
    var effects_btn = common_create_obj("div", "equip_button");
    effects_btn.innerHTML = "Apply";

    if (Array.isArray(apply_obj.id)) {
        var auto = [];
        for (var i = 0; i < apply_obj.id.length; i++) {
            auto.push(equip_effects_check_auto(apply_obj.id[i]));
        }
    } else {
        var auto = equip_effects_check_auto(apply_obj.id);
    }

    
    var start_id = apply_obj.id;
    var option_id = apply_obj.option;
    effects_btn.onclick = function () { equip_effects_new_check(auto, start_id, option_id); };

    return effects_btn;
}