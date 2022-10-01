function level_setup() {
    error_count = 0;

    try {
    genshin_setup_characters("level_character_list");
    genshin_setup_weapon_type("level_weapon_type_list")
    genshin_setup_weapon("level_weapon_list")
    level_setup_level("level_list_low", "low");
    level_setup_level("level_list_high", "high");


    level_change()

}
    catch (err) {
    document.getElementById("loader_error").style.display = "block";
    document.getElementById("loader_error_text").innerHTML = "An Error occured during loading the page.<br>Please reload the page with CTRL+F5.<br>If the Error persists, please contact the administrator.";
    console.log(err);
    error_count++;
}

// await new Promise(r => setTimeout(r, 2000));

if (error_count == 0) {
    common_loading_hide();
}

}

function level_setup_level(parent_id, type) {
    var parent = document.getElementById(parent_id);

    for (var i = 0; i < level_list_detail.length; i++) {

        var level = level_list_detail[i].level;
        if (level_list_detail[i].asc) {
            level += "+";
        }
        var label = common_create_obj("label", "level_icon");
        var input = common_create_obj("input");
        input.value = i;
        input.type = "radio";
        input.name = "level_select_" + type;
        input.id = "level_select_" + type + "_" + i;
        if (type == "low") {
            if (i == 0) {
                input.checked = "checked";
            }
        } else if (type = "high") {
            if (i == level_list_detail.length - 1) {
                input.checked = "checked";
            }
        }
        label.appendChild(input);

        var div = common_create_obj("div", "level_text_container");
        var text = common_create_obj("p", "level_text");
        text.innerHTML = level;
        div.appendChild(text);
        label.appendChild(div);

        if (i > 0) {
            var arrow = common_create_obj("div", "level_arrow");
            arrow.innerHTML = "&gt;";
            arrow.id = "level_arrow_" + type + "_" + i;
            parent.appendChild(arrow);
        }

        parent.appendChild(label)
    }
}

function level_select_type(type) {
    for (var i = 0; i < level_exp_type.length; i++) {
        var obj = document.getElementById("level_" + level_exp_type[i] + "_frame");
        if (level_exp_type[i] == type) {
            obj.style.display = "initial";
        } else {
            obj.style.display = "none";
        }        
    }
}

function level_change() {

    var type = document.querySelector('input[name="type_select"]:checked').value;
    level_select_type(type);
    var low = parseInt(document.querySelector('input[name="level_select_low"]:checked').value);
    var high = parseInt(document.querySelector('input[name="level_select_high"]:checked').value);
    var character = document.querySelector('input[name="' + type + '_select"]:checked').value;
    //var character = document.querySelector('input[name="character_select"]:checked').value;

    for (var i = 0; i < level_list_detail.length; i++) {
        if (i <= low) {
            if (i > 0) {
                document.getElementById("level_arrow_low_" + i).className = "level_arrow";
                document.getElementById("level_arrow_high_" + i).className = "level_arrow disabled_arrow";      
            }          
            document.getElementById("level_select_low_" + i).disabled = false;
            document.getElementById("level_select_high_" + i).disabled = true;
        } else if (i >= high) {
            document.getElementById("level_select_low_" + i).disabled = true;
            document.getElementById("level_select_high_" + i).disabled = false;
            document.getElementById("level_arrow_low_" + i).className = "level_arrow disabled_arrow";
            document.getElementById("level_arrow_high_" + i).className = "level_arrow";
        } else {
            document.getElementById("level_arrow_high_" + i).className = "level_arrow";
            document.getElementById("level_select_low_" + i).disabled = false;
            document.getElementById("level_select_high_" + i).disabled = false;
            document.getElementById("level_arrow_low_" + i).className = "level_arrow";
            
        }
        if (i == low + 1) {
            document.getElementById("level_arrow_high_" + i).className = "level_arrow disabled_arrow";
        }
    }

    var mora = 0;
    var parent = document.getElementById("level_result");
    common_clear_children(parent, 0);
    if (high > low) {
        parent.style.display = "flex";
        
        if (type == "character") {
            var object = character_list[character];
        }else if (type == "weapon") {
            var weapon_type = document.querySelector('input[name="weapon_type_select"]:checked').value;
            
            var object = equip_list_weapons[weapon_type][parseInt(character)]
        }
       
        mora += level_exp_materials_show(low, high, type, parent, object);
        mora += level_asc_materials_show(low, high, type, parent, object);

        parent.appendChild(level_material_create(item_list.mora, mora))
    } else {
        parent.style.display = "none";
    }

}

