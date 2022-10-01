function equip_artifact_list_setup() {
    equip_artifact_list_display = 0;

    if (localStorage.getItem("equip_artifact_list") == null) {
        equip_artifact_list_json = {};
        for (var i = 0; i < equip_list_artifacts_name.length; i++) {
            equip_artifact_list_json[equip_list_artifacts_name[i]] = [];
        }
    } else {
        equip_artifact_list_json = JSON.parse(localStorage.getItem("equip_artifact_list"));
        equip_artifact_list_clear_all();
        equip_artifact_list_refresh();
    }
    
    
    
}

function equip_artifact_list_storage() {
    localStorage.setItem("equip_artifact_list", JSON.stringify(equip_artifact_list_json));
    equip_account_artifact_list_refresh_needed = true;
    equip_account_current_refresh_artifact_list();
}

function equip_artifact_list_delete_all() {
    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        equip_artifact_list_delete_piece(equip_list_artifacts_name[i]);
    }
    equip_artifact_list_refresh_piece(artifactid);
    equip_artifact_list_storage();
}

function equip_artifact_list_delete_piece(artifactid) {
    equip_artifact_list_json[artifactid] = [];   
}

function equip_artifact_list_delete_piece_refresh(artifactid) {
    equip_artifact_list_delete_piece(artifactid);
    equip_artifact_list_refresh_piece(artifactid);
    equip_artifact_list_storage();
}

function equip_artifact_list_refresh() {
    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        equip_artifact_list_refresh_piece(equip_list_artifacts_name[i]);
    }
}

function equip_artifact_list_refresh_piece(artifactid) {
    var artifact_table = document.getElementById("artifact_list_table_" + artifactid);
    common_clear_children(artifact_table, 0);

    for (var i = 0; i < equip_artifact_list_json[artifactid].length; i++) {
        artifact_table.appendChild(equip_artifact_list_new_display(artifactid, equip_artifact_list_json[artifactid][i], i));
    }
}

function equip_artifact_list_new_display(artifactid, artifact, n) {

    var artifact_obj = equip_list_artifacts_sets[common_lookup_parameter(equip_list_artifacts_sets, "id", artifact.id)];

    var row = common_create_obj("div", "artifact_list_row");

    var img_container = common_create_obj("div", "item_img_container item_stars_" + artifact.star);
    var img = common_create_obj("img", "item_img");
    img.src = "images/icons/artifact/" + artifactid + "/" + artifact_obj.icon + ".png";
    img_container.appendChild(img);
    row.appendChild(img_container);

    var name = "+" + artifact.level + " " + artifact_obj[artifactid];

    if (name.length > 35) {
        row.appendChild(common_create_obj("p", "small_text", name));
        
    } else {
        row.appendChild(common_create_obj("p", "", name));
    }

    var mainvalue = equip_list_artifacts_stats_values[artifact.star][artifact.main][artifact.level];
    var mainstatid = common_lookup_parameter(equip_list_stats, "id", artifact.main)
    var main = equip_list_stats[mainstatid].listname + " <span class='result'>" + equip_display_stat(mainvalue, mainstatid) + "</span>";
    row.appendChild(common_create_obj("p", "", main));

    for (var i = 0; i < 4; i++) {
        var subvalue = artifact["sub_val_" + i];
        
        if (subvalue != 0) {
            var substatid = common_lookup_parameter(equip_list_stats, "id", artifact["sub_" + i]);
            var sub = equip_list_stats[substatid].listname + " <span class='result'>" + equip_display_stat(subvalue, substatid) + "</span>";
        } else {
            var sub = "";
        }
        

        row.appendChild(common_create_obj("p", "", sub));
    }
    if (artifact.lock) {
        var lock_btn = common_create_img_btn("", "lock", function () { equip_artifact_list_lock(artifactid, n, lock_btn) }, "Unlock");
    } else {
        var lock_btn = common_create_img_btn("", "lock-open", function () { equip_artifact_list_lock(artifactid, n, lock_btn) }, "Lock");
    }
    row.appendChild(lock_btn);
    var load_btn = common_create_img_btn("", "upload", function () { common_construct_prompt(function () { equip_artifact_list_load(artifactid, n); }, "Do you want to load this Artifact?", load_btn) }, "Load");
    row.appendChild(load_btn);
    var delete_btn = common_create_img_btn("", "delete-forever", function () { common_construct_prompt(function () { equip_artifact_list_delete(artifactid, n); }, "Do you want to delete this Artifact?", delete_btn) }, "Delete");
    row.appendChild(delete_btn);

    return row;
}

