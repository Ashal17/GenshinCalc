function common_debug(mes) {
        console.log("DEBUG|" + mes)
}

function common_error(err) {
    console.log("ERROR|" + err)
}

function common_loading_hide(sleep) {
    setTimeout(_ => {
        document.getElementById("loader_error").style.display = "none";
        document.getElementById("loader").style.display = "none";
        document.getElementById("loader_overlay").style.display = "none";
    }, sleep)   
}

function common_loading_show() {
    document.getElementById("loader").style.display = "initial";
    document.getElementById("loader_overlay").style.display = "initial";
}

function common_loading_show_error(err, mess) {
    common_loading_show();
    document.getElementById("loader_error").style.display = "block";
    if (mess) {
        document.getElementById("loader_error_text").innerHTML = mess;
    } else {
        document.getElementById("loader_error_text").innerHTML = "Error has occured.";
    }
    if (err) {
        common_error(err)
    }
}

async function common_loading(funct) {
    common_loading_show();
    error_count = 0;
    setTimeout(_ => {
        if (funct) {
            try {
                funct();
            } catch (err) {
                error_count++
            }
           
        }       
        if (error_count == 0) {
            common_loading_hide();
        } else {
            common_loading_show_error(err)
        }
    }, 100)
}

async function common_message(text, class_name) {
    var container = document.getElementById("automatic");
    var message = document.createElement('p');
    message.className = "automatic_text fadeout " + class_name;
    message.innerHTML = text;
    container.appendChild(message);

    setTimeout(_ => {
        message.remove();
    }, 3000)
}

function common_radio_showhide(radio_name, obj_pre, obj_post) {
    var radios = document.getElementsByName(radio_name);
    for (i = 0; i < radios.length; i++) {
        var obj = document.getElementById(obj_pre + radios[i].value + obj_post);
        if (radios[i].checked) {
            obj.style.display = "flex";
        } else {
            obj.style.display = "none";
        }
    }

}

function common_radio_get_value(name) {
    var radios = document.getElementsByName(name);

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
            break;
        }
    }
    return null;
}

function common_select_setup(id, text_list, val_list) {
    var select = document.getElementById(id);

    common_clear_select(select);

    if (Array.isArray(text_list)) {
        for (var i = 0; i < text_list.length; i++) {

            var opt = document.createElement("option");
            opt.innerHTML = text_list[i];

            if (val_list && val_list[i]) {
                opt.value = val_list[i];
            } else {
                opt.value = i;
            }
            select.appendChild(opt);
        }
    } else {
        for (var i = 0; i < text_list; i++) {

            var opt = document.createElement("option");
            opt.innerHTML = i;
            opt.value = i;
            select.appendChild(opt);
        }
    }

    
}

function common_select_setup_mass(id_arr, text_list, val_list) {
    for (var i = 0; i < id_arr.length; i++) {
        common_select_setup(id_arr[i], text_list, val_list)
    }
}

function common_select_setup_mass_varid(id_arr, pre, post, text_list, val_list) {
    for (var i = 0; i < id_arr.length; i++) {
        common_select_setup(pre + id_arr[i] + post, text_list, val_list)
    }
}

function common_return_array_parameter_from_id_array(id_array, target, parameter) {
    var result = [];

    for (var i = 0; i < id_array.length; i++) {
        result.push(target[id_array[i]][parameter]);
    }
    return result;
}

function common_return_array_from_int(first, last, pre, post) {
    var result = [];
    if (first < last) {
        for (var i = first; i < (last + 1); i++) {
            result.push(pre + i + post)
        }
    } else {
        for (var i = first; i > (last - 1); i--) {
            result.push(pre + i + post)
        }
    }
    
    return result;
}

function common_clear_select(select) {
    while (select.options.length > 0) {
        select.remove(0);
    }
}

function common_clear_children(obj, limit) {
    while (obj.childNodes.length > limit) {
        obj.removeChild(obj.lastChild);
    }
}

function common_delete(id) {
    if (document.contains(document.getElementById(id))) {
        document.getElementById(id).remove();
    }
}

function common_get_child_by_class(parent, class_name) {
    var result = null;
    for (var i = 0; i < parent.childNodes.length; i++) {
        if (parent.childNodes[i].className.includes(class_name)) {
            result = parent.childNodes[i];
            break;
        }
    }
    return result;
}

function common_lookup_parameter(array, parameter, value, caseinsensitive) {
    if (caseinsensitive) {
        return array.findIndex(x => x[parameter].toLowerCase() == value.toLowerCase());
    } else {
        return array.findIndex(x => x[parameter] == value);
    }
}

