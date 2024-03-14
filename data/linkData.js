let imgCaras = document.querySelectorAll("#caras");
let imgOjos = document.querySelectorAll("#ojos");
let divMasc = document.querySelector(".masc");
let divFem = document.querySelector(".fem");
// let btnCaras = document.querySelector("#caras");
// let btnOjos = document.querySelector("#caras");
// let btnCejas = document.querySelector("#caras");
// let btnNarices = document.querySelector("#caras");
// let btnLabios = document.querySelector("#caras");
// let btnOrejas = document.querySelector("#caras");
// let btnPapadas = document.querySelector("#caras");
// let btnPiel = document.querySelector("#caras");
// let btnHoyoMenton = document.querySelector("#caras");
// let btnAsimetrias = document.querySelector("#caras");
// let btnTorus = document.querySelector("#caras");
// let btnCabello = document.querySelector("#caras");
// let btnBigotes = document.querySelector("#caras");
// let btnBarba = document.querySelector("#caras");
// let btnAccesorio = document.querySelector("#caras");

function linkData(){

    console.log(imgCaras);
    console.log(imgOjos);
    divMasc.style.display = 'block';
    divFem.style.display = 'none';
    
    if(imgCaras.length!=0){
        for (let i = 0; i < 29; i++){
            imgCaras[i].src = openData(i);
        }
    
        for (let i = 29; i < 54; i++){
            imgCaras[i].src = openData(i);
        }
    }

    if(imgOjos.length != 0){
        for (let i = 0; i < 1; i++){
            imgOjos[i].src = openData(i+54);
        }
    }

    return new Promise(function(resolve, reject) {
        resolve();
    });
}
