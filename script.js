
let width = document.getElementById("width");
let height = document.getElementById("height");

function updateWidthAndHeight(){
    var pageWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var pageHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    width.innerText=`${pageWidth}`;
    height.innerText=`${pageHeight}`;
}

updateWidthAndHeight();

window.addEventListener("resize", updateWidthAndHeight);



