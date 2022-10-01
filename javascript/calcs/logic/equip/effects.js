function equip_effects_delete_all() {

    for (var i = 0; i < equip_current_effect.active.length; i++) {
        if (document.getElementById("equip_effects_table_" + i)) {
            document.getElementById("equip_effects_table_" + i).remove();
        }        
    }
    equip_current_effect.active = [];

}

function equip_effects_new_check(auto, start_id, option_id) {

    if (Array.isArray(start_id)) {

        for (var i = 0; i < start_id.length; i++) {

            equip_effects_new_check_single(auto[i], start_id[i], option_id[i])
        }

    } else {
        equip_effects_new_check_single(auto, start_id, option_id)
    }

}

function equip_effects_new_check_single(auto, start_id, option_id) {
    if (equip_effect_check_active(start_id)) {
        common_message("You can't have the same Effect more than once!", "automatic_red");
    } else {
        if (auto == 0 || equip_effect_check_requirement_single(start_id)) {
            equip_effects_new(auto, start_id, option_id);
        } else {
            common_message("You don't meet the requirements to activate this effect!", "automatic_red");
        }

    }
}

function equip_effects_check_auto(effect_id) {
    if (equip_list_effects[common_lookup_parameter(equip_list_effects, "id", effect_id)].requirement == false) {
        return false;
    } else {
        return true;
    }
}


function equip_effects_new(auto, start_id, option_id) {
    var id = equip_current_effect.active.length;
    equip_current_effect.active.push({});

    if (auto) {

        equip_current_effect.active[id].auto = 1;

    } else {
        equip_current_effect.active[id].auto = 0;
    }

    if (start_id) {
        equip_current_effect.active[id].select = start_id;
        common_message(equip_list_effects[common_lookup_parameter(equip_list_effects, "id", start_id)].name + " applied.", "automatic_green");
        if (option_id) {
            equip_current_effect.active[id].option = option_id;
        } else {
            equip_current_effect.active[id].option = 0;
        }
        equip_url_save();
    } else {
        equip_current_effect.active[id].select = 0;
        equip_current_effect.active[id].option = 0;
    }

    equip_effects_new_display(id);

}

function equip_effects_new_display(id) {

    var effects_table = document.getElementById("equip_effects_table");

    var div = common_create_obj("div", "equip_effect");
    div.id = "equip_effects_table_" + id;
    effects_table.appendChild(div);


    if (equip_current_effect.active[id].auto) {

        var effect_name = common_create_obj("div", "equip_effect_name");
        div.appendChild(effect_name);
        var effect_name_p = common_create_obj("p");
        effect_name.appendChild(effect_name_p);
        var effect_id = common_lookup_parameter(equip_list_effects, "id", equip_current_effect.active[id].select);
        effect_name_p.innerHTML = equip_list_effects[effect_id].name;

    } else {
        var effect_select = common_create_obj("select", "equip_effect_select search");
        for (var i = 0; i < equip_list_effects.length; i++) {
            if (equip_list_effects[i].requirement == false || equip_list_effects[i].manual == true) {
                var opt = document.createElement("option");
                opt.innerHTML = equip_list_effects[i].name;
                opt.value = equip_list_effects[i].id;
                effect_select.appendChild(opt);
            }
        }


        effect_select.id = "equip_effects_select_" + id;

        effect_select.onchange = function () { equip_effects_change_select(id); };

        div.appendChild(effect_select);

        if (equip_current_effect.active[id].select) {
            var effect_id = common_lookup_parameter(equip_list_effects, "id", equip_current_effect.active[id].select);
            effect_select.value = equip_current_effect.active[id].select;
        }

        $(document).ready(function () {
            $("#equip_effects_select_" + id).select2({
                minimumResultsForSearch: 1
            });
        });
    }





    var effect_select_option = common_create_obj("select", "equip_effect_option");
    effect_select_option.id = "equip_effects_select_option_" + id;
    effect_select_option.onchange = function () { equip_effect_change_option(id); };

    div.appendChild(effect_select_option);


    var column = common_create_obj("div", "column");
    column.id = "equip_effects_stats_" + id;
    div.appendChild(column);

    var del = common_create_img_btn("", "delete-forever", function () { equip_effects_delete(id); }, "Delete")
    div.appendChild(del);

    if (equip_current_effect.active[id].select) {
        var selected_option = true
    } else {
        var selected_option = false;
    }

    equip_effects_change_select_display(id, selected_option);

}

