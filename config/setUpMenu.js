let divTranslate = document.querySelector(".translate");
let divResize = document.querySelector(".resize");

function setUpMenu(){

    // if(divTranslate && divResize){
        divTranslate.style.display = "none";
        divResize.style.display = "none";
    // }
    
    return new Promise(function(resolve, reject) {
        resolve();
    });
}