function equip_artifact_list_lock(artifactid, n, lock_btn) {

    var prev = equip_artifact_list_json[artifactid][n].lock;
    var icon = common_get_child_by_class(lock_btn, "img_icon");
    var hover = common_get_child_by_class(lock_btn, "img_button_hover");

    if (prev) {
        equip_artifact_list_json[artifactid][n].lock = 0;
        console.log(lock_btn);
        icon.className = "img_icon svg svg-lock-open";
        hover.innerHTML = "Lock";
    } else {
        equip_artifact_list_json[artifactid][n].lock = 1;
        icon.className = "img_icon svg svg-lock";
        hover.innerHTML = "Unlock";
    }
    equip_artifact_list_storage();
}

function equip_artifact_list_load(artifactid, n) {
    Object.assign(equip_current_artifact[artifactid], equip_artifact_list_json[artifactid][n]);
    equip_apply_artifact_full(artifactid);
}

function equip_artifact_list_delete(artifactid, n) {
    equip_artifact_list_json[artifactid].splice(n, 1);
    equip_artifact_list_refresh_piece(artifactid);
    equip_artifact_list_storage();
}

function equip_artifact_list_save(artifactid) {
    var result = {};
    Object.assign(result, equip_current_artifact[artifactid]);
    result.lock = 0;
    delete result.stats;
    var n = equip_artifact_list_json[artifactid].length;
    equip_artifact_list_json[artifactid].push(result);
    document.getElementById("artifact_list_table_" + artifactid).appendChild(equip_artifact_list_new_display(artifactid, result, n));
    equip_artifact_list_storage();
}

function equip_artifact_list_show(id) {
    if (equip_artifact_list_display == id) {
        document.getElementById('artifact_list_' + id).style.display = "none";
        document.getElementById("artifact_list_show_" + id).className = "img_icon svg svg-eye-outline";
        equip_artifact_list_display = 0;
    } else {
        document.getElementById('artifact_list_' + id).style.display = "flex";
        document.getElementById("artifact_list_show_" + id).className = "img_icon_active svg svg-eye-outline";
        if (equip_artifact_list_display != 0) {
            document.getElementById('artifact_list_' + equip_artifact_list_display).style.display = "none";
            document.getElementById("artifact_list_show_" + equip_artifact_list_display).className = "img_icon svg svg-eye-outline";
        }
        equip_artifact_list_display = id;
    }

}

function equip_artifact_list_copy_code(artifactid, parent) {
    common_copy_clipboard(equip_artifact_list_get_code(artifactid), "Artifact Code Copied!", parent)
}

function equip_artifact_list_get_code(artifactid) {
    var convert = "";

    convert += common_url_save_int(common_lookup_index(equip_list_artifacts_name, artifactid), 3);
    convert += common_url_save_int(equip_current_artifact[artifactid].id, 6);
    convert += common_url_save_int(equip_current_artifact[artifactid].star, 3);
    convert += common_url_save_int(equip_current_artifact[artifactid].level, 5);
    convert += common_url_save_int(common_lookup_index(equip_list_artifacts_stats[artifactid], equip_current_artifact[artifactid].main), 4);

    for (var ii = 0; ii < 4; ii++) {
        convert += common_url_save_int(common_lookup_parameter(equip_list_artifacts_substats, "id", equip_current_artifact[artifactid]["sub_" + ii]), 4);

        var stat = equip_list_stats[common_lookup_parameter(equip_list_stats, "id", equip_current_artifact[artifactid]["sub_" + ii])];

        if (stat.type == "percent") {
            convert += common_url_save_int(Math.round(equip_current_artifact[artifactid]["sub_val_" + ii] * 10), stat.bitsize);
        } else if (stat.type == "flat") {
            convert += common_url_save_int(Math.round(equip_current_artifact[artifactid]["sub_val_" + ii]), stat.bitsize);
        }
    }

    while (convert.length % 6 > 0) {
        convert += "0";
    }

    result = version + "$" + common_url_short(base_convert(convert, 2, 64));
    return result;

}