function equip_effects_change_select(id) {
    equip_current_effect.active[id].select = document.getElementById("equip_effects_select_" + id).value;
    for (var i = 0; i < equip_current_effect.active.length; i++) {
        if (i != id && equip_current_effect.active[id].select != 0 && equip_current_effect.active[i].select == equip_current_effect.active[id].select) {
            document.getElementById("equip_effects_select_" + id).selectedIndex = 0;
            $("#equip_effects_select_" + id).select2({
                minimumResultsForSearch: 1
            });
            equip_current_effect.active[id].select = 0;
            common_message("You can't have the same Effect more than once!", "automatic_red")
            break;
        }
    }
    equip_effects_change_select_display(id);
}

function equip_effects_change_select_display(id, selected_option) {

    var effect_select_option = document.getElementById("equip_effects_select_option_" + id);


    var effect_id = common_lookup_parameter(equip_list_effects, "id", equip_current_effect.active[id].select);

    common_clear_select(effect_select_option);

    for (var i = 0; i < equip_list_effects[effect_id].options.length; i++) {
        //if (equip_list_effects[i].requirement == false) {
        var opt = document.createElement("option");
        opt.innerHTML = equip_list_effects[effect_id].options[i].name;
        opt.value = equip_list_effects[effect_id].options[i].id;
        effect_select_option.appendChild(opt);
        //}
    }

    if (selected_option) { 
        try {
            equip_effect_change_option_display(id);
            effect_select_option.value = equip_current_effect.active[id].option;
        } catch (e) {
            equip_current_effect.active[id].select = -1;
            equip_current_effect.active[id].option = -1;
            document.getElementById("equip_effects_table_" + id).remove();
        }
        
    } else {
        equip_effect_change_option(id);
    }

    $(document).ready(function () {
        $("#equip_effects_select_option_" + id).select2({
            minimumResultsForSearch: Infinity
        });
    });


}

function equip_effect_change_option(id) {
    equip_current_effect.active[id].option = document.getElementById("equip_effects_select_option_" + id).value;
    equip_effect_change_option_display(id);
}

function equip_effect_change_option_display(id) {

    var effect = equip_list_effects[common_lookup_parameter(equip_list_effects, "id", equip_current_effect.active[id].select)];
    var option = effect.options[common_lookup_parameter(effect.options, "id", equip_current_effect.active[id].option)];

    var effect_stats = document.getElementById("equip_effects_stats_" + id);
    common_clear_children(effect_stats, 0);
    if (option.stats) {
        for (var i = 0; i < option.stats.length; i++) {
            var statobj = option.stats[i];
            var statid = common_lookup_parameter(equip_list_stats, "id", statobj.stat)
            var statname = equip_list_stats[statid].name;
            var value = statobj.value;

            effect_stats.appendChild(common_create_statline(statname, equip_display_stat(value, statid)));

        }
    }

    if (option.transform) {
        if (Array.isArray(option.transform)) {
            for (var i = 0; i < option.transform.length; i++) {
                var sourceid = common_lookup_parameter(equip_list_stats, "id", option.transform[i].source);
                var sourcename = equip_list_stats[sourceid].name;
                var targetid = common_lookup_parameter(equip_list_stats, "id", option.transform[i].target);
                var targetname = equip_list_stats[targetid].name;
                var ratio = option.transform[i].ratio;
                effect_stats.appendChild(common_create_statline(sourcename + " to " + targetname, common_number_spaces(common_round_number(ratio * 100, 100)) + " %"));
            }
        } else {
            var sourceid = common_lookup_parameter(equip_list_stats, "id", option.transform.source);
            var sourcename = equip_list_stats[sourceid].name;
            var targetid = common_lookup_parameter(equip_list_stats, "id", option.transform.target);
            var targetname = equip_list_stats[targetid].name;
            var ratio = option.transform.ratio;
            effect_stats.appendChild(common_create_statline(sourcename + " to " + targetname, common_number_spaces(common_round_number(ratio * 100, 100)) + " %"));
        }
    }

    if (option.overwrite) {
        var overwriteid = option.overwrite;
        effect_stats.appendChild(common_create_statline("Physical to " + equip_list_visions[overwriteid].name))
    }

    equip_effects_apply_all();
    equip_stats_display_all();
   
}

