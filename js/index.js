/**
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
 */

window.onload = function () {

    var ar_up = document.getElementById("arrow_up");
    ar_up.addEventListener('click', function (event) {
            popup_bottom_bits();
    }, false);
    ar_up.addEventListener('blur', function (event) {
        document.getElementById("popup_bottom").style.display = "none";
    }, false);
};

document.onclick = function(e){

    var target = (e && e.target) || (event && event.srcElement);
    while (target.parentNode) {
        if (target.id == "popup_bottom" || target.id == "arrow_up") {
            return;
        }
        target = target.parentNode;
    }
    popup_bottom.style.display = "none";

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

function popup_bottom_bits(){
    var element = document.getElementById('popup_bottom');
    style = window.getComputedStyle(element);
    display = style.getPropertyValue('display');
    if(display == 'none') {
        document.getElementById("popup_bottom").style.display = "block";
    }
    else{
        document.getElementById("popup_bottom").style.display = "none";
    }
}