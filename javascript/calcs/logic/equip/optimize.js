function equip_damage_optimize_setup() {
    equip_optimize_stored_url = equip_url_get();
    equip_optimize_stored_damage = equip_damage_optimize_calculate();
    equip_optimize_artifact_damage_totals = [];
    equip_optimize_artifact_next = 0;
    equip_optimize_filter = [];

    for (var i = 1; i < 3; i++) {
        var select = document.getElementById("equip_optim_setselect_" + i);
        for (var ii = 0; ii < (equip_list_artifacts_sets.length - 4); ii++) {
            if (true) {
                var opt = document.createElement("option");
                opt.innerHTML = equip_list_artifacts_sets[ii].name;
                opt.value = equip_list_artifacts_sets[ii].id;
                select.appendChild(opt);
            }                
        }
    }
}

function equip_damage_optimize_artifacts_set_filter_add() {
   
    var set1 = parseInt(document.getElementById("equip_optim_setselect_1").value);
    var set2 = parseInt(document.getElementById("equip_optim_setselect_2").value);    

    if (set1 > 0 || set2 > 0) {
        var comb = [];
        comb.push(set1);
        comb.push(set2);
        if (common_damage_optimize_artifacts_set_filter_check_duplicate(comb)) {
            common_message("This set filter already exists!", "automatic_red")
        } else {
            equip_optimize_filter.push(comb);
            equip_damage_optimize_artifacts_set_filter_display()
        }
    } else {
        common_message("Set filter has to include at least 1 set!", "automatic_red")
    }
   
}

function common_damage_optimize_artifacts_set_filter_check_duplicate(comb) {

    for (var i = 0; i < equip_optimize_filter.length; i++) {
        for (var ii = 0; ii < equip_optimize_filter[i].length; ii++) {
            if ((equip_optimize_filter[i][0] == comb[0] && equip_optimize_filter[i][1] == comb[1]) || (equip_optimize_filter[i][0] == comb[1] && equip_optimize_filter[i][1] == comb[0])) {
                return true;
            }
        }
    }
    return false;

}

function equip_damage_optimize_artifacts_set_filter_remove(id) {
    equip_optimize_filter.splice(id, 1);
    equip_damage_optimize_artifacts_set_filter_display();
}

function equip_damage_optimize_artifacts_set_filter_display() {

    var set_list = document.getElementById("optimize_filter_set_list")

    if (equip_optimize_filter.length > 0) {
        set_list.style.display = "flex";
        common_clear_children(set_list, 0);
        for (var i = 0; i < equip_optimize_filter.length; i++) {
            var set = equip_damage_optimize_artifact_set_filter_display_single(i);
            set_list.appendChild(set);
        }        
    } else {
        set_list.style.display = "none";
    }
}

function equip_damage_optimize_artifact_set_filter_display_single(i) {
    var set = common_create_obj("div", "optimize_filter_set")
    set.appendChild(common_create_obj("p", false, equip_list_artifacts_sets[common_lookup_parameter(equip_list_artifacts_sets, "id", equip_optimize_filter[i][0])].name))
    set.appendChild(common_create_obj("p", false, equip_list_artifacts_sets[common_lookup_parameter(equip_list_artifacts_sets, "id", equip_optimize_filter[i][1])].name))
    var n = i;
    var delete_btn = common_create_img_btn("", "delete-forever", function () { equip_damage_optimize_artifacts_set_filter_remove(n); }, "Delete");
    set.appendChild(delete_btn);

    return set;
}

function equip_damage_optimize_artifacts(apply_effects) {


        equip_artifact_list_generate_labels();

        var combinations = equip_damage_optimize_artifact_combinations();

        if (combinations.length > 0) {
            common_debug("Trying " + combinations.length + " artifact combinations")
            equip_damage_optimize_store();

            equip_optimize_artifact_damage_totals = [];

            equip_effects_clear_artifacts();
            var applyid = equip_current_effect.active.length;
            equip_current_effect.active.push({});

            for (var i = 0; i < combinations.length; i++) {

                var mess = equip_damage_optimize_artifact_apply(combinations[i], apply_effects, applyid);

                var damage = equip_damage_optimize_calculate();
                //common_debug(mess + "|" + damage);
                var obj = {};
                obj.damage = damage;
                obj.combination = combinations[i];
                equip_optimize_artifact_damage_totals.push(obj);
            }

            equip_optimize_artifact_damage_totals.sort((a, b) => (a.damage < b.damage) ? 1 : -1)

            //console.log(equip_optimize_artifact_damage_totals);

            //equip_damage_optimize_artifact_apply_full(equip_optimize_artifact_damage_totals[0].combination, apply_effects, applyid)
            equip_damage_optimize_load();
            equip_damage_optimize_artifact_display(apply_effects);
        } else {
            common_message("No Combination of Artifacts satisfies any of the given filters", "automatic_red")
        }


  
    
    
}

