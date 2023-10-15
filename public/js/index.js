var hamburg = document.getElementById("hamburg");
var sidebar = document.getElementById("sidebar");

hamburg.onclick = () => {
    sidebar.classList.toggle("sideopen");
    hamburg.classList.toggle("hamopen");
}

var bottom = document.getElementsByClassName("bottom")[0];

if (screen.height > 874){
    bottom.style.position = "absolute";
}

var options = document.getElementsByClassName("option");
var underline = document.querySelectorAll(".option div");

for (let i=0; i<options.length; i++){
    options[i].addEventListener("mouseover", () => {
        underline[i].style.transform = "translateX(0px)";
    })
}

for (let i=0; i<options.length; i++){
    options[i].addEventListener("mouseout", () => {
        underline[i].style.transform = "translateX(-100%)";
    })
}