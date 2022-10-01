function equip_setup_setup() {
    common_load_local_to_checkbox("equip_setup_filter");
    common_load_local_to_checkbox("equip_setup_pin");

    if (localStorage.getItem("equip_setup_target") == null || isNaN(localStorage.getItem("equip_setup_target")) || localStorage.getItem("equip_setup_target") < -1) {
        localStorage.setItem("equip_setup_target", -1);
    }
    if (localStorage.getItem("equip_setup_count") == null || isNaN(localStorage.getItem("equip_setup_count")) || localStorage.getItem("equip_setup_count") < 0) {
        localStorage.setItem("equip_setup_count", 0);
    } else if (localStorage.getItem("equip_setup_count") > 0) {
        equip_setup_refresh(true);
    }

    equip_setup_pin_display();
}

function equip_setup_filter_change() {
    common_set_checkbox_to_local("equip_setup_filter")
    equip_setup_refresh();
    equip_setup_current_refresh();
}

function equip_setup_pin_change() {
    common_set_checkbox_to_local("equip_setup_pin")
    equip_setup_pin_display();
}

function equip_setup_pin_display() {
    if (localStorage.getItem("equip_setup_pin") && localStorage.getItem("equip_setup_pin") != "false") {
        document.getElementById("equip_setup_pinned").style.display = "flex";
    } else {
        document.getElementById("equip_setup_pinned").style.display = "none";
    }
}


function equip_setup_filter_return() {

    var count = localStorage.getItem("equip_setup_count");
    var character_id = equip_current_character.id;
    var result = [];
    for (var i = 0; i < count; i++) {
            if (localStorage.getItem("equip_setup_character_" + i) == character_id) {
            result.push(i);
        }
    }

    return result;
}

function equip_setup_refresh(recalculate) {

    common_clear_children(document.getElementById("equip_setups_table"), 2);

    var target = localStorage.getItem("equip_setup_target");
    var count = localStorage.getItem("equip_setup_count");

    if (recalculate && target >= 0) {
        equip_setup_calculate_comparison_all(count);
        var key = equip_damage_get_key();
        equip_setup_calculate_comparison_current(target, key);
        document.getElementById("equip_setups_comparison").className = "equip_setups_comparison";
        document.getElementById("equip_setups_pinned_comparison").className = "equip_setups_comparison";
    } else if (target < 0) {
        document.getElementById("equip_setups_comparison").className = "equip_setups_comparison_hidden";
        document.getElementById("equip_setup_comparison_current").className = "equip_setups_comparison_hidden";

        document.getElementById("equip_setup_comparison_pinned").className = "equip_setups_comparison_hidden";
        document.getElementById("equip_setups_pinned_comparison").className = "equip_setups_comparison_hidden";
    }

    if (localStorage.getItem("equip_setup_filter") && localStorage.getItem("equip_setup_filter") != "false") {
        var filter = equip_setup_filter_return();
        if (filter.includes(parseInt(target)) == false) {
            target = -1;
        }
        for (var i = 0; i < filter.length; i++) {
            equip_setup_new_display(filter[i], target, filter);
        }
    } else {
        for (var i = 0; i < count; i++) {
            equip_setup_new_display(i, target, false);
        }
    }
    equip_account_setups_refresh_needed = true;
    equip_account_current_refresh_setups();
}

function equip_setup_new() {
    var count = parseInt(localStorage.getItem("equip_setup_count"));
    if (count <= 100) {
        var setup_name = document.getElementById("setup_prompt_input").value;
        if (setup_name == "") {
            setup_name = "Setup " + (count + 1);
        }

        localStorage.setItem("equip_setup_name_" + count, setup_name);
        equip_setup_set(count);
        //var target = localStorage.getItem("equip_setup_target");
        //if (localStorage.getItem("equip_setup_filter")) {
        //    var filter = equip_setup_filter_return();
        //    equip_setup_new_display(count, target, filter);
        //} else {
        //    equip_setup_new_display(count, target, false);
        //}
        localStorage.setItem("equip_setup_count", count + 1);
        equip_setup_refresh()

    } else {
        alert("Can't have more than 100 setups!")
    }
}

