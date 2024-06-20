// conteiners usados 
let conteiner = document.querySelector("#conteiner");
let menu = document.querySelector("#menuResp");
let sideMenu = document.querySelector("#sideMenu");
let sideMenuData = document.querySelector("#data");

// Menus de Preview
let pielElements = document.querySelectorAll(".imgPreviewPiel");
let accElements = document.querySelectorAll(".imgPreviewAccesorios");

//Imagenes como tal
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

// Referente al cambio de sexo
let divMasc = document.querySelectorAll(".masc");
let divFem = document.querySelectorAll(".fem");
let btnMasc = document.querySelectorAll("#masculino");
let btnFem = document.querySelectorAll("#femenino");

function setup(){
    let sideMenuData = document.querySelector("#data");

    // if(divMasc && divFem){
    //     divMasc.style.display = 'block';
    //     divFem.style.display = 'none';
    // }

    for(let piel of pielElements){
        piel.style.display = 'none';
    }

    for(let accesorio of accElements){
        accesorio.style.display = 'none';
    }

    sideMenuData.style.display = "none";


    //Show Data
    // putSource(imgCaras,54,0);

    
    
    

    return new Promise((resolve, reject) => {
        resolve()
    });
}


function iframeLoaded(pp) {
    let wnd = pp.contentWindow;
    console.log("I enter iframe");
    window.addEventListener("message", onMessage);
}