function common_lookup_parameter_exist(array, parameter, value, caseinsensitive) {
    if (caseinsensitive) {
        value = value.toLowerCase();        
    } else {
        return array.findIndex(x => x[parameter] == value);
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i][parameter]) {
            if (caseinsensitive) {
                if (array[i][parameter].toLowerCase() == value) {
                    return i;
                }
            } else {
                if (array[i][parameter] == value) {
                    return i;
                }
            }
        }
    }

    return -1;
}

function common_lookup_index(array, value) {
    return array.findIndex(x => x == value);
}

function common_lookup_property(object, parameter, value) {

    var key_names = Object.keys(object);

    for (var i = 0; i < key_names.length; i++) {
        if (object[key_names[i]][parameter] == value) {
            return key_names[i];
        }
    }
}

function common_sort_array(arr, key) {
    if (key) {
        arr.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
    } else {
        arr.sort();
    }
    return arr;
}

function common_create_statline(left_text, right_text, inactive, line_class, left_class, right_class) {

    var line = common_create_obj("div", "line");

    if (line_class) {
        line.className = "line " + line_class;
    }

    var left = common_create_obj("p");
    var right = common_create_obj("p");
    if (inactive) {
        left.className = "inactive";
        right.className = "inactive";
    } else {
        if (left_class) {
            left.className = left_class;
        }
        if (right_class) {
            right.className = right_class;
        } else {
            right.className = "result";
        }
    }

    


    line.appendChild(left);
    if (right_text != undefined) {
        line.appendChild(right);
    }
   
    left.innerHTML = left_text;
    right.innerHTML = right_text;

    return line;
}

function common_create_tablerow(rowdata, rowclass) {

    var tr = common_create_obj("tr", rowclass)

    for (var i = 0; i < rowdata.length; i++) {
        var td = common_create_obj("td");
        td.innerHTML = rowdata[i];
        tr.appendChild(td);
    }

    return tr;
}

function common_create_obj(type, classes, content, id) {
    var newobj = document.createElement(type);
    if (classes) {
        newobj.className = classes
    }
    if (content) {
        newobj.innerHTML = content;
    }
    if (id) {
        newobj.id = id;
    }
    return newobj;
}

function common_number_spaces(num) {
    if (num) {
        var result = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    } else {
        var result = num;
    }
    return result;
}

function common_array_set_value(array, value) {
    for (var i = 0; i < array.length; i++) {
        array[i] = value;
    }
}

function common_input_decimal(input_id, dec, min, max) {
    var input_obj = document.getElementById(input_id);
    var input_val = input_obj.value;

    if (isNaN(input_val) || input_val == "") { input_val = 0; input_obj.value = ""; } else {
        input_val = Number(input_val);
        if (input_val > max) {
            input_val = max
        } else if (input_val < min) {
            input_val = min
        }
        input_val = Math.round(input_val * Math.pow(10, dec)) / Math.pow(10, dec);
        input_obj.value = input_val;
    }

    return input_val;

}

function common_url_secure_base64(convert) {
    while (convert.length % 6 > 0) {
        convert += "0";
    }
    return base_convert(convert, 2, 64);
}

function common_url_save_int(i, limit) {
    var convert = base_convert(i, 10, 2);
    while (convert.length < limit) {
        convert = "0" + convert;
    }
    return convert;
}

function common_url_save_input(input, limit) {
    var convert = input.toString();

    while (convert.length < limit) {
        convert = "0" + convert;
    }

    while (convert.length > limit) {
        convert = convert.pop();
    }

    return convert;
}

function common_url_clear(url) {
    try {
        history.replaceState(null, '', url);
    }
    catch (err) {
        console.log(err);
    }
}


function common_url_short(old_url) {

    new_url = "";
    sub_url = 0;

    for (var i = 0; i < old_url.length; i++) {
        if (old_url[i] == "0" && sub_url < 63) {
            sub_url++;

            if (i == (old_url.length - 1)) {
                if (sub_url > 1) {
                    sub_url64 = base_convert(sub_url, 10, 64)
                    new_url += "!" + sub_url64;
                } else {
                    new_url += "0";
                }
            }
        } else {
            if (sub_url == 1) {
                new_url += "0";
            } else if (sub_url > 0) {
                sub_url64 = base_convert(sub_url, 10, 64)
                new_url += "!" + sub_url64;
            }
            if (old_url[i] == "0" && sub_url == 63) {
                sub_url = 1;
            } else {
                sub_url = 0;
                new_url += old_url[i];
            }
        }
    }
    return new_url;
}

