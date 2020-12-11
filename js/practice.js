var image = document.getElementById("back");

function change1() {
    image.src="img/back/3.jpg";
}

function change2() {
    image.src="img/back/4.jpg";
}

function change3() {
    image.src="img/back/5.jpg";
}

function change4() {
    image.src="img/back/6.jpg";
}

function change5() {
    image.src="img/back/7.jpg";
}

function set(){
    setTimeout(change1, 5000);
    setTimeout(change2, 8000);
    setTimeout(change3, 11000);
    setTimeout(change4, 14000);
    setTimeout(change5, 17000);
}

window.addEventListener("load", function () {
    setInterval(set, 15000);
    
})