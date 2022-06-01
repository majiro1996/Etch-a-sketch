//variables
let pSize=27;
let canSize=432;
let quantity=16;
let paintColor="black";
let mouseIsDown = false;
//create the grid
function makeGrid(height,width){
    let container=document.querySelector("#container");
    for(let i=1;i<=(height*width);i++){
        let square=document.createElement("div");
        square.classList.add("squares");
        container.appendChild(square);

    }
    
}
makeGrid(16,16);

//to keep track if the mouse if down or not

window.addEventListener('mousedown',function() {
    mouseIsDown = true;
});
window.addEventListener('mouseup',function() {
    mouseIsDown = false;
});

//change color of squares
let squares=document.querySelectorAll(".squares");
squares.forEach(square=>{
    square.addEventListener("mouseover",function(){
        if (mouseIsDown===true){
        square.style.backgroundColor=paintColor}

    });
    square.addEventListener("click",function(){
        square.style.backgroundColor=paintColor

    });
    
});








