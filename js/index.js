/*<9f: generic source code for web blog.>
 Copyright (C) 2018  Subhasis Banerjee

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

function retract_all() {
    document.getElementById("popup_bottom").classList.remove('popup_bottom_expand');
    document.getElementById("searchbox2").classList.add('none');
    document.getElementById("popup_settings").classList.remove('popup_settings_expand');
    document.getElementById("popup_settings").classList.remove('popup_settings_expand_inset');
    document.getElementById("loginbox").classList.add('none');

}
window.onload = function () {

    var ar_up = document.getElementById("arrow_up");
    ar_up.addEventListener('click', function (event) {
            popup_bottom_bits();
    }, false);
    var mag_glass = document.getElementById("mag_glass");
    mag_glass.addEventListener('click', function (event) {
        expand_search();
    }, false);
    var settings = document.getElementById("settings");
    settings.addEventListener('click', function (event) {
        expand_settings();
    }, false);
    var settings1 = document.getElementById("settings1");
    settings1.addEventListener('click', function (event) {
        expand_settings_inset();
    }, false);
    var searchbox = document.getElementById("searchbox");
    searchbox.addEventListener('keypress', function (event) {
        search(searchbox);
    }, false);
    searchbox.addEventListener('paste', function (event) {
        search(searchbox);
    }, false);
    var searchbox2 = document.getElementById("searchbox2");
    searchbox2.addEventListener('keypress', function (event) {
        search(searchbox);
    }, false);
    searchbox2.addEventListener('paste', function (event) {
        search(searchbox2);
    }, false);
    var login = document.getElementById("login");
    login.addEventListener('click', function (event) {
        toggle_login_overlay();
    }, false);
    var cancel1 = document.getElementById("cancel1");
    cancel1.addEventListener('click', function (event) {
        toggle_login_overlay();
    }, false);
    document.body.addEventListener('keydown', function(e) {
        if(e.key == "Escape"){
            retract_all();
        }
    });

};
window.onresize = function() {
    retract_all();
}
document.onclick = function(e){

    var target = (e && e.target) || (event && event.srcElement);
    while (target.parentNode) {
        if (target.id == "popup_bottom" || target.id == "arrow_up" || target.id == "settings") {
            return;
        }
        target = target.parentNode;
    }
    document.getElementById("popup_bottom").classList.remove('popup_bottom_expand');
    document.getElementById("popup_settings").classList.remove('popup_settings_expand');
    document.getElementById("popup_settings").classList.remove('popup_settings_expand_inset');

}

function callback(response)
{
    alert(response);
}

function postData(url, data)
{
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && callback)
            callback(request.responseText);
    };
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    request.send(data);
}

function popup_bottom_bits() {
    if (document.getElementById("popup_settings").classList.contains('popup_settings_expand_inset')) {
        document.getElementById("popup_settings").classList.toggle('popup_settings_expand_inset');
    }
    else {
        document.getElementById("popup_bottom").classList.toggle('popup_bottom_expand');

    }
}
function expand_search() {
    document.getElementById("searchbox2").classList.toggle('none');
}
function expand_settings() {
    document.getElementById("popup_settings").classList.toggle('popup_settings_expand');
}
function expand_settings_inset() {
    document.getElementById("popup_settings").classList.toggle('popup_settings_expand_inset');
}
function toggle_login_overlay() {
    document.getElementById("loginbox").classList.toggle('none');
}