function equip_damage_optimize_artifact_display(apply_effects) {

    //var parent = document.getElementById("equip_optim_list");
    //common_clear_children(parent, 2);
    document.getElementById("optimize_artifact_results").style.display = "flex";

    equip_damage_optimize_display_artifact_current();

    //var result_obj = common_create_obj("div", "optimize_artifact", false, "optimize_artifact");
    //parent.appendChild(result_obj);
    result_obj = document.getElementById("optimize_artifact");
    common_clear_children(result_obj, 0);

    equip_optimize_artifact_next = 0;
    //result_obj.appendChild(equip_damage_optimize_artifact_display_single(equip_optimize_artifact_next, apply_effects));

    var next = common_create_obj("div", "optimize_artifact_single", false, "optimize_next")

    var next_btn = common_create_btn(function () { equip_damage_optimize_artifact_display_next(apply_effects) }, "Show Next", "optimize_next_btn");
    next.appendChild(next_btn);
    var next_btnbatch = common_create_btn(function () { equip_damage_optimize_artifact_display_next_batch(apply_effects, 10) }, "Show Next 10", "optimize_next_btnbatch");
    next.appendChild(next_btnbatch);
    result_obj.appendChild(next);
 

    equip_damage_optimize_artifact_display_next(apply_effects);
}

function equip_damage_optimize_artifact_display_next_batch(apply_effects, n) {
    var cont = true;
    while (cont == true && n > 0) {
        cont = equip_damage_optimize_artifact_display_next(apply_effects);
        n--;
    }
}

function equip_damage_optimize_artifact_display_next(apply_effects) {
    if (equip_optimize_artifact_next < equip_optimize_artifact_damage_totals.length) {
        var parent = document.getElementById("optimize_artifact");
        parent.insertBefore(equip_damage_optimize_artifact_display_single(equip_optimize_artifact_next, apply_effects), parent.childNodes[parent.childNodes.length - 1]);
        equip_optimize_artifact_next++;
        if (equip_optimize_artifact_next >= equip_optimize_artifact_damage_totals.length) {
            var next = document.getElementById("optimize_next");
            next.style.display = "none";
            return false;
        } else {
            return true;
        }
    }
     
}

function equip_damage_optimize_artifact_display_single(n, apply_effects) {
    var row = common_create_obj("div", "optimize_artifact_single");
    //display artifact setup from equip_optimize_artifact_damage_totals(n)

    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        if (equip_optimize_artifact_damage_totals[n].combination[i] > -1) {
            var artifact = equip_artifact_list_json[equip_list_artifacts_name[i]][equip_optimize_artifact_damage_totals[n].combination[i]];
            var artifact_obj = equip_list_artifacts_sets[common_lookup_parameter(equip_list_artifacts_sets, "id", artifact.id)];
            var img_container = common_create_obj("div", "item_img_container item_stars_" + artifact.star);
            var img = common_create_obj("img", "item_img");
            img.src = "images/icons/artifact/" + equip_list_artifacts_name[i] + "/" + artifact_obj.icon + ".png";
            img_container.appendChild(img);
            if (i > 1) {
                var label = common_create_obj("div", "item_label", equip_list_stats[common_lookup_parameter(equip_list_stats, "id", artifact.main)].labelname);
                img_container.appendChild(label);
            }
            if (artifact.labelid != 0) {
                var labelid = common_create_obj("div", "item_label_id", artifact.labelid);
                img_container.appendChild(labelid);
            }           
            row.appendChild(img_container);
        } else {
            var img_container = common_create_obj("div", "item_img_container item_stars_5");
            row.appendChild(img_container);
        }
        
    }

    var dmg = common_create_obj("p", "optimize_artifact_dmg")
    dmg.innerHTML = common_number_spaces(equip_optimize_artifact_damage_totals[n].damage.toFixed(1));
    row.appendChild(dmg);

    var load_btn = common_create_img_btn("", "upload", function () { equip_damage_optimize_artifact_apply_full(equip_optimize_artifact_damage_totals[n].combination, apply_effects); }, "Load");
    row.appendChild(load_btn);

    return row;
}