function level_exp_materials_return(low, high, type, object) {
        

    var result = {};
    result.material = [];
    result.mora = 0;

    for (var i = 0; i < level_exp_material[type].length; i++) {
        result.material.push(0);
    }

    for (var ii = (low + 1); ii <= high; ii++) {
        if (level_list_detail[ii].asc == false) {
            if (object.rarity) {
                var req = level_list_detail[ii][type + "_exp"][object.rarity];
            } else {
                var req = level_list_detail[ii][type + "_exp"];
            }

            for (var i = 0; i < level_exp_material[type].length; i++) {
                var count = Math.floor(req / level_exp_material[type][i].exp);
                req = req - count * level_exp_material[type][i].exp;
                result.material[i] += count;
                result.mora += count * level_exp_material[type][i].mora;
            }
            if (req > 0) {
                result.material[level_exp_material[type].length - 1] += 1;
                result.mora += level_exp_material[type][level_exp_material[type].length - 1].mora;
            }
        }
    }
    
    return result;
} 

function level_exp_materials_show(low, high, type, parent, object) {
   

    var required = level_exp_materials_return(low, high, type, object);

    for (var i = 0; i < required.material.length; i++) {  
        if (required.material[i] > 0) {
            parent.appendChild(level_material_create(item_list[level_exp_material[type][i].id], required.material[i]));
        }
    }
    return required.mora;
}

function level_asc_materials_return(low, high, type, object) {

    var required = []
   

    for (var i = (low + 1); i <= high; i++) {
        
        if (level_list_detail[i].asc) {
            if (object.rarity) {
                var asc_materials = level_list_detail[i][type + "_asc"][object.rarity]
            } else {
                var asc_materials = level_list_detail[i][type + "_asc"]
            }
            for (var ii = 0; ii < asc_materials.length; ii++) {
                if (required.length <= ii) {
                    required.push(0);
                }
                required[ii] += asc_materials[ii];
            }
        }
    }

    return required;
}

function level_asc_materials_show(low, high, type, parent, object) {
    var required = level_asc_materials_return(low, high, type, object);
    var required_list = level_asc_materials_list_return(type, object);

    for (var i = 0; i < required.length - 1; i++) {
        if (required[i] > 0 && required_list[i]) {
            var item = item_list[required_list[i]];
                parent.appendChild(level_material_create(item, required[i]));
        }
        


    }
    if (required.length > 0) {
        return required[required.length - 1];
    } else {
        return 0;
    }
    
}

function level_asc_materials_list_return(type, object) {
    var result = [];
    if (type == "character") {
        if (object.ascension_special) {

        } else {
            var vision = object.vision;
            for (var i = 0; i < level_asc_vision[vision].length; i++) {
                if (level_asc_vision[vision][i].type == "item") {
                    result.push(level_asc_vision[vision][i].id)
                } else if (level_asc_vision[vision][i].type == "group") {

                    for (var ii = 0; ii < item_group[level_asc_vision[vision][i].id].length; ii++) {

                        result.push(item_group[level_asc_vision[vision][i].id][ii])
                    }
                } else if (level_asc_vision[vision][i].type == "blank") {
                    result.push("")
                }
            }
        }


    } 

    for (var i = 0; i < object.ascension.length; i++) {
        if (object.ascension[i].type == "item") {
            result.push(object.ascension[i].id)
        } else if (object.ascension[i].type == "group") {
            for (var ii = 0; ii < item_group[object.ascension[i].id].length; ii++) {
                result.push(item_group[object.ascension[i].id][ii])
            }
        } else if (object.ascension[i].type == "blank") {
            result.push("")
        }
    }
    return result;
}

function level_material_create(material, required) {
    var div = common_create_obj("div", "level_material_container");
   
    div.appendChild(genshin_icon_create(material));
    var text = common_create_obj("div", "level_material_text");
    div.appendChild(text);
    var name = common_create_obj("p", "level_material_name");
    name.innerHTML = material.name;
    text.appendChild(name);
    var count = common_create_obj("p", "level_material_count");
    count.innerHTML = common_number_spaces(required);
    text.appendChild(count);
    return div;
}

