function showRightMenu(imgShow, allImg){
    for(let el of allImg){
        if(el !== imgShow) el.style.display = "none";
    }
    imgShow.style.display = "block";
}

function putSource(menu, num, offset){
    for (let i = 0; i < num; i++){
        menu[i].src = openData(i + offset);
    }
}

function openMenu(imgWhat, totalImg, offset, dataWhat, allImg, numSexo = null){
    if(menu.offsetWidth <= Math.ceil(conteiner.offsetWidth*0.034)){
        menu.style.width = "20%";
        sideMenu.style.width = "17%";
        sideMenuData.style.width = "83%";
        sideMenuData.style.display = "block";
        if(numSexo != null){
            divMasc[numSexo].style.display = 'block';
            divFem[numSexo].style.display = 'none';
        }
        putSource(imgWhat,totalImg,offset);
        showRightMenu(dataWhat, allImg);
    }else{
        if(dataWhat.style.display == "block"){
            menu.style.width = "3.4%";
            sideMenu.style.width = "100%"
            sideMenuData.style.width = "0%";
            sideMenuData.style.display = "none";
        }else{
            putSource(imgWhat,totalImg,offset);
            showRightMenu(dataWhat, allImg);
            if(numSexo != null){
                divMasc[numSexo].style.display = 'block';
                divFem[numSexo].style.display = 'none';
            }
        }
    }
}

