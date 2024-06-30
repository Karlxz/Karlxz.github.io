// conteiners usados 
let conteiner = document.querySelector("#conteiner");
let menu = document.querySelector("#menuResp");
let sideMenu = document.querySelector("#sideMenu");
let sideMenuData = document.querySelector("#data");

// Menus de Preview
let pielElements = document.querySelectorAll(".imgPreviewPiel");
let accElements = document.querySelectorAll(".imgPreviewAccesorios");

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

    menu.style.width = "20%";
    sideMenu.style.width = "17%";
    sideMenuData.style.width = "83%";
    sideMenuData.style.display = "block";

    for(let piel of pielElements){
        piel.style.display = 'none';
    }

    for(let accesorio of accElements){
        accesorio.style.display = 'none';
    }

    sideMenuData.style.display = "none";

    document.querySelector("#optTranslate").classList.toggle('animation');

    return new Promise((resolve, reject) => {
        resolve()
    });
}

