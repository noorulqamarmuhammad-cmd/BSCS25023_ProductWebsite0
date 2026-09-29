
window.onload = function() {
    alert("Welcome to TechNest!");
};



let year = document.getElementById("year");

if (year != null) {
    year.innerHTML = new Date().getFullYear();
}




function showStock1() {
    document.getElementById("stock1").innerHTML = "In Stock";
}

function showStock2() {
    document.getElementById("stock2").innerHTML = "Out of Stock";
}

function showStock3() {
    document.getElementById("stock3").innerHTML = "In Stock";
}

function showStock4() {
    document.getElementById("stock4").innerHTML = "In Stock";
}

function showStock5() {
    document.getElementById("stock5").innerHTML = "Out of Stock";
}