function equip_setup_new_display(id, target, filter) {
    var parent = document.getElementById("equip_setups_table");

    var row = common_create_obj("div", "equip_setup_row", false, "equip_setup_row_" + id);

    if (filter) {
        var min_id = filter[0];
        var move_up = filter[filter.indexOf(id)-1] - id;
        var max_id = filter[filter.length - 1];
        var move_down = filter[filter.indexOf(id) + 1] - id;
    } else {
        var min_id = 0;
        var move_up = -1;
        var max_id = localStorage.getItem("equip_setup_count") - 1;
        var move_down = 1;
    }
    
    if (id > min_id) {
        var up_btn = common_create_img_btn("", "chevron-up", function () { equip_setup_move(id, move_up); }, "Move Up")
        
    } else {
        var up_btn = common_create_obj("p", "img_icon_filler filler_1");
    }
    row.appendChild(up_btn);
    if (id < max_id) {
        var down_btn = common_create_img_btn("", "chevron-down", function () { equip_setup_move(id, move_down); }, "Move Down")       
    } else {
        var down_btn = common_create_obj("p", "img_icon_filler filler_1");
    }
    row.appendChild(down_btn);

    var rename_btn = common_create_img_btn("", "square-edit-outline", function () { common_construct_prompt_input(function () { equip_setup_rename(id); }, "Enter new name", rename_btn, localStorage.getItem("equip_setup_name_" + id)); }, "Rename")
    row.appendChild(rename_btn);


    row.appendChild(common_create_obj("p", "equip_setups_name", localStorage.getItem("equip_setup_name_" + id), "equip_setup_name_" + id));

    var title = (common_create_obj("p", "", character_list[localStorage.getItem("equip_setup_character_" + id)].name, "equip_setup_character_" + id));
    var title_line = common_create_obj("div", "resonance " + character_list[localStorage.getItem("equip_setup_character_" + id)].vision);
    title_line.appendChild(title);
    row.appendChild(title_line);

    row.appendChild(common_create_obj("p", "equip_setups_skill", common_number_spaces(Number(localStorage.getItem("equip_setup_skill_" + id)).toFixed(1)), "equip_setup_skill_" + id));

    if (target >= 0) {
        var comparison = localStorage.getItem("equip_setup_comparison_" + id);
        if (comparison == "Base") {
            var comparison_text = comparison;
            var comparison_class = "neutral";
        } else {
            var comparison_text = Number(comparison).toFixed(2) + " %";
            if (comparison > 0) {
                comparison_text = "+" + comparison_text;
                var comparison_class = "positive";
            } else if (comparison == 0) {
                var comparison_class = "neutral";
            } else {
                var comparison_class = "negative";
            }
        }

        var comparison_obj = common_create_obj("div", "equip_setups_comparison");
        comparison_obj.appendChild(common_create_obj("p", comparison_class, comparison_text, "equip_setup_comparison_" + id))

        var warning = localStorage.getItem("equip_setup_warning_" + id);
        if (warning && warning != "00000") {
            
            var warning_list = [];
            var skip_list = [];
            var warning_level = 0;
            for (var i = 0; i < warning.length; i++) {
                if (warning[i] == "1") {
                    warning_list.push(i);
                    if (equip_setup_warning_conf[i].overwrite) {
                        for (var ii = 0; ii < equip_setup_warning_conf[i].overwrite_id.length; ii++) {
                            skip_list.push(equip_setup_warning_conf[i].overwrite_id[ii])
                        }
                    }
                }
            }

            if (warning_list.length > 0) {
                var warning_tooltip_obj = common_create_obj("div", "img_button_hover equip_setups_warning_tooltip");
                for (var i = 0; i < warning_list.length; i++) {
                    if (skip_list.includes(warning_list[i]) == false) {
                        warning_level = Math.max(warning_level, equip_setup_warning_conf[warning_list[i]].level);
                        warning_tooltip_obj.appendChild(common_create_obj("p", "equip_setup_warning_level_" + equip_setup_warning_conf[warning_list[i]].level, equip_setup_warning_conf[warning_list[i]].tooltip));
                    }
                }
                var warning_obj = common_create_obj("div", "img_button");
                warning_obj.appendChild(common_create_obj("div", "img_icon svg svg-alert-outline equip_setup_warning " + "equip_setup_warning_level_" + warning_level));
                warning_obj.appendChild(warning_tooltip_obj);
                comparison_obj.appendChild(warning_obj);
            }

            
        }

        row.appendChild(comparison_obj);

    }

    if (id == target) {
        var target_btn = common_create_img_btn("", "target-variant img_icon_active", function () { equip_setup_set_target(id) }, "Set Base Value")
    } else {
        var target_btn = common_create_img_btn("", "target-variant", function () { equip_setup_set_target(id) }, "Set Base Value")
    }
    row.appendChild(target_btn);
    var save_btn = common_create_img_btn("", "download", function () { common_construct_prompt(function () { equip_setup_save(id); }, "Do you want to overwrite this setup?", save_btn) }, "Save")
    row.appendChild(save_btn);
    var load_btn = common_create_img_btn("", "upload", function () { common_construct_prompt(function () { equip_setup_load(id); }, "Do you want to load this setup?", load_btn) }, "Load");
    row.appendChild(load_btn);
    var delete_btn = common_create_img_btn("", "delete-forever", function () { common_construct_prompt(function () { equip_setup_delete(id); }, "Do you want to delete this setup?", delete_btn) }, "Delete");
    row.appendChild(delete_btn);

    parent.appendChild(row);
}