function equip_artifact_list_load_code_btn(piece) {
    var code = document.getElementById("setup_prompt_input").value;
    if (code) {
        equip_artifact_list_load_code(code, piece);
    }   
}

function equip_artifact_list_load_code(code, piece) {
    var code_split = code.split("$");
    var patch = code_split[0];
    var convert = base_convert(common_url_long(code_split[1]), 64, 2);

    if (convert) {
        var a = 0;
        var b = 3;

        var artifactid = equip_list_artifacts_name[base_convert(convert.slice(a, b), 2, 10)];
        if (piece && artifactid != piece) {
            common_message("This is not " + common_capitalize(piece) + " Artifact code!", "automatic_red")
        } else {
            a = b; b += 6;
            equip_current_artifact[artifactid].id = base_convert(convert.slice(a, b), 2, 10);
            a = b; b += 3;
            equip_current_artifact[artifactid].star = base_convert(convert.slice(a, b), 2, 10);
            a = b; b += 5;
            equip_current_artifact[artifactid].level = base_convert(convert.slice(a, b), 2, 10);
            a = b; b += 4;
            equip_current_artifact[artifactid].main = equip_list_artifacts_stats[artifactid][base_convert(convert.slice(a, b), 2, 10)];

            for (var ii = 0; ii < 4; ii++) {
                a = b; b += 4;
                equip_current_artifact[artifactid]["sub_" + ii] = equip_list_artifacts_substats[base_convert(convert.slice(a, b), 2, 10)].id;

                console.log(equip_current_artifact[artifactid]["sub_" + ii]);

                var stat = equip_list_stats[common_lookup_parameter(equip_list_stats, "id", equip_current_artifact[artifactid]["sub_" + ii])];
                a = b;
                b += stat.bitsize;

                if (stat.type == "percent") {
                    equip_current_artifact[artifactid]["sub_val_" + ii] = base_convert(convert.slice(a, b), 2, 10) / 10;
                } else if (stat.type == "flat") {
                    equip_current_artifact[artifactid]["sub_val_" + ii] = base_convert(convert.slice(a, b), 2, 10);
                }
            }

            equip_apply_artifact_full(artifactid);
           
        }

    } else {
        common_message("Enter valid Artifact code!", "automatic_red")
    }

}

function equip_artifact_list_load_url_btn(piece, parent) {
    var url = document.getElementById("setup_prompt_input").value;
    if (url) {
        equip_artifact_list_load_url(url, piece, parent);
    } 
}

function equip_artifact_list_load_url(url, piece, parent) {
    common_loading_show();
    var json = {};
    json.data = {};
    json.data.url = url;
    var JSONData = JSON.stringify(json);



    $.ajax(
        {
            url: 'php/ocr.php',
            type: 'POST',
            data: JSONData,
            error: function (xhr, status, error) {
                try {
                    var err = JSON.parse(xhr.responseText);
                    common_loading_show_error(err.code + " - " + err.error + "\n" + err.message, "An Error occured when trying to parse the Artifact.\nPlease try again later.") 
                } catch (e) {
                    common_loading_show_error(e, "A Timeout occured when trying to parse the Artifact.\nPlease try again later.") 
                }
                               
            },
            success: function (xhr, status, error) {
                try {
                    var resp = JSON.parse(xhr);
                    common_loading_hide();
                    var string = equip_artifact_list_load_url_clean(resp.message);
                    common_construct_prompt_input(function () { equip_artifact_list_load_string_btn(piece) }, "Check the parsed Artifact", parent, string, "textarea");
                    equip_artifact_list_load_string_help_show();
                } catch (e) {
                    common_loading_show_error(e, "An Error occured when trying to parse the Artifact.") 
                }
                
                
            },
            timeout: 10000,
        }


    );
}

function equip_artifact_list_load_url_clean(input) {
    var result = input.replace(/[^\w\s%.+-]/gi, '');

    result = result.replace(/[^\S\r\n]+/gi, ' ');
    result = result.replace(/^\s+|\s+$/gi, '');
    result = result.replace(/\n\s/gi, '\n');
    return result;
}