function caramex(){
    // Los botones (img pequeñas al costado) que activan los menus
    let menuPiel = document.querySelector("#menuPiel");
    let menuAcc = document.querySelector("#menuAcc");
    let menuCaras = document.querySelector("#carasPrev");
    let menuOjos = document.querySelector("#ojosPrev");
    let menuCejas = document.querySelector("#cejasPrev")
    let menuNarices = document.querySelector("#naricesPrev");
    let menuLabios = document.querySelector("#labiosPrev");
    let menuOrejas = document.querySelector("#orejasPrev");
    let menuPapadas = document.querySelector("#papadasPrev");
    let menuCachetes = document.querySelector("#cachetesPrev");
    let menuArrugasEntrecejo = document.querySelector("#arrugasEntrecejoPrev");
    let menuArrugasPerioculares = document.querySelector("#arrugasPeriocularesPrev");
    let menuArrugasNasogenianas = document.querySelector("#arrugasNasogenianasPrev");
    let menuArrugasPeribucales = document.querySelector("#arrugasPeribucalesPrev");
    let menuAcne = document.querySelector("#acnePrev");
    let menuCicatrices = document.querySelector("#cicatricesPrev");
    let menuPecas = document.querySelector("#pecasPrev");
    let menuVerrugasyLunares = document.querySelector("#verrugasyLunaresPrev");
    let menuHoyoMenton = document.querySelector("#hoyoMentonPrev");
    let menuAsimetrias = document.querySelector("#asimetriasPrev");
    let menuTorus = document.querySelector("#torusPrev");
    let menuCabelleras = document.querySelector("#cabellerasPrev");
    let menuBigotes = document.querySelector("#bigotesPrev");
    let menuBarbas = document.querySelector("#barbasPrev");
    let menuAretes = document.querySelector("#aretesPrev");
    let menuLentes = document.querySelector("#lentesPrev");
    let menuSombreros = document.querySelector("#sombrerosPrev");

    // Divs que contienen la data ya como tal
    let dataCaras = document.querySelector("#carasMenu");
    let dataOjos = document.querySelector("#ojosMenu");
    let dataCejas = document.querySelector("#cejasMenu");
    let dataNarices = document.querySelector("#naricesMenu");
    let dataLabios = document.querySelector("#labiosMenu");
    let dataOrejas = document.querySelector("#orejasMenu");
    let dataPapadas = document.querySelector("#papadasMenu");
    let dataCachetes = document.querySelector("#cachetesMenu");
    let dataArrugasEntrecejo = document.querySelector("#arrugasEntrecejoMenu");
    let dataArrugasPerioculares = document.querySelector("#arrugasPeriocularesMenu");
    let dataArrugasNasogenianas = document.querySelector("#arrugasNasogenianasMenu");
    let dataArrugasPeribucales = document.querySelector("#arrugasPeribucalesMenu");
    let dataAcne = document.querySelector("#acneMenu");
    let dataCicatrices = document.querySelector("#cicatricesMenu");
    let dataPecas = document.querySelector("#pecasMenu");
    let dataVerrugasyLunares = document.querySelector("#verrugasyLunaresMenu");
    let dataHoyoMenton = document.querySelector("#hoyoMentonMenu");
    let dataAsimetrias = document.querySelector("#asimetriasMenu");
    let dataTorus = document.querySelector("#torusMenu");
    let dataCabelleras = document.querySelector("#cabellerasMenu");
    let dataBigotes = document.querySelector("#bigotesMenu");
    let dataBarbas = document.querySelector("#barbasMenu");
    let dataAretes = document.querySelector("#aretesMenu");
    let dataLentes = document.querySelector("#lentesMenu");
    let dataSombreros = document.querySelector("#sombrerosMenu");
    let allImg = [dataCaras, dataOjos, dataCejas, dataNarices, dataLabios,
    dataOrejas, dataPapadas, dataCachetes, dataArrugasEntrecejo, dataArrugasPerioculares,
    dataArrugasNasogenianas, dataArrugasPeribucales, dataAcne, dataCicatrices,
    dataPecas, dataVerrugasyLunares, dataHoyoMenton, dataAsimetrias, dataTorus,
    dataCabelleras, dataBigotes, dataBarbas, dataAretes, dataLentes, dataSombreros];

    // botones de masculino y femenino
    // let btnMasc = document.querySelectorAll("#masculino");
    // let btnFem = document.querySelectorAll("#femenino");

    for(let i=0; i < btnMasc.length; i++){
        if (btnMasc[i]){
            btnMasc[i].addEventListener("click", ()=>{
                divMasc[i].style.display = 'block';
                divFem[i].style.display = 'none';
            })
        }
    }

    for(let i = 0; i < btnFem.length; i++){
        if(btnFem[i]){
            btnFem[i].addEventListener("click", ()=>{
                divMasc[i].style.display = 'none';
                divFem[i].style.display = 'block';
            })
        }
    }

    menuPiel.addEventListener("click", () => {
        for(let el of pielElements){
            if(el.style.display == "none") el.style.display = 'block';
            else if(el.style.display == "block") el.style.display = 'none';
        }
    });

    menuAcc.addEventListener("click", () => {
        for(let el of accElements){
            if(el.style.display == "none") el.style.display = 'block';
            else if(el.style.display == "block") el.style.display = 'none';
        }
    });

    menuCaras.addEventListener("click", () => {
        openMenu(imgCaras, 54, 0 ,dataCaras, allImg, 0);
    });

    menuOjos.addEventListener("click", () => {
        openMenu(imgOjos, 74, 54, dataOjos, allImg, 1);
    });

    menuCejas.addEventListener("click", () => {
        openMenu(imgCejas, 30, 128, dataCejas, allImg, 2);
    });

    menuNarices.addEventListener("click", () => {
        openMenu(imgNarices, 24, 158, dataNarices, allImg, 3);
    });

    menuLabios.addEventListener("click", () => {
        openMenu(imgLabios, 30, 182, dataLabios, allImg, 4);
    });

    menuOrejas.addEventListener("click", () => {
        openMenu(imgOrejas, 18, 212, dataOrejas, allImg, 5);
    });

    menuPapadas.addEventListener("click", () => {
        openMenu(imgPapadas, 18, 230, dataPapadas, allImg, 6);
    });

    menuCachetes.addEventListener("click", () => {
        openMenu(imgCachetes, 12, 248, dataCachetes, allImg, 7);
    });

    menuArrugasEntrecejo.addEventListener("click", () => {
        openMenu(imgArrugasEntrecejo, 18, 260, dataArrugasEntrecejo, allImg, 8);
    });

    menuArrugasPerioculares.addEventListener("click", () => {
        openMenu(imgArrugasPerioculares, 18, 278, dataArrugasPerioculares, allImg, 9);
    });

    menuArrugasNasogenianas.addEventListener("click", () => {
        openMenu(imgArrugasNasogenianas, 18, 296, dataArrugasNasogenianas, allImg, 10);
    });

    menuArrugasPeribucales.addEventListener("click", () => {
        openMenu(imgArrugasPeribucales, 18, 314, dataArrugasPeribucales, allImg, 11);
    });

    menuAcne.addEventListener("click", () => {
        openMenu(imgAcne, 8, 332, dataAcne, allImg, 12);
    });

    menuCicatrices.addEventListener("click", () => {
        openMenu(imgCicatrices, 4, 340, dataCicatrices, allImg);
    });

    menuPecas.addEventListener("click", () => {
        openMenu(imgPecas, 2, 344, dataPecas, allImg);
    });

    menuHoyoMenton.addEventListener("click", () => {
        openMenu(imgHoyoMenton, 12, 356, dataHoyoMenton, allImg, 13);
    });

    menuAsimetrias.addEventListener("click", () => {
        openMenu(imgAsimetrias, 7, 368, dataAsimetrias, allImg);
    });

    menuTorus.addEventListener("click", () => {
        openMenu(imgTorus, 3, 375, dataTorus, allImg);
    });

    menuCabelleras.addEventListener("click", () => {
        openMenu(imgCabelleras, 126, 378, dataCabelleras, allImg, 14);
    });

    menuBigotes.addEventListener("click", () => {
        openMenu(imgBigotes, 17, 504, dataBigotes, allImg, 15);
    });

    menuBarbas.addEventListener("click", () => {
        openMenu(imgBarbas, 10, 521, dataBarbas, allImg);
    });

    menuAretes.addEventListener("click", () => {
        openMenu(imgAretes, 12, 531, dataAretes, allImg);
    });

    menuLentes.addEventListener("click", () => {
        openMenu(imgLentes, 19, 543, dataLentes, allImg);
    });

    menuSombreros.addEventListener("click", () => {
        openMenu(imgSombreros, 18, 562, dataSombreros, allImg);
    });
}