function equip_setup_rename(id) {
    var setup_name = document.getElementById("setup_prompt_input").value;
    if (setup_name == "") {
        setup_name = "Setup " + (id + 1);
    }
    localStorage.setItem("equip_setup_name_" + id, setup_name);
    document.getElementById("equip_setup_name_" + id).innerHTML = setup_name;
}

function equip_setup_save(id) {
    equip_setup_set(id)
    equip_setup_refresh();
}

function equip_setup_set(id) {
    common_copy_localStorage("last_url", "equip_setup_url_" + id);
    localStorage.setItem("equip_setup_character_" + id, equip_current_character.id);
    localStorage.setItem("equip_setup_skill_" + id, equip_damage_get_key());
    equip_setup_calculate_comparison(id);
}

function equip_setup_current_refresh() {
    var character = character_list[equip_current_character.id];
    document.getElementById("equip_setup_character_current").innerHTML = character.name;
    document.getElementById("equip_setup_character_pinned").innerHTML = character.name;
    document.getElementById("equip_setup_resonance_current").className = "resonance " + character.vision;
    document.getElementById("equip_setup_resonance_pinned").className = "resonance " + character.vision;
    var key = equip_damage_get_key();
    document.getElementById("equip_setup_skill_current").innerHTML = common_number_spaces(Number(key).toFixed(1));
    document.getElementById("equip_setup_skill_pinned").innerHTML = common_number_spaces(Number(key).toFixed(1));
    var target = localStorage.getItem("equip_setup_target")
    if ((target >= 0 && (localStorage.getItem("equip_setup_filter") == "false") || equip_current_character.id == localStorage.getItem("equip_setup_character_" + target))) {
        equip_setup_calculate_comparison_current(target, key);
    } else {
        document.getElementById("equip_setup_comparison_current").className = "equip_setups_comparison_hidden";
        document.getElementById("equip_setups_comparison").className = "equip_setups_comparison_hidden";

        document.getElementById("equip_setup_comparison_pinned").className = "equip_setups_comparison_hidden";
        document.getElementById("equip_setups_pinned_comparison").className = "equip_setups_comparison_hidden";
    }
}

function equip_setup_load(id) {
    var url = localStorage.getItem("equip_setup_url_" + id);
    if (equip_url_apply(url)) {
        equip_passive_display_all();
        equip_stats_display_all();
        common_debug("Loading setup successful.");
        common_url_generate("", url, false)
    }

}

function equip_setup_delete(id) {

    var count = parseInt(localStorage.getItem("equip_setup_count"));

    localStorage.setItem("equip_setup_count", (count - 1));

    if (count != (id + 1)) {
        for (var i = id; i < (count - 1); i++) {
            equip_setup_copy(i + 1, i);
        }
    }
    equip_setup_clear(count - 1);
    var target = localStorage.getItem("equip_setup_target");
    if (id == target) {
        localStorage.setItem("equip_setup_target", -1);
    } else if (id < target) {
        localStorage.setItem("equip_setup_target", (target-1));
    }
    equip_setup_refresh();
}

function equip_setup_move(id, dir) {
    var id1 = id;
    var id2 = parseInt(id) + dir;

    if (id1 != id2 && id1 >= 0 && id2 >= 0) {
        equip_setup_swap(id1, id2);
    }
    equip_setup_refresh();
}

function equip_setup_clear(id) {
    for (var i = 0; i < equip_setup_local_storage.length; i++) {
        localStorage.removeItem("equip_setup_" + equip_setup_local_storage[i] + "_" + id)
    }
}

function equip_setup_copy(inputid, outputid) {
    for (var i = 0; i < equip_setup_local_storage.length; i++) {
        common_copy_localStorage("equip_setup_" + equip_setup_local_storage[i] + "_" + inputid, "equip_setup_" + equip_setup_local_storage[i] + "_" + outputid)
    }
}

function equip_setup_swap(id1, id2) {

    for (var i = 0; i < equip_setup_local_storage.length; i++) {
        common_swap_localStorage("equip_setup_" + equip_setup_local_storage[i] + "_" + id1, "equip_setup_" + equip_setup_local_storage[i] + "_" + id2)
    }

    var target = localStorage.getItem("equip_setup_target");
    if (id1 == target) {
        localStorage.setItem("equip_setup_target", id2);
    } else if (id2 == target) {
        localStorage.setItem("equip_setup_target", id1);
    }
}

