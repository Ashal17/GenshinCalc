function equip_account_setup() {
    equip_account_artifact_list_json = {};
    equip_account_setups_json = [];

    equip_account_reload("all");
}

function equip_account_reload(type) {
    common_loading_show();

    var json = {};
    json.req = type;
    var JSONData = JSON.stringify(json);

    $.ajax(
        {
            url: '/php/account/user_data_download.php',
            type: 'POST',
            data: JSONData,
            error: function (xhr, status, error) {
                try {
                    console.log(xhr);
                    var resp = JSON.parse(xhr.responseText);
                    var err = resp.message;
                    common_loading_show_error(err.code + " - " + err.error + "\n" + err.message, "An Error occured when trying to download user data.\nPlease try again later.")
                } catch (e) {
                    common_loading_show_error(e, "A Timeout occured when trying to download user data.\nPlease try again later.")
                }

            },
            success: function (xhr, status, error) {
                try {
                    var resp = JSON.parse(xhr);
                    if (JSON.parse(resp.message.artifact_list)) {
                        Object.assign(equip_account_artifact_list_json, JSON.parse(resp.message.artifact_list));
                        equip_account_artifact_list_account_fill();
                    }
                    
                    if (JSON.parse(resp.message.setup)) {
                        Object.assign(equip_account_setups_json, JSON.parse(resp.message.setup));
                        equip_account_setups_account_fill();
                    }
                   
                    common_loading_hide();
                } catch (e) {
                    common_loading_show_error(e, "An Error occured when trying to download user data.")
                }


            },
            timeout: 10000,
        }


    );
}

function equip_account_current_refresh_all(force) {
    equip_account_current_refresh_artifact_list(force);
    equip_account_current_refresh_setups(force);
}

function equip_account_current_refresh_artifact_list(force) {
    if (equip_account_logged_in && ((equip_account_artifact_list_refresh_needed && common_radio_get_value("index_setup") == "account") || force)) {
        equip_account_artifact_list_current_fill();
    }
}

function equip_account_current_refresh_setups(force) {
    if (equip_account_logged_in && ((equip_account_setups_refresh_needed && common_radio_get_value("index_setup") == "account") || force)) {
        equip_account_setups_current_fill();
    }
}

function equip_account_artifact_list_fill(obj_id, json) {
    var obj = document.getElementById(obj_id);
    common_clear_children(obj, 0);

    for (var i = 0; i < equip_list_artifacts_name.length; i++) {
        var artifactid = equip_list_artifacts_name[i];
        var count = json[equip_list_artifacts_name[i]].length;
        obj.append(equip_account_artifact_list_current_fill_single(artifactid, count))
    }
}

function equip_account_artifact_list_current_fill() {
    equip_account_artifact_list_fill("equip_account_artifact_list_current", equip_artifact_list_json);
    equip_account_artifact_list_refresh_needed = false;
}

function equip_account_artifact_list_account_fill() {
    equip_account_artifact_list_fill("equip_account_artifact_list_account", equip_account_artifact_list_json);
}

function equip_account_artifact_list_current_fill_single(artifactid, count) {
    var line = common_create_obj("div", "line");

    line.append(common_create_obj("div", false, equip_list_artifacts_variables[artifactid].name));
    line.append(common_create_obj("div", "result", count));

    return line;
}

function equip_account_artifact_list_save() {
    common_loading_show();
    var JSONData = JSON.stringify(equip_artifact_list_json);

    $.ajax(
        {
            url: '/php/account/artifact_list_upload.php',
            type: 'POST',
            data: JSONData,
            error: function (xhr, status, error) {
                try {
                    var err = JSON.parse(xhr.resp.message);
                    common_loading_show_error(err.code + " - " + err.error + "\n" + err.message, "An Error occured when trying to upload the Artifact list.\nPlease try again later.")
                } catch (e) {
                    common_loading_show_error(e, "A Timeout occured when trying to upload the Artifact list.\nPlease try again later.")
                }

            },
            success: function (xhr, status, error) {
                try {
                    var resp = JSON.parse(xhr);
                    equip_account_artifact_list_json = JSON.parse(JSON.stringify(equip_artifact_list_json));
                    equip_account_artifact_list_account_fill();
                    common_loading_hide();
                    
                } catch (e) {
                    common_loading_show_error(e, "An Error occured when trying to upload the Artifact list.")
                }


            },
            timeout: 10000,
        }


    );
}

