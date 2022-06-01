//varibles
let pSize=27
let canSize=432
let quantity=16
makeGrid(16,16);
function makeGrid(height,width){
    let container=document.querySelector("#container");
    for(let i=1;i<=(height*width);i++){
        let square=document.createElement("div");
        square.classList.add("squares")
        container.appendChild(square);

    }
    
}

/*function removePixel(canvas){
    while (canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
}*/

window.addEventListener("click")