function equip_setup_set_target(id) {
    var current_target = localStorage.getItem("equip_setup_target");
    if (id == current_target) {
        localStorage.setItem("equip_setup_target", -1);
    } else {
        localStorage.setItem("equip_setup_target", id);
    }
    equip_setup_refresh(true);
}

function equip_setup_calculate_comparison_all(count) {
    var target = localStorage.getItem("equip_setup_target");
    if (target >= 0) {
        for (var i = 0; i < count; i++) {
            equip_setup_calculate_comparison_single(i, target);
        }
        
    }
}

function equip_setup_calculate_comparison_single(i, target) {
    var target_key = Number(localStorage.getItem("equip_setup_skill_" + target));
    var target_character = localStorage.getItem("equip_setup_character_" + target);
    var target_url = localStorage.getItem("equip_setup_url_" + target);
    equip_setup_calculate_comparison_key(i, target, target_key);
    equip_setup_calculate_comparison_warning(i, target, target_character, target_url);
}

function equip_setup_calculate_comparison_key(i, target, target_key) {
    if (i == target) {
        var comparison = "Base"
    } else {
        var key = Number(localStorage.getItem("equip_setup_skill_" + i));
        var comparison = (key / target_key - 1) * 100;
    }
    localStorage.setItem("equip_setup_comparison_" + i, comparison);
}

function equip_setup_calculate_comparison_warning(i, target, target_character, target_url) {
    var result = "";
    if (i == target) {
        result = "00000";
    } else {
        //character
        result += equip_setup_calculate_comparison_warning_single(localStorage.getItem("equip_setup_character_" + i), target_character)
        var url = localStorage.getItem("equip_setup_url_" + i);
        var url_split = url.split("$");
        var target_url_split = target_url.split("$");
        //party
        result += equip_setup_calculate_comparison_warning_single(url_split[1], target_url_split[1]);
        //enemy
        result += equip_setup_calculate_comparison_warning_single(url_split[5], target_url_split[5]);
        //effects
        result += equip_setup_calculate_comparison_warning_single(url_split[4], target_url_split[4]);
        //key
        if (url_split[0] >= 9 && target_url_split[0] >= 9) {
            result += equip_setup_calculate_comparison_warning_single(url_split[6], target_url_split[6]);
        } else {
            result += "9";
        }
    }
    localStorage.setItem("equip_setup_warning_" + i, result);
}

function equip_setup_calculate_comparison_warning_single(input, target) {
    if (input == target) {
        return "0";
    } else if (input && target) {
        return "1";
    } else {
        return "9";
    }
}

function equip_setup_calculate_comparison(i) {
    var target = localStorage.getItem("equip_setup_target");
    if (target >= 0) {       
        equip_setup_calculate_comparison_single(i, target);
    }
}

function equip_setup_calculate_comparison_current(target, key) {
    equip_setup_calculate_comparison_current_key(target, key);
}

function equip_setup_calculate_comparison_current_key(target, key) {
    var target_key = Number(localStorage.getItem("equip_setup_skill_" + target));
    var comparison = (key / target_key - 1) * 100;
    var comparison_text = Number(comparison).toFixed(2) + " %";
    if (comparison > 0) {
        comparison_text = "+" + comparison_text;
        var comparison_class = "positive";
    } else if (comparison == 0) {
        var comparison_class = "neutral";
    } else {
        var comparison_class = "negative";
    }
    document.getElementById("equip_setups_comparison").className = "equip_setups_comparison";
    document.getElementById("equip_setup_comparison_current").innerHTML = comparison_text;
    document.getElementById("equip_setup_comparison_current").className = "equip_setups_comparison " + comparison_class;

    document.getElementById("equip_setups_pinned_comparison").className = "equip_setups_comparison";
    document.getElementById("equip_setup_comparison_pinned").innerHTML = comparison_text;
    document.getElementById("equip_setup_comparison_pinned").className = "equip_setups_comparison " + comparison_class;
}

equip_setup_warning_conf = [
    {
        "tooltip": "Character does not match.",
        "overwrite":true,
        "overwrite_id": [1, 3, 4],
        "level": 3
    },
    {
        "tooltip": "Party does not match.",
        "overwrite": false,
        "level": 1
    },
    {
        "tooltip": "Enemy does not match.",
        "overwrite": false,
        "level": 2
    },
    {
        "tooltip": "Effects do not match.",
        "overwrite": false,
        "level": 1
    },
    {
        "tooltip": "Skills do not match.",
        "overwrite": false,
        "level": 2
    }
]

equip_setup_local_storage = [
    "name",
    "character",
    "skill",
    "url",
    "comparison",
    "warning"
]