function equip_damage_optimize_store() {
    equip_optimize_stored_url = equip_url_generate();
    equip_optimize_stored_damage = equip_damage_optimize_calculate();
}

function equip_damage_optimize_display_artifact_current() {
    //var row = common_create_obj("div", "optimize_artifact_single storage_artifact");

    var row = document.getElementById("optimize_display_artifact_current")
    common_clear_children(row, 0)

    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        var artifact = equip_current_artifact[equip_list_artifacts_name[i]];
        if (artifact.id > 0) {
            var artifact_obj = equip_list_artifacts_sets[common_lookup_parameter(equip_list_artifacts_sets, "id", artifact.id)];
            var img_container = common_create_obj("div", "item_img_container item_stars_" + artifact.star);
            var img = common_create_obj("img", "item_img");
            img.src = "images/icons/artifact/" + equip_list_artifacts_name[i] + "/" + artifact_obj.icon + ".png";
            img_container.appendChild(img);
            if (i > 1) {
                var label = common_create_obj("div", "item_label", equip_list_stats[common_lookup_parameter(equip_list_stats, "id", artifact.main)].labelname);
                img_container.appendChild(label);
            }

            if (artifact.labelid != 0) {
                var labelid = common_create_obj("div", "item_label_id", artifact.labelid);
                img_container.appendChild(labelid);
            }
            row.appendChild(img_container);
        } else {
            var img_container = common_create_obj("div", "item_img_container item_stars_5");
            row.appendChild(img_container);
        }        
    }

    var dmg = common_create_obj("p", "optimize_artifact_current_dmg")
    dmg.innerHTML = equip_optimize_stored_damage.toFixed(1);
    row.appendChild(dmg);

    var load_btn = common_create_img_btn("", "upload", function () { equip_damage_optimize_load(); }, "Load");
    row.appendChild(load_btn);

    return row;
}



function equip_damage_optimize_load() {
    if (equip_url_apply(equip_optimize_stored_url)) {
        equip_passive_display_all();
        equip_stats_display_all();
        common_debug("Loading original setup successful.");
        common_url_generate("", equip_optimize_stored_url, false)
    }
}



function equip_damage_optimize_artifact_apply(combination, apply_effects, applyid) {
    var mess = "";


    for (var ii = 0; ii < equip_list_artifacts_name.length; ii++) {
        var artifactid = combination[ii];
        var piece = equip_list_artifacts_name[ii];
        if (artifactid >= 0) {
            Object.assign(equip_current_artifact[piece], equip_artifact_list_json[piece][artifactid]);
        } else {
            equip_reset_artifact(piece);
        }

        equip_apply_artifact_lite(piece);

        mess += artifactid + " ";
    }


    equip_apply_artifact_sets_lite(equip_return_artifact_sets(equip_list_artifacts_name), apply_effects, applyid);


    return mess;
}

function equip_damage_optimize_artifact_apply_full(combination, apply_effects) {
    equip_effects_clear_artifacts(true);
    var applyid = equip_current_effect.active.length;
    equip_current_effect.active.push({});
    equip_damage_optimize_artifact_apply(combination, apply_effects, applyid);
    equip_apply_artifact_all();
    equip_damage_optimize_artifact_apply_effect(applyid);
    equip_effects_apply_all();
    equip_display_character_stats();
    equip_url_save();
}

function equip_damage_optimize_artifact_apply_effect(applyid) {
    if (equip_current_effect.active[applyid].select > 0) {
        equip_effects_new_display(applyid);
    }
}

function equip_damage_optimize_artifact_combinations_table() {
    var result = {};
    result.trans = [];
    result.counts = [];
    result.counts_real = [];
    result.trans_set = [];
    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        var midresult = [];
        var midresult_set = [];
        for (var ii = 0; ii < equip_artifact_list_json[equip_list_artifacts_name[i]].length; ii++) {
            if (equip_artifact_list_json[equip_list_artifacts_name[i]][ii].lock == 0 || typeof(equip_artifact_list_json[equip_list_artifacts_name[i]][ii].lock) == "undefined") {
                midresult.push(ii);
                midresult_set.push(equip_artifact_list_json[equip_list_artifacts_name[i]][ii].id)
            }
        }
        result.trans.push(midresult);
        result.trans_set.push(midresult_set);
        if (midresult.length == 0) {
            result.counts.push(1);
        } else {
            result.counts.push(midresult.length);
        }
        result.counts_real.push(midresult.length);
    }
    return result;

}

