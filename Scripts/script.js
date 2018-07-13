var count = 0;

function Add() {
    count++;
    var main = document.getElementById("main");
    main.innerHTML += "<div id=\"" + count + "\" class=\"brick\"></div>";

}

function Delete() {
    if (count > 0) {
        var elem = document.getElementById(count);
        elem.remove();

        count--;
    }
}

function WriteName() {
    document.getElementById("header").innerHTML = document.getElementById("loginTextBox").value;
}