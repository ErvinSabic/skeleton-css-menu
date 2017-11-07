var openOrClosed = 0;

function openNav() {
if (openOrClosed === 0) {
    openOrClosed = 1;
    document.getElementById("menu").style.width = "8em";
}else {
    openOrClosed = 0;
    document.getElementById("menu").style.width = "0";
}

}

function closeNav() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}   