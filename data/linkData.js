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

function putSource(menu, num, offset){
    for (let i = 0; i < num; i++){
        menu[i].src = openData(i + offset);
    }
}

function linkData(){

    if(divMasc && divFem){
        divMasc.style.display = 'block';
        divFem.style.display = 'none';
    }
    
    if(imgCaras.length!=0){
        putSource(imgCaras,54,0);
    }

    if(imgOjos.length != 0){
        putSource(imgCaras,74,54);
    }

    if(imgCejas.length != 0){
        putSource(imgCaras,30,128);
    }

    if(imgNarices.length != 0){
        putSource(imgCaras,24,158);
    }

    if(imgLabios.length != 0){
        putSource(imgCaras,30,182);
    }

    if(imgOrejas.length != 0){
        putSource(imgCaras,18,212);
    }

    if(imgPapadas.length != 0){
        putSource(imgCaras,18,230);
    }

    if(imgCachetes.length != 0){
        putSource(imgCaras,12,248);
    }

    if(imgArrugasEntrecejo.length != 0){
        putSource(imgCaras,18,260);
    }

    if(imgArrugasPerioculares.length != 0){
        putSource(imgCaras,18,278);
    }

    if(imgArrugasNasogenianas.length != 0){
        putSource(imgCaras,18,296);
    }

    if(imgArrugasPeribucales.length != 0){
        putSource(imgCaras,18,314);
    }

    if(imgAcne.length != 0){
        putSource(imgCaras,8,332);
    }

    if(imgCicatrices.length != 0){
        putSource(imgCaras,4,340);
    }

    if(imgPecas.length != 0){
        putSource(imgCaras,2,344);
    }

    if(imgVerrugasyLunares.length != 0){
        putSource(imgCaras,10,346);
    }

    if(imgHoyoMenton.length != 0){
        putSource(imgCaras,12,356);
    }

    if(imgAsimetrias.length != 0){
        putSource(imgCaras,7,368);
    }

    if(imgTorus.length != 0){
        putSource(imgCaras,3,375);
    }

    if(imgCabelleras.length != 0){
        putSource(imgCaras,126,378);
    }

    if(imgBigotes.length != 0){
        putSource(imgCaras,17,504);
    }

    if(imgBarbas.length != 0){
        putSource(imgCaras,10,521);
    }

    if(imgAretes.length != 0){
        putSource(imgCaras,12,531);
    }

    if(imgLentes.length != 0){
        putSource(imgCaras,19,543);
    }

    if(imgSombreros.length != 0){
        putSource(imgCaras,18,562);
    }
    
    return new Promise(function(resolve, reject) {
        resolve();
    });
}
