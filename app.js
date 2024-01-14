
function getNewColor(x, y) {

    const r = Math.round(x*255);
    const b = Math.round(y*255);

    return `rgb(${r},0,${b})`;
}

document.addEventListener("mousemove", function (event) {
    const px = event.pageX;
    const py = event.pageY;

    const maxPX = window.innerWidth;
    const maxPY = window.innerHeight;

    const ratioX = px / maxPX;
    const ratioY = py / maxPY;
    
   document.body.style.backgroundColor = getNewColor(ratioX, ratioY);
});