var links = document.getElementsByTagName("a")
for (let i of links) {
    if (i.href.startsWith("https://salebot.site/r/")) {
        if (i.href.split("?").length > 1) {
            i.href += "&" + location.search.split("?")[1]
        } else {
            i.href += location.search
        }
    }
}

var links = document.getElementsByTagName("a")
var cookies = ['_fbc', '_fbp', '_ga', '_ym_uid', 'roistat_visit']
var cookies_string = ''
cookies.forEach(function (cookie_name) {
    let cookie_val = get_cookie(cookie_name);
    if (cookie_val !== undefined) {
        cookies_string += (cookies_string != '' ? "&" : '') + cookie_name + "='" + cookie_val + "'";
    }
})
for (let i of links) {
    if (i.href.startsWith("https://salebot.site/r/")) {
        if (i.href.split("?").length > 1) {
            i.href += "&" + cookies_string
        } else {
            i.href += "?" + cookies_string
        }
    }
}
function get_cookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}