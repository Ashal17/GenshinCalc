function equip_scanner_load_file(event) {
    var input = event.target;
    var reader = new FileReader();
    var mess = false;
    reader.onload = function () {
        try {
            if (input.files[0].name.endsWith('.json')) {
                equip_scanner_json = JSON.parse(reader.result);
            } else {
                mess = "Unsupported file type. Only JSON files are supported.";
                throw "Unsupported file type. Only JSON files are supported.";
            }
           
            if (equip_scanner_json.format == "GOOD") {
                equip_scanner_artifacts_parse_all();
                equip_scanner_artifacts_count_all();
                document.getElementById("equip_scanner_artifacts_container").style.display = "flex";
                //equip_scanner_artifacts_show_breakdown();
                equip_scanner_artifacts_show(true);
            } else {
                mess = "Unsupported format of JSON file. Only files in GOOD format are supported.";
                throw "Unsupported format of JSON file. Only files in GOOD format are supported.";
            }
        } catch (err) {
            common_loading_show_error(err, mess);
        }
        
        
       
    };
    reader.readAsText(input.files[0]);
    var inputfile_file = document.getElementById("equip_scanner_inputfile_file");
    inputfile_file.innerHTML = input.files[0].name;
    inputfile_file.style.display = "initial";
}

function equip_scanner_artifacts_parse_all() {
    equip_scanner_artifacts = {};
    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        equip_scanner_artifacts[equip_list_artifacts_name[i]] = [];
    }

    for (var i = 0; i < equip_scanner_json.artifacts.length; i++) {
        var art = equip_scanner_json.artifacts[i];
        if (art.level == 20) {
            var artifact = {};
            artifact.id = equip_list_artifacts_sets[common_lookup_parameter(equip_list_artifacts_sets, "scanner_key", art.setKey)].id;
            artifact.main = equip_list_scanner_stats_transform[art.mainStatKey];
            artifact.star = art.rarity;
            artifact.level = art.level;
            artifact.lock = 0;
            for (var ii = 0; ii < 4; ii++) {
                artifact["sub_" + ii] = equip_list_scanner_stats_transform[art.substats[ii].key];
                artifact["sub_val_" + ii] = art.substats[ii].value;
            }
            equip_scanner_artifacts[art.slotKey].push(artifact);
        }
    }

    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        equip_scanner_artifacts[equip_list_artifacts_name[i]] = common_sort_array(equip_scanner_artifacts[equip_list_artifacts_name[i]], "id")
    }
}

function equip_scanner_artifacts_count_all() {
    equip_scanner_artifacts_counts = {};
    equip_scanner_artifacts_counts.totals = {};
    equip_scanner_artifacts_counts.totals.all = 0;
    for (var i = 0; i < equip_list_artifacts_sets.length; i++) {
        equip_scanner_artifacts_counts.totals[equip_list_artifacts_sets[i].id] = 0;
    }

    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        var artifactid = equip_list_artifacts_name[i];
        equip_scanner_artifacts_counts[artifactid] = {};
        equip_scanner_artifacts_counts[artifactid].all = 0;
        for (var ii = 0; ii < equip_list_artifacts_sets.length; ii++) {
            equip_scanner_artifacts_counts[artifactid][equip_list_artifacts_sets[ii].id] = 0;
        }
        for (var ii = 0; ii < equip_scanner_artifacts[artifactid].length; ii++) {
            if (!equip_scanner_artifacts[artifactid][ii].delete) {
                equip_scanner_artifacts_counts.totals.all++;
                equip_scanner_artifacts_counts.totals[equip_scanner_artifacts[artifactid][ii].id]++;
                equip_scanner_artifacts_counts[artifactid].all++;
                equip_scanner_artifacts_counts[artifactid][equip_scanner_artifacts[artifactid][ii].id]++;
            }
        }
    }
}

function equip_scanner_artifacts_show_breakdown() {
    var obj = document.getElementById("equip_scanner_artifacts_breakdown");
    common_clear_children(obj, 0);

    obj.append(equip_scanner_artifacts_show_breakdown_single("equip_scanner_artifacts_breakdown", "All", equip_scanner_artifacts_counts.totals.all, false));
    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        var artifactid = equip_list_artifacts_name[i];
        obj.append(equip_scanner_artifacts_show_breakdown_single("equip_scanner_artifacts_breakdown equip_scanner_artifacts_breakdown_piece", equip_list_artifacts_variables[artifactid].name, equip_scanner_artifacts_counts[artifactid].all));
        for (var ii = 0; ii < equip_list_artifacts_sets.length; ii++) {
            var c = equip_scanner_artifacts_counts[artifactid][equip_list_artifacts_sets[ii].id];
            if (c > 0) {
                obj.append(equip_scanner_artifacts_show_breakdown_single("equip_scanner_artifacts_breakdown", equip_list_artifacts_sets[ii].name, c, artifactid));
            }
        }
    }
}

