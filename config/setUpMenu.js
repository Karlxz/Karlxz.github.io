let divNothing = document.querySelector(".nothing");
let divTranslate = document.querySelector(".translate");
let divResize = document.querySelector(".resize");
let divRotate = document.querySelector(".rotate");

function setUpMenu(){

    // if(divTranslate && divResize){
        divNothing.style.display = "block";
        divTranslate.style.display = "none";
        divResize.style.display = "none";
        divRotate.style.display = "none";
    // }
    
    return new Promise(function(resolve, reject) {
        resolve();
    });
}