function equip_artifact_list_load_string_btn(piece) {

    var string = document.getElementById("setup_prompt_input").value;
    if (string) {
        equip_artifact_list_load_string(string, piece);
    }

}

function equip_artifact_list_load_string_help_show() {
    var parent = document.getElementById("setup_prompt");

    var help = document.createElement('div');
    help.className = "artifact_help";
    help.id = "artifact_help";
    parent.appendChild(help);

    for (var i = 0; i < equip_list_artifact_parse_descriptions.length; i++) {
        var textline = document.createElement('p');
        textline.innerHTML = equip_list_artifact_parse_descriptions[i];
        help.appendChild(textline);
    }
    parent.appendChild(help);
}

function equip_artifact_list_load_string(string, piece) {
    var error = 0;
    var error_message = "";
    var split = string.split('\n');

    if (split[1].toLowerCase() != equip_list_artifacts_variables[piece].name.toLowerCase()) {
        error++;
        error_message += "The piece \"" + split[1] + "\" doesn't match selected \"" + equip_list_artifacts_variables[piece].name +"\".\n";
    } else {
        var arrayid = common_lookup_parameter(equip_list_artifacts_sets, piece, split[0], true);
        if (arrayid > 0) {
            var artifactid = equip_list_artifacts_sets[arrayid].id;
        } else {
            error++;
            error_message += "The item name \"" + split[0] + "\" doesn't match any set.\n";
        }
        
    }

    if (error == 0) {
        var artifactlevel = parseInt(split[4].replace(/\D/g, ''));
        if (artifactlevel && artifactlevel >= 0 && artifactlevel <= 20) {
            var statid = common_lookup_parameter_exist(equip_list_stats, "shortname", split[2], true);

            if (statid > 0) {
                
                if (equip_list_stats[statid].type == "flat" && split[3].match(/%/gi)) {
                    statid = statid + 3;
                }

                var stat = equip_list_stats[statid];
                var artifactmainstat = stat.id;

                var statval = parseFloat(split[3]);

                var artifactstars = 0;

                for (var i = 1; i < equip_list_artifacts_stars.length; i++) {
                    
                    if (equip_list_artifacts_stars[i] >= artifactlevel) {
                        if (equip_list_artifacts_stats_values[i][stat.id][artifactlevel] == statval) {
                            artifactstars = i;
                            break;
                        }
                    }
                }

                if (artifactstars == 0) {
                    error++;
                    error_message += "The main stat value \"" + split[3] + "\" does not match possible artifact stats.\n";
                }


            } else {
                error++;
                error_message += "The main stat \"" + split[2] + "\" is not possible.\n";
            }

            if (statid <= 0) {
                
            }

        } else {
            error++;
            error_message += "The artifact level \"" + split[4] + "\" is not possible.\n";
        }
    }

    if (error == 0) {
        var artifactsubstats = [];
        var artifactsubstatsval = [];
        for (var i = 0; i < 4; i++) {
            if (split[5 + i]) {
                var statname = split[5 + i].replace(/[^a-z ]/gi, '');;
                var statid = common_lookup_parameter_exist(equip_list_stats, "shortname", statname, true);

                if (statid > 0) {
                    if (equip_list_stats[statid].type == "flat" && split[5 + i].match(/%/gi)) {
                        statid = statid + 3;
                    }

                    var statval = parseFloat(split[5 + i].replace(/[a-z%]/gi, ''));

                    if (statval && statval > 0 && statval <= equip_list_stats[statid].limit) {
                        artifactsubstats.push(equip_list_stats[statid].id);
                        artifactsubstatsval.push(statval);
                    } else {
                        error++;
                        error_message += "The sub stat \"" + split[5 + i] + "\" is not possible.\n";
                    }

                } else {
                    error++;
                    error_message += "The sub stat \"" + split[5 + i] + "\" is not possible.\n";
                }          

            }
        }
    }

    if (error == 0) {

        var unique = true;
        for (var i = 0; i < artifactsubstats.length; i++) {
            
            if (artifactmainstat == artifactsubstats[i]) {
                    unique = false;
                } else {
                    for (var ii = 0; ii < i; ii++) {
                        if (artifactsubstats[i] == artifactsubstats[ii]) {
                            unique = false;
                            break;
                        }
                    }
                }
            
        }

        if (unique) {
            equip_current_artifact[piece].id = artifactid;
            equip_current_artifact[piece].star = artifactstars;
            equip_current_artifact[piece].level = artifactlevel;
            equip_current_artifact[piece].main = artifactmainstat;

            for (var i = 0; i < 4; i++) {
                if (i > artifactsubstats.length) {
                    equip_current_artifact[piece]["sub_" + i] = "blank";
                    equip_current_artifact[piece]["sub_val_" + i] = 0;
                } else {
                    equip_current_artifact[piece]["sub_" + i] = artifactsubstats[i];
                    equip_current_artifact[piece]["sub_val_" + i] = artifactsubstatsval[i];
                }
            }


            equip_apply_artifact_full(piece);
        } else {
            error++;
            error_message += "The combination of sub stats is not possible.\n";
        }

        
    }

    if (error > 0){
        common_loading_show_error(split, error_message);
    }

}

