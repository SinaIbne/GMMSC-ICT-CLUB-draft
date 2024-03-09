// Function of Menu bar
var x = document.getElementById("func");
var y = 0;

function luka() {
    if (y == 0) {
        x.style.display = "grid";
        y = 1;
    }
    else {
        x.style.display = "none";
        y = 0;
    }
}