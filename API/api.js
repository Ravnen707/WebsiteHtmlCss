function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var dunno = JSON.parse(this.responseText);

        document.getElementById("test").innerHTML = dunno.toString();
    };
    xhttp.open("GET", "https://ron-swanson-quotes.herokuapp.com/v2/quotes");
    xhttp.send();
}


function loadDoc2(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var dunno2 = Json.parse(this.responseText);

        document.getElementById("test2").innerHTML = dunno2.toString();
    };
    xhttp.open("GET", "https://api.icndb.com/jokes/random")
    xhttp.send();
}