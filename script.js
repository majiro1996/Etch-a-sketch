//variables
let canSize=500;
let quantity=16;
let paintColor="black";
let mouseIsDown = false;
//create the grid
function makeGrid(number){
    let container=document.querySelector("#container");
    removeAllChildNodes(container);
    for(let i=1;i<=(quantity);i++){
        let wrap=document.createElement("div");
        wrap.classList.add("wrap");
        wrap.classList.add(i);
        container.appendChild(wrap);
        for(let b=1;b<=number;b++){
            let square=document.createElement("div");
            square.classList.add("squares");
            wrap.appendChild(square);
        }

    }
    paint()
}
makeGrid(16);

//function to remove al child nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//to keep track if the mouse if down or not
window.addEventListener('mousedown',function() {
    mouseIsDown = true;
});
window.addEventListener('mouseup',function() {
    mouseIsDown = false;
});

//change color event listener
function paint(){
    let squares=document.querySelectorAll(".squares");
    squares.forEach(square=>{
        square.style.height=(100/quantity)+"%";
        square.addEventListener("mouseover",function(){
            if (mouseIsDown===true){
            square.style.backgroundColor=paintColor}

        });
        square.addEventListener("mousedown",function(){
            square.style.backgroundColor=paintColor

        });
  
        
    });

}
//change canvas size


//Amount of squares slider
let att=document.querySelector("#sizeSlider");
att.oninput= function(){
    quantity=att.value;
    makeGrid(quantity);
    let slider=document.querySelector("#sliderRange");
    slider.textContent="Grid size "+quantity+"x"+quantity;
}










