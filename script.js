//
function makePixel(height,width){
    let container=document.querySelector("#container");
    for(let i=0;i<(height*width);i++){
        let square=document.createElement("div");
        square.classList.add("squares")
        container.appendChild(square);
    }
    
}

makePixel(16,16);