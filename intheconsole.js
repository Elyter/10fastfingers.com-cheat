var n = 1;
function boucle() {

var span = document.getElementsByClassName("highlight")[0]
        document.getElementById("inputfield").value= span.innerHTML + " ";
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        console.log(n++);
    }
}

    setTimeout(boucle, 100);
}
boucle()
