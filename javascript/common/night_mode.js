
function set_night_mode(id) {

    var toggle = document.getElementById(id);
    var night_mode = 0;

    if (toggle.checked) {
        night_mode = 1;
    }

    localStorage.setItem("night_mode", night_mode);

    apply_night_mode(night_mode);
}

function get_night_mode(id) {

    var night_mode = localStorage.getItem("night_mode");

        apply_night_mode(night_mode)
    show_toggle(id)
}



function show_toggle(id){
    var night_mode = localStorage.getItem("night_mode");

    //console.log("Show toggle: " + night_mode);

    if (night_mode != null) {
        var toggle = document.getElementById(id);

        if (night_mode == 1) {
            toggle.checked = true;
        } else {
            toggle.checked = false;
        }
    }
}

function apply_night_mode(night_mode) {

    var body = document.getElementsByTagName("BODY")[0]; 

    if (night_mode == 1) {
        body.className = "light_theme"
        console.log("Night theme off");

    } else {
        body.className = "dark_theme"
        console.log("Night theme on");

    }


}

function apply_theme(theme_val) {
    var style_class = "dark_theme";
    switch (theme_val) {
        case "night":
            var style_class = "dark_theme";
            break;
        case "light":
            var style_class = "light_theme";
            break;
        case "mono":
            var style_class = "mono_theme";
            break;
    }
    var body = document.getElementsByTagName("BODY")[0];
    body.className = style_class;

    //if (theme_val) {
    //    document.getElementById("logo").src = "/images/graphics/logo_" + theme_val + ".png"
    //}   
    //console.log(style_class + " ON");   
}


function change_theme(name) {
    var radio_val = get_theme_value(name);
    localStorage.setItem("theme", radio_val);   
    apply_theme(radio_val)
}

function load_theme(name) {
    radio_val = localStorage.getItem("theme");
    apply_theme(radio_val);
    set_theme_value(name, radio_val);
}


function get_theme_value(name) {
    var radios = document.getElementsByName(name);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
            break;
        }
    }
    return "none";
}

function set_theme_value(name, val) {
    var radios = document.getElementsByName(name);
    var default_theme = true;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value == val) {
            radios[i].checked = true;
            default_theme = false;
        } else {
            radios[i].checked = false;
        }
    }
    if (default_theme) {
        radios[0].checked = true;
    }
}