function equip_effects_clear_artifacts(total) {
    for (var i = 0; i < equip_current_effect.active.length; i++) {
        if (equip_current_effect.active[i].auto && equip_current_effect.active[i].select > 0) {
            var effect = equip_list_effects[common_lookup_parameter(equip_list_effects, "id", equip_current_effect.active[i].select)];
            if (equip_effects_check_artifact(effect)) {
                equip_current_effect.active[i].select = -1;
                equip_current_effect.active[i].option = -1;
                if (total) {
                    document.getElementById("equip_effects_table_" + i).remove();
                }
            }
        }       
    }
}

function equip_effects_check_artifact(effect) {
    if (effect.requirement) {
        if (effect.requirement_type) {
            if (effect.requirement_type == "and") {
                for (var i = 0; i < effect.requirement.length; i++) {
                    if (effect.requirement[i].type == "artifact_set") {
                        return true;
                    }
                }
            } 
        } else if (effect.requirement.type == "artifact_set") {
            return true;
        } 
    } 
    return false;
}

function equip_effects_delete(id) {
    equip_current_effect.active[id].select = -1;
    equip_current_effect.active[id].option = -1;
    document.getElementById("equip_effects_table_" + id).remove();
    equip_effects_apply_all();
    equip_stats_display_all();
    equip_url_save();
}

function equip_effects_apply(id) {
    if (equip_current_effect.active[id].select > 0 & equip_current_effect.active[id].option > -1) {
        var effect = equip_list_effects[common_lookup_parameter(equip_list_effects, "id", equip_current_effect.active[id].select)];
        var option = effect.options[common_lookup_parameter(effect.options, "id", equip_current_effect.active[id].option)];

        if (option.stats) {
            for (var i = 0; i < option.stats.length; i++) {
                var statobj = option.stats[i];
                var statid = common_lookup_parameter(equip_list_stats, "id", statobj.stat)
                equip_current_effect.stats[statid] += statobj.value;
            }
        }
    }
}

function equip_effects_apply_all() {
    common_array_set_value(equip_current_effect.stats, 0);
    for (var i = 0; i < equip_current_effect.active.length; i++) {
        equip_effects_apply(i)
    }
}

function equip_effects_apply_transform_all(priority) {
    
    for (var i = 0; i < equip_current_effect.active.length; i++) {
        equip_effects_apply_transform(i, priority)
    }
}

function equip_effects_apply_transform(id, priority) {
    if (equip_current_effect.active[id].select > 0 & equip_current_effect.active[id].option > -1) {
        var effect = equip_list_effects[common_lookup_parameter(equip_list_effects, "id", equip_current_effect.active[id].select)];
        var option = effect.options[common_lookup_parameter(effect.options, "id", equip_current_effect.active[id].option)];

        if (option.priority == priority) {
            if (option.transform) {
                if (Array.isArray(option.transform)) {
                    for (var i = 0; i < option.transform.length; i++) {
                        equip_effects_apply_transform_single(option.transform[i]);
                    }
                } else {
                    equip_effects_apply_transform_single(option.transform);
                }

            }

            if (option.overwrite) {
                var overwriteid = option.overwrite;
                equip_damage.overwrite = overwriteid;
            }
        }        
    }
}

function equip_effects_apply_transform_single(transform) {
    var sourceid = common_lookup_parameter(equip_list_stats, "id", transform.source);
    var targetid = common_lookup_parameter(equip_list_stats, "id", transform.target);
    var ratio = transform.ratio;
    var change = equip_stats_total[sourceid] * ratio;
    if (transform.max && transform.max < change) {
        change = transform.max;
    }
    equip_stats_total[targetid] += change;
}