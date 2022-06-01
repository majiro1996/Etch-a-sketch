//variables
let pSize=27;
let canSize=432;
let quantity=16;
let paintColor="black";

function makeGrid(height,width){
    let container=document.querySelector("#container");
    for(let i=1;i<=(height*width);i++){
        let square=document.createElement("div");
        square.classList.add("squares");
        container.appendChild(square);

    }
    
}
makeGrid(16,16);

let squares=document.querySelectorAll(".squares");
squares.forEach(square=>{
    square.addEventListener("mouseover",function(){square.style.backgroundColor=paintColor});
})