function equip_damage_optimize_artifact_combinations() {
    var artifact_count = equip_list_artifacts_name.length;
    var table = equip_damage_optimize_artifact_combinations_table();
    common_debug("Total artifact counts: " + table.counts_real)
    var result = [];
    var total_count = 1;

    for (var i = 0; i < table.counts.length; i++) {
        total_count = total_count * table.counts[i];        
    }

    common_debug("Total combination count: " + total_count)

    var counts_var = [];
    var prev = 1;
    counts_var.push(prev);
    for (var i = 0; i < artifact_count; i++) {
        prev = prev * table.counts[i];
        counts_var.push(prev);
    }


    if (equip_optimize_filter.length > 0) {

        for (var i = 0; i < total_count; i++) {
            var set = [];
            var comb = [];
            for (var ii = 0; ii < artifact_count; ii++) {
                if (table.counts_real[ii] > 0) {
                    var a = Math.trunc((i % counts_var[ii + 1]) / counts_var[ii]);
                    b = table.trans[ii][a];
                    c = table.trans_set[ii][a]
                } else {
                    var b = -1;
                    var c = -1;
                }
                comb.push(b);
                set.push(c);
            }

            if (equip_damage_optimize_filter_check(set)) {
                result.push(comb);
            }
            
            }

            //common_debug("Unfiltered combination count: " + result_obj.length)

            //var result = equip_damage_optimize_filter(result_obj);

        
    } else {
        var result = [];

            for (var i = 0; i < total_count; i++) {
                var comb = [];
                for (var ii = 0; ii < artifact_count; ii++) {
                    if (table.counts_real[ii] > 0) {
                        var a = Math.trunc((i % counts_var[ii + 1]) / counts_var[ii]);
                        b = table.trans[ii][a];
                    } else {
                        var b = -1;
                    }
                    comb.push(b);
                }
                result.push(comb);
            }
       

    }

    return result;
}

function equip_damage_optimize_filter(input) {
    var result = [];

    for (var i = 0; i < input.length; i++) {
        if (equip_damage_optimize_filter_check(input[i].set)) {
            result.push(input[i].comb)
        }   
    }
    return result;
}

function equip_damage_optimize_filter_check(comb) {
    for (var i = 0; i < equip_optimize_filter.length; i++) {
        if (equip_damage_optimize_filter_check_single(comb, equip_optimize_filter[i])) {
            return true;
        }
    }
    return false;
}

function equip_damage_optimize_filter_check_single(comb, filter) {



    if (filter[0] == filter[1]) {
        if (common_count_array_occurance(comb, filter[0]) >= 4) {
            return true;
        } else {
            return false;
        }
    } else if (filter[0] == 0 || filter[1] == 0) {
        var f = filter[0] + filter[1];
        if (common_count_array_occurance(comb, f) >= 2) {
            return true;
        } else {
            return false;
        }
    } else {
        if (common_count_array_occurance(comb, filter[0]) >= 2 && common_count_array_occurance(comb, filter[1]) >= 2) {
            return true;
        } else {
            return false;
        }
    }

}


function equip_damage_optimize_calculate() {

    equip_effects_apply_all();

    equip_stats_calculate_all();


    var stats = equip_damage_setup_stats();
    var character = character_list[equip_current_character.id];
    var result = 0;

    var rowcount = 0;

    for (var i = 0; i < character.attacks.length; i++) {

            if (character.attacks[i].type) {
                var level = equip_current_character.skill_level[character.attacks[i].type] + equip_stats_total[common_lookup_parameter(equip_list_stats, "id", "level" + character.attacks[i].type)];
            } else {
                var level = 0;
            }

            if (character.attacks[i].parts) {
                for (var ii = 0; ii < character.attacks[i].parts.length; ii++) {

                    if (equip_damage.key[rowcount]) {
                        result += equip_damage_calculate_row(stats, i, ii, level, rowcount) * equip_damage.key[rowcount];

                    } 

                    rowcount++;

                }
            }
    }

    for (var i = 0; i < equip_list_visions[character.vision].reactions.length; i++) {
        if (equip_list_visions[character.vision].reactions[i] != "crystalize") {
            if (equip_damage.key[rowcount]) {
                if (equip_damage.keymult[rowcount] && result > 0) {
                    //result = result * equip_damage_calculate_row_reaction(equip_list_visions[character.vision].reactions[i], character.vision);
                } else {
                    result += equip_damage_calculate_row_reaction(equip_list_visions[character.vision].reactions[i], character.vision) * equip_damage.key[rowcount];
                }
            }
            rowcount++;
        }

    }


    return result;
}



