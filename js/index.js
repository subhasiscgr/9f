/**
 * Created by Subhasis on 9/13/2018.
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