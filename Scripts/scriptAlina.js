var a = 0;
function AddBrick() {
    var i = Math.floor((Math.random()*images.length));
    document.getElementById("page").innerHTML += "<div id=\"" + a + "\" class=\"brick center-50\">" +
        "<img width=\"600\" src=\""+images[i]+"\"></div>";
    a++;
}
function DeleteBrick() {
    if (a > 0) {
        var parent = document.getElementById("page");
        var child = document.getElementById(a - 1);
        parent.removeChild(child);
        a--;
    }
}

function AddOver() {
    document.getElementById("Add").style.background = "#71DDE3";
}

function AddOut() {
    document.getElementById("Add").style.background = "#FFF";
}

var images = [
    "https://pp.userapi.com/c626626/v626626657/4cbcd/v33iG4dgSjU.jpg",
    "https://pp.userapi.com/c847021/v847021423/92e3d/c3RogWpYzkY.jpg",
    "https://pp.userapi.com/c849236/v849236923/22639/f_gND2QNU1E.jpg",
    "https://pp.userapi.com/c846416/v846416918/8f0ad/AWJqq-h1NLs.jpg",
    "https://pp.userapi.com/c845217/v845217918/9603c/skcztbJZyK0.jpg"
];