function common_url_long(old_url) {

    var new_url = "";

    var sub_url = false;

    if (old_url) {
        for (var i = 0; i < old_url.length; i++) {



            if (old_url[i] == "!") {
                sub_url = true;

            } else if (sub_url == true) {
                sub_url = false;

                var count = base_convert(old_url[i], 64, 10);

                for (var j = 0; j < count; j++)

                    new_url += "0";

            } else {
                new_url += old_url[i];
            }


        }
    }

    
    return new_url;
}

function common_url_generate(pre_url, url_data, test_mode) {

    if (test_mode != true) {
        var url = pre_url + "?" + url_data;

        console.log(url_data);
        localStorage.setItem("last_url", url_data);
        try {
            history.replaceState(null, '', url);
        }
        catch (err) {
            console.log(err);
        }
    }

}


function common_apply_select(input, select_id) {
    document.getElementById(select_id).value = input;
}

function common_apply_select_reload(input, select_id) {
    document.getElementById(select_id).value = input;
    $("#" + select_id).select2({
        minimumResultsForSearch: 1
    });
}

function common_apply_radio(input, radio_name) {
    var radios = document.getElementsByName(radio_name);
    for (var j = 0; j < radios.length; j++) {

        if (input == radios[j].value) {
            radios[j].checked = true;
        } else {
            radios[j].checked = false;
        }
    }
}



function common_construct_prompt(func, text, btn, class_name) {

    if (document.getElementById("setup_prompt")) {
        common_destroy(document.getElementById("setup_prompt"))
    }

    if (typeof btn == "string") {
        var parent = document.getElementById(btn).parentElement;
    } else {
        var parent = btn.parentElement;
    }

    var prompt = document.createElement('div');
    if (class_name) {
        prompt.className = "setup_prompt " + class_name;
    } else {
        prompt.className = "setup_prompt";
    }
    
    prompt.id = "setup_prompt";
    parent.appendChild(prompt);

    var textline = document.createElement('p');
    textline.innerHTML = text;
    prompt.appendChild(textline);

    var line = document.createElement('div');
    line.className = "line_4";
    prompt.appendChild(line);

    var accept = document.createElement('button');
    accept.innerHTML = "\u2713";
    accept.className = "setup_button";
    accept.onclick = function () { func(); common_destroy(prompt); };
    accept.addEventListener("keyup", function (event) {
        if (event.keyCode === 27) {
            event.preventDefault();
            common_destroy(prompt);
        }
    });
    line.appendChild(accept);
    accept.focus();

    var decline = document.createElement('button');
    decline.innerHTML = "&#10006";
    decline.className = "setup_button";
    decline.onclick = function () { common_destroy(prompt); };
    line.appendChild(decline);

}

function common_construct_prompt_input(func, text, btn, default_input, input_type, input_class) {

    if (document.getElementById("setup_prompt")) {
        common_destroy(document.getElementById("setup_prompt"))
    }

    if (typeof btn == "string") {
        var parent = document.getElementById(btn).parentElement;
    } else {
        var parent = btn.parentElement;
    }

    var prompt = document.createElement('div');
    prompt.className = "setup_prompt setup_prompt_input";
    prompt.id = "setup_prompt";
    parent.appendChild(prompt);

    var textline = document.createElement('p');
    textline.innerHTML = text;
    prompt.appendChild(textline);

    
    if (input_type) {
        var inputline = document.createElement(input_type);
    } else {
        var inputline = document.createElement('input');
        inputline.type = "text";
    }
    if (input_class) {
        inputline.className = input_class;
    }
    inputline.value = default_input;
    inputline.id = "setup_prompt_input";
    if (input_type != "textarea") {
        inputline.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                func();
                common_destroy(prompt);
            }
        });
        inputline.addEventListener("keyup", function (event) {
            if (event.keyCode === 27) {
                event.preventDefault();
                common_destroy(prompt);
            }
        });
    }
    
    prompt.appendChild(inputline);

    var line = document.createElement('div');
    line.className = "line_4";
    prompt.appendChild(line);

    var accept = document.createElement('button');
    accept.innerHTML = "\u2713";
    accept.className = "setup_button";
    accept.onclick = function () { func(); common_destroy(prompt); };
    line.appendChild(accept);

    var decline = document.createElement('button');
    decline.innerHTML = "&#10006";
    decline.className = "setup_button";
    decline.onclick = function () { common_destroy(prompt); };
    line.appendChild(decline);

    inputline.focus();
}

function common_destroy(obj) {

    //var obj = document.getElementById(id);

    while (obj.childNodes.length > 0) {
        obj.removeChild(obj.lastChild);
    }
    if (obj.parentNode) {
        obj.parentNode.removeChild(obj);
    }
    
}

function common_create_radio(radio_class, checkmark_class, radio_value, radio_name, checked) {
    var label = common_create_obj("label", radio_class)
    var input = common_create_obj("input")
    input.value = radio_value;
    input.type = "radio";
    input.name = radio_name;
    if (checked) {
        input.checked = "checked";
    }
    label.appendChild(input);

    var checkmark = common_create_obj("span", checkmark_class)

    label.appendChild(checkmark);

    return label;
}

function common_create_checkbox(check_class, checkmark_class, check_value, check_name, checked, check_id){
    var label = common_create_obj("label", check_class);
    var input = common_create_obj("input", false, false, check_id);
    input.value = check_value;
    input.type = "checkbox";
    input.name = check_name;
    if (checked) {
        input.checked = "checked";
    }

    label.appendChild(input);

    var checkmark = common_create_obj("span", checkmark_class)

    label.appendChild(checkmark);

    return label;
}

function common_load_local_to_checkbox(local_id, checkbox_id) {
    if (checkbox_id == undefined) {
        checkbox_id = local_id;
    }
    var checked = localStorage.getItem(local_id);
    if (checked == "true") {
        document.getElementById(checkbox_id).checked = "checked";
    }
    return checked;
}

function common_set_checkbox_to_local(local_id, checkbox_id) {
    if (checkbox_id == undefined) {
        checkbox_id = local_id;
    }
    var checked = document.getElementById(checkbox_id).checked;
    localStorage.setItem(local_id, checked);
    return checked;
}

function common_count_array_occurance(array, val) {
    var res = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == val) {
            res++;
        }
    }
    return res;
}

function common_copy_array_structure(iarray) {

    var oarray = [];

    for (var i = 0; i < iarray.length; i++) {
        if (Array.isArray(iarray[i])) {
            oarray.push(common_copy_array_structure(iarray[i]))
        } else {
            oarray.push(0)
        }
        
    }

    return oarray;
}

function common_copy_localStorage(item1, item2) {
    var value = localStorage.getItem(item1);
    value = common_localStorage_nullcheck(value);
    localStorage.setItem(item2, value);
}

function common_swap_localStorage(item1, item2) {
    var value1 = localStorage.getItem(item1);
    value1 = common_localStorage_nullcheck(value1);
    var value2 = localStorage.getItem(item2);
    value2 = common_localStorage_nullcheck(value2);
    localStorage.setItem(item2, value1);
    localStorage.setItem(item1, value2);
}

function common_localStorage_nullcheck(value) {
    if (value == null || value == "null") { return "" } else {return value}
}

function common_create_btn(func, text, btn_id) {
    var btn = document.createElement('div');
    btn.className = "equip_button";
    btn.innerHTML = text;
    btn.onclick = function () { func(); };

    if (btn_id) {
        btn.id = btn_id;
    }

    return btn;
}

function common_create_img_btn(btn_id, icon_class, func, hover_text) {
    var btn = document.createElement('div');
    btn.id = btn_id;
    btn.className = "img_button";

    var icon = document.createElement('div');
    icon.className = "img_icon svg svg-" + icon_class;
    icon.onclick = function () { func(); };
    btn.appendChild(icon);

    var btn_hover = document.createElement('div');
    btn_hover.className = "img_button_hover";
    btn_hover.innerHTML = hover_text;
    btn.appendChild(btn_hover);

    return btn;

}


function common_set_cookie(cname, cvalue, exminutes) {
    var d = new Date();
    d.setTime(d.getTime() + (exminutes * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;domain=ashal.eu;samesite=lax";
}

function common_get_cookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function common_random(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function common_copy_clipboard(copiedtext, displayedtext, parent) {
    var text_area = document.createElement("textarea");
    text_area.value = copiedtext;
    parent.appendChild(text_area);
    text_area.focus();
    text_area.select();
    text_area.setSelectionRange(0, 99999);
    document.execCommand("copy");
    common_message(displayedtext, "automatic_blue")
    parent.removeChild(text_area);
}

function common_capitalize(input) {
    if (typeof input !== 'string') return ''
    return input.charAt(0).toUpperCase() + input.slice(1)
}

function common_check_decimal_scale(num) {
    result = 0;
    while (num < 1) {
        num = num * 10;
        result++;
    }
    return Math.pow(10, result);
}

function common_round_number(num, min_rounding) {
    var rounding = common_check_decimal_scale(num)
    if (rounding > min_rounding) {
        var result = Math.round(num * rounding * min_rounding) / (rounding * min_rounding);
    } else {
        var result = Math.round(num * min_rounding) / min_rounding;
    }
    return result
}