function equip_artifact_list_clear_all() {
    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        for (var ii = 0; ii < equip_artifact_list_json[equip_list_artifacts_name[i]].length; ii++) {
            equip_artifact_list_clear(equip_list_artifacts_name[i], ii)
        }
    }

}

function equip_artifact_list_clear(artifactid, id) {
    if (equip_artifact_list_json[artifactid][id].stats) {
        delete equip_artifact_list_json[artifactid][id].stats;
    }
    
}


function equip_artifact_list_recalculate_all() {
    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        for (var ii = 0; ii < equip_artifact_list_json[equip_list_artifacts_name[i]].length; ii++) {
            equip_artifact_list_recalculate(equip_list_artifacts_name[i], ii)
        }
    }

}

function equip_artifact_list_recalculate(artifactid, id) {
    equip_artifact_list_json[artifactid][id].stats = [];
    for (var i = 0; i < equip_list_stats.length; i++) {
        equip_artifact_list_json[artifactid][id].stats.push(0);
    }

    var value = equip_list_artifacts_stats_values[equip_artifact_list_json[artifactid][id].star][equip_artifact_list_json[artifactid][id].main][equip_artifact_list_json[artifactid][id].level];
    var statid = common_lookup_parameter(equip_list_stats, "id", equip_artifact_list_json[artifactid][id].main)

    equip_artifact_list_json[artifactid][id].stats[statid] += value;

    for (var i = 0; i < 4; i++) {
        if (equip_artifact_list_json[artifactid][id]["sub_" + i] != "blank") {
            equip_artifact_list_json[artifactid][id].stats[common_lookup_parameter(equip_list_stats, "id", equip_artifact_list_json[artifactid][id]["sub_" + i])] += equip_artifact_list_json[artifactid][id]["sub_val_" + i];
        }
    }
}

function equip_artifact_list_extend_stats_all() {
    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        for (var ii = 0; ii < equip_artifact_list_json[equip_list_artifacts_name[i]].length; ii++) {
            equip_artifact_list_extend_stats(equip_list_artifacts_name[i], ii)
        }
    }
}

function equip_artifact_list_extend_stats(artifactid, id) {
    while (equip_artifact_list_json[artifactid][id].stats.length < equip_list_stats.length) {
        equip_artifact_list_json[artifactid][id].stats.push(0);
    }
}

function equip_artifact_list_clear_labels() {
    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        for (var ii = 0; ii < equip_artifact_list_json[equip_list_artifacts_name[i]].length; ii++) {
            equip_artifact_list_json[equip_list_artifacts_name[i]][ii].labelid = 0;
        }
    }
}

function equip_artifact_list_generate_labels() {
    equip_artifact_list_clear_labels();
    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        var artifact_list = equip_artifact_list_json[equip_list_artifacts_name[i]];
        for (var ii = 0; ii < artifact_list.length; ii++) {
            if (artifact_list[ii].labelid == 0) {
                var labelid = 1;               
                for (var iii = (ii + 1); iii < artifact_list.length; iii++) {
                    if (artifact_list[ii].id == artifact_list[iii].id && artifact_list[ii].main == artifact_list[iii].main) {
                        labelid++;
                        artifact_list[iii].labelid = labelid;
                    }
                }
                if (labelid > 1) {
                    artifact_list[ii].labelid = 1;
                } 
            }           
        }
    }
}