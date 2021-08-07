"use strict";

var links = document.getElementsByTagName("a");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var i = _step.value;

    if (i.href.startsWith("https://salebot.site/r/")) {
      if (i.href.split("?").length > 1) {
        i.href += "&" + location.search.split("?")[1];
      } else {
        i.href += location.search;
      }
    }
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var links = document.getElementsByTagName("a");
var cookies = ['_fbc', '_fbp', '_ga', '_ym_uid', 'roistat_visit'];
var cookies_string = '';
cookies.forEach(function (cookie_name) {
  var cookie_val = get_cookie(cookie_name);

  if (cookie_val !== undefined) {
    cookies_string += (cookies_string != '' ? "&" : '') + cookie_name + "='" + cookie_val + "'";
  }
});
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _i = _step2.value;

    if (_i.href.startsWith("https://salebot.site/r/")) {
      if (_i.href.split("?").length > 1) {
        _i.href += "&" + cookies_string;
      } else {
        _i.href += "?" + cookies_string;
      }
    }
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

function get_cookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}