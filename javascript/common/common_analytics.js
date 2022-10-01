const token_name = "ashal_test";
const session_name = "ashal_session_test";

function analytics_send() {
    var json = {};

    json.data = analytics_data_get();

    var JSONData = JSON.stringify(json);

    $.ajax(
        {
            url: '/php/analytics.php',
            type: 'POST',
            data: JSONData,
            error: function (xhr, status, error) {
                var err = JSON.parse(xhr.responseText);
                alert(err.code + " - " + err.error + "\n" + err.message);
                accs_debug(err.code + " - " + err.error + "\n" + err.message);

            },
            success: function () {


            }
        }


    );

}

function analytics_data_get() {
    var data = {};

    data.token = analytics_token_get();
    data.new = analytics_session_get();
    data.host = window.location.host;
    data.path = window.location.pathname;
    data.query = window.location.search;

    return data;
}

function analytics_token_get() {

    var cookie = common_get_cookie(token_name);

    analytics_token_set(cookie);


    var token = common_get_cookie(token_name);

    return token;
}

function analytics_token_set(cookie) {

    if (cookie) {
        var value = cookie;
    } else {
        var value = common_random(64);
    }

    common_set_cookie(token_name, value, 365 * 24 * 60);

}

function analytics_session_get() {
    var cookie = common_get_cookie(session_name);

    common_set_cookie(session_name, 1, 30);
    if (cookie) {
        return 0;
    } else {
        return 1;
    }



}
