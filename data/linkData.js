let imgCaras = document.querySelectorAll("#caras");
let imgOjos = document.querySelectorAll("#ojos");
let imgCejas = document.querySelectorAll("#cejas");
let imgNarices = document.querySelectorAll("#narices");
let imgLabios = document.querySelectorAll("#labios");
let imgOrejas = document.querySelectorAll("#orejas");
let imgPapadas = document.querySelectorAll("#papadas");
let imgCachetes = document.querySelectorAll("#cachetes");
let imgArrugasEntrecejo = document.querySelectorAll("#arrugasEntrecejo");
let imgArrugasPerioculares = document.querySelectorAll("#arrugasPerioculares");
let imgArrugasNasogenianas = document.querySelectorAll("#arrugasNasogenianas");
let imgArrugasPeribucales = document.querySelectorAll("#arrugasPeribucales");
let imgAcne = document.querySelectorAll("#acne");
let imgCicatrices = document.querySelectorAll("#cicatrices");
let imgPecas = document.querySelectorAll("#pecas");
let imgVerrugasyLunares = document.querySelectorAll("#verrugasyLunares");
let imgHoyoMenton = document.querySelectorAll("#hoyoMenton");
let imgAsimetrias = document.querySelectorAll("#asimetrias");
let imgTorus = document.querySelectorAll("#torus");
let imgCabelleras = document.querySelectorAll("#cabelleras");
let imgBigotes = document.querySelectorAll("#bigotes");
let imgBarbas = document.querySelectorAll("#barbas");
let imgAretes = document.querySelectorAll("#aretes");
let imgLentes = document.querySelectorAll("#lentes");
let imgSombreros = document.querySelectorAll("#sombreros");
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

    if(divMasc && divFem){
        divMasc.style.display = 'block';
        divFem.style.display = 'none';
    }
    
    if(imgCaras.length!=0){
        for (let i = 0; i < 54; i++){
            imgCaras[i].src = openData(i);
        }
    }

    if(imgOjos.length != 0){
        for (let i = 0; i < 74; i++){
            imgOjos[i].src = openData(i+54);
        }
    }

    if(imgCejas.length != 0){
        for (let i = 0; i < 30; i++){
            imgCejas[i].src = openData(i+128);
        }
    }

    if(imgNarices.length != 0){
        for (let i = 0; i < 24; i++){
            imgNarices[i].src = openData(i+158);
        }
    }

    if(imgLabios.length != 0){
        for (let i = 0; i < 30; i++){
            imgLabios[i].src = openData(i+182);
        }
    }

    if(imgOrejas.length != 0){
        for (let i = 0; i < 18; i++){
            imgOrejas[i].src = openData(i+212);
        }
    }

    if(imgPapadas.length != 0){
        for (let i = 0; i < 18; i++){
            imgPapadas[i].src = openData(i+230);
        }
    }

    if(imgCachetes.length != 0){
        for (let i = 0; i < 12; i++){
            imgCachetes[i].src = openData(i+248);
        }
    }

    if(imgArrugasEntrecejo.length != 0){
        for (let i = 0; i < 18; i++){
            imgArrugasEntrecejo[i].src = openData(i+260);
        }
    }

    if(imgArrugasPerioculares.length != 0){
        for (let i = 0; i < 18; i++){
            imgArrugasPerioculares[i].src = openData(i+278);
        }
    }

    if(imgArrugasNasogenianas.length != 0){
        for (let i = 0; i < 18; i++){
            imgArrugasNasogenianas[i].src = openData(i+296);
        }
    }

    if(imgArrugasPeribucales.length != 0){
        for (let i = 0; i < 18; i++){
            imgArrugasPeribucales[i].src = openData(i+314);
        }
    }

    if(imgAcne.length != 0){
        for (let i = 0; i < 8; i++){
            imgAcne[i].src = openData(i+332);
        }
    }

    if(imgCicatrices.length != 0){
        for (let i = 0; i < 4; i++){
            imgCicatrices[i].src = openData(i+340);
        }
    }

    if(imgPecas.length != 0){
        for (let i = 0; i < 2; i++){
            imgPecas[i].src = openData(i+344);
        }
    }

    if(imgVerrugasyLunares.length != 0){
        for (let i = 0; i < 10; i++){
            imgVerrugasyLunares[i].src = openData(i+346);
        }
    }

    if(imgHoyoMenton.length != 0){
        for (let i = 0; i < 12; i++){
            imgHoyoMenton[i].src = openData(i+356);
        }
    }

    if(imgAsimetrias.length != 0){
        for (let i = 0; i < 7; i++){
            imgAsimetrias[i].src = openData(i+368);
        }
    }

    if(imgTorus.length != 0){
        for (let i = 0; i < 3; i++){
            imgTorus[i].src = openData(i+375);
        }
    }

    if(imgCabelleras.length != 0){
        for (let i = 0; i < 126; i++){
            imgCabelleras[i].src = openData(i+378);
        }
    }

    if(imgBigotes.length != 0){
        for (let i = 0; i < 17; i++){
            imgBigotes[i].src = openData(i+504);
        }
    }

    if(imgBarbas.length != 0){
        for (let i = 0; i < 10; i++){
            imgBarbas[i].src = openData(i+521);
        }
    }

    if(imgAretes.length != 0){
        for (let i = 0; i < 12; i++){
            imgAretes[i].src = openData(i+531);
        }
    }

    if(imgLentes.length != 0){
        for (let i = 0; i < 19; i++){
            imgLentes[i].src = openData(i+543);
        }
    }

    if(imgSombreros.length != 0){
        for (let i = 0; i < 18; i++){
            imgSombreros[i].src = openData(i+562);
        }
    }
    
    return new Promise(function(resolve, reject) {
        resolve();
    });
}
