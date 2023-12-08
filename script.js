let width;
let length;
let diagonal;
let perimeter;
let area;

document.getElementById("buttonCalculate").onclick = function() {
    width = document.getElementById("inputWidth").value;
    width = parseFloat(width);
    length = document.getElementById("inputLength").value;
    length = parseFloat(length);
    diagonal = Math.sqrt(width**2 + length**2);
    perimeter = 2 * (width + length);
    area = width * length;
    document.getElementById("labelDiagonal").innerHTML = diagonal.toFixed(2);
    document.getElementById("labelPerimeter").innerHTML = perimeter.toFixed(2);
    document.getElementById("labelArea").innerHTML = area.toFixed(2);
    document.getElementById("labelDiagonal").style.backgroundColor = "blue";
    document.getElementById("labelPerimeter").style.backgroundColor = "blue";
    document.getElementById("labelArea").style.backgroundColor = "blue";

}

document.getElementById("buttonClear").onclick = function() {
    document.getElementById("inputWidth").value = "";
    document.getElementById("inputLength").value = "";
    document.getElementById("labelDiagonal").innerHTML = "";
    document.getElementById("labelPerimeter").innerHTML = "";
    document.getElementById("labelArea").innerHTML = "";
    document.getElementById("labelDiagonal").style.backgroundColor = "white";
    document.getElementById("labelPerimeter").style.backgroundColor = "white";
    document.getElementById("labelArea").style.backgroundColor = "white";
}