function equip_scanner_artifacts_show_breakdown_single(lineclass, name, count, artifactid) {
    var line = common_create_obj("div", lineclass);

    line.append(common_create_obj("p", false, name));
    line.append(common_create_obj("p", "equip_scanner_count", count));

    if (artifactid) {
        var save_btn = common_create_img_btn("", "download-multiple", function () { common_construct_prompt(function () { equip_scanner_artifacts_save_artifactid(artifactid, false, true); }, "Do you want to save these Artifacts?", save_btn) }, "Save");
    } else {
        var save_btn = common_create_img_btn("", "download-multiple", function () { common_construct_prompt(function () { equip_scanner_artifacts_save_all(false); }, "Do you want to save these Artifacts?", save_btn) }, "Save");
    }

    line.appendChild(save_btn);

    return line;
}

function equip_scanner_artifacts_show(breakdown) {
    
    var obj = document.getElementById("equip_scanner_artifacts");
    common_clear_children(obj, 0);

    if (breakdown) {
        obj.append(equip_scanner_artifacts_show_breakdown_single("equip_scanner_artifacts_breakdown", "All", equip_scanner_artifacts_counts.totals.all));
    }
       
    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        var artifactid = equip_list_artifacts_name[i];
        if (breakdown) {
            obj.append(equip_scanner_artifacts_show_breakdown_single("equip_scanner_artifacts_breakdown equip_scanner_artifacts_breakdown_piece", equip_list_artifacts_variables[artifactid].name, equip_scanner_artifacts_counts[artifactid].all));
        }
        for (var ii = 0; ii < equip_scanner_artifacts[artifactid].length; ii++) {
            if (!equip_scanner_artifacts[artifactid][ii].delete) {
                obj.append(equip_scanner_artifacts_show_single(artifactid, equip_scanner_artifacts[artifactid][ii], ii));
            }
        }
    }
    
}


function equip_scanner_artifacts_show_single(artifactid, artifact, n) {

    var artifact_obj = equip_list_artifacts_sets[common_lookup_parameter(equip_list_artifacts_sets, "id", artifact.id)];

    var row = common_create_obj("div", "artifact_list_row", false, "equip_scanner_artifacts_" + artifactid + n);

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

    var save_btn = common_create_img_btn("", "download", function () { common_construct_prompt(function () { equip_scanner_artifacts_save(artifactid, n); }, "Do you want to save this Artifact?", save_btn) }, "Save");
    row.appendChild(save_btn);
    
    var load_btn = common_create_img_btn("", "upload", function () { common_construct_prompt(function () { equip_scanner_artifacts_load(artifactid, n); }, "Do you want to load this Artifact?", load_btn) }, "Load");
    row.appendChild(load_btn);

    var delete_btn = common_create_img_btn("", "delete-forever", function () { common_construct_prompt(function () { equip_scanner_artifacts_delete(artifactid, n); }, "Do you want to delete this Artifact?", delete_btn) }, "Delete");
    row.appendChild(delete_btn);

    return row;
}

function equip_scanner_artifacts_save(artifactid, n) {
    var result = {};
    Object.assign(result, equip_scanner_artifacts[artifactid][n]);
    var m = equip_artifact_list_json[artifactid].length;
    equip_artifact_list_json[artifactid].push(result);
    document.getElementById("artifact_list_table_" + artifactid).appendChild(equip_artifact_list_new_display(artifactid, result, m));
    equip_artifact_list_storage();
}


function equip_scanner_artifacts_load(artifactid, n) {
    Object.assign(equip_current_artifact[artifactid], equip_scanner_artifacts[artifactid][n]);
    equip_apply_artifact_full(artifactid);
}

function equip_scanner_artifacts_delete(artifactid, n) {
    equip_scanner_artifacts[artifactid][n].delete = true;
    equip_scanner_artifacts_counts.totals.all--;
    equip_scanner_artifacts_counts.totals[equip_scanner_artifacts[artifactid][n].id]--;
    equip_scanner_artifacts_counts[artifactid].all--;
    equip_scanner_artifacts_counts[artifactid][equip_scanner_artifacts[artifactid][n].id]--;
    equip_scanner_artifacts_show(true);
}

function equip_scanner_artifacts_save_all(reset) {

    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        var artifactid = equip_list_artifacts_name[i];
        equip_scanner_artifacts_save_artifactid(artifactid, reset, false);
    }
    equip_artifact_list_storage();
    equip_artifact_list_refresh();
}

function equip_scanner_artifacts_save_artifactid(artifactid, reset, single) {

    if (reset) {
        equip_artifact_list_delete_piece(artifactid);
    }

    for (var i = 0; i < equip_scanner_artifacts[artifactid].length; i++) {
        var artifact = equip_scanner_artifacts[artifactid][i];
        if (!artifact.delete) {
            var result = {};
            Object.assign(result, artifact);
            equip_artifact_list_json[artifactid].push(result);
        }
    }

    if (single) {
        equip_artifact_list_storage();
        equip_artifact_list_refresh_piece(artifactid);
    }
}