function equip_account_artifact_list_load() {
    if (equip_account_artifact_list_json && Object.keys(equip_account_artifact_list_json).length == 5) {
        equip_artifact_list_json = JSON.parse(JSON.stringify(equip_account_artifact_list_json));
        localStorage.setItem("equip_artifact_list", JSON.stringify(equip_artifact_list_json));
        equip_account_artifact_list_current_fill();
        equip_artifact_list_refresh();
    } else {
        common_debug("No artifacts to load!")
    }
}

function equip_account_setups_current_fill() {

    equip_account_setups_fill("equip_account_setups_current", "equip_setup_character_", localStorage.getItem("equip_setup_count"));

    equip_account_setups_refresh_needed = false;
}


function equip_account_setups_account_fill() {

    equip_account_setups_fill("equip_account_setups_account", equip_account_setups_json, equip_account_setups_json.length);

}

function equip_account_setups_fill(obj_id, source, count) {
    var obj = document.getElementById(obj_id);
    common_clear_children(obj, 0);

    if (count > 0) {
        var chars = [];
        for (var i = 0; i < count; i++) {
            if (typeof source == "string") {
                var char = localStorage.getItem(source + i);
            } else {
                var char = source[i].character;
            }           
            chars.push(char);
        }
        var counts = {};
        var chars_ordered = [];
        for (var i = 0; i < chars.length; i++) {
            if (counts[chars[i]] && counts[chars[i]] >= 1) {
                counts[chars[i]]++;
            } else {
                counts[chars[i]] = 1;
                chars_ordered.push(chars[i]);
            }
        }
        chars_ordered.sort();

        for (var i = 0; i < chars_ordered.length; i++) {
            obj.append(equip_account_setups_fill_single(chars_ordered[i], counts[chars_ordered[i]]))
        }
    } else {
        obj.append(common_create_obj("div", false, "No Setups"))
    }
}

function equip_account_setups_fill_single(char_id, count) {
    var line = common_create_obj("div", "line");

    line.append(common_create_obj("div", "resonance " + character_list[char_id].vision, character_list[char_id].name));
    line.append(common_create_obj("div", false, count));

    return line;
}


function equip_account_setups_save() {
    common_loading_show();
    var json = equip_account_setups_json_create();
    var JSONData = JSON.stringify(json);


    $.ajax(
        {
            url: '/php/account/setups_upload.php',
            type: 'POST',
            data: JSONData,
            error: function (xhr, status, error) {
                try {
                    var err = JSON.parse(xhr.responseText);
                    common_loading_show_error(err.code + " - " + err.error + "\n" + err.message, "An Error occured when trying to upload the Setups.\nPlease try again later.")
                } catch (e) {
                    common_loading_show_error(e, "A Timeout occured when trying to upload the Setups.\nPlease try again later.")
                }

            },
            success: function (xhr, status, error) {
                try {
                    var resp = JSON.parse(xhr);
                    Object.assign(equip_account_setups_json, json);
                    //equip_account_artifact_list_account_fill();
                    equip_account_setups_account_fill();
                    common_loading_hide();

                } catch (e) {
                    common_loading_show_error(e, "An Error occured when trying to upload the Setups.")
                }


            },
            timeout: 10000,
        }


    );
}

function equip_account_setups_json_create() {
    var json = [];
    var count = localStorage.getItem("equip_setup_count");
    for (var i = 0; i < count; i++) {
        var setup = {};
        setup.name = localStorage.getItem("equip_setup_name_" + i);
        setup.character = localStorage.getItem("equip_setup_character_" + i);
        setup.skill = localStorage.getItem("equip_setup_skill_" + i);
        setup.url = localStorage.getItem("equip_setup_url_" + i);
        json.push(setup);
    }
    return json;
}

function equip_account_setups_load() {
    if (equip_account_setups_json && equip_account_setups_json.length > 0) {

        var old_count = localStorage.getItem("equip_setup_count");
        var count = equip_account_setups_json.length;
        localStorage.setItem("equip_setup_count", count);

        for (var i = 0; i < count; i++) {
            var setup = equip_account_setups_json[i];
            localStorage.setItem("equip_setup_name_" + i, setup.name);
            localStorage.setItem("equip_setup_character_" + i, setup.character);
            localStorage.setItem("equip_setup_skill_" + i, setup.skill);
            localStorage.setItem("equip_setup_url_" + i, setup.url);
        }

        if (old_count > count) {
            for (var i = count; i < old_count; i++) {
                equip_setup_clear(i);
            }
        }

        localStorage.setItem("equip_setup_target", -1);
        equip_account_setups_current_fill();
        equip_setup_refresh(true);
    } else {
        common_debug("No setups to load!")
    }
}