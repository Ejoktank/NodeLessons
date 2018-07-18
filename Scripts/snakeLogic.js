window.onload = function () {

    var field = document.getElementById("field");
    var taken = document.getElementById("borderBrick");

    var dx = 0;
    var dy = 0;

    var snake = Array;

    for (var i = 0; i < 5; i++) {
        snake[i] = createElementFromHTML("div class=\"border-block\" id=\"num"+i+"\"></div>");        
    }

    for (var i = 0; i < 5; i++) {
        snake[i].style.left = dx;
        dx += 30;
    }

    for (var i = 0; i < 5; i++) {
        field.innerHTML += snake[i].outerHTML;
    }

}


function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild; 
  }
