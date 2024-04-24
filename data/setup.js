async function addLayer(i, offset, layerName){
    
    // if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("` + layerName + `");`)){
    //     Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("` + layerName + `").remove();`)
    //         .then(() => addImageAndWait(window.parent, openData(i+offset)))
    //         .then(() => Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "` + layerName + `";`))
    // }else{
    //     addImageAndWait(window.parent, openData(i+offset))
    //         .then(() => Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "` + layerName + `";`))
    // }
    var addLayerPromise = new Promise(function(resolve, reject) {
    
        Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("` + layerName + `");`)
            .then(() => Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("` + layerName + `").remove();`))
            .then(() => addImageAndWait(window.parent, openData(i+offset)))
            .then(() => Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "` + layerName + `";`))
            .then(() => resolve())
            .catch(() => addImageAndWait(window.parent, openData(i+offset))
                .then(() => Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "` + layerName + `";`)))
                .then(() => resolve())
    });

    return await addLayerPromise
    // addImageAndWait(window.parent, openData(i+offset))
    // .then(function(){
    //     Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = ${layerName};`);
    // });    
}

function setup() {
    let btnMasc = document.querySelector("#masculino");
    let btnFem = document.querySelector("#femenino");
    //await Photopea.runScript(window.parent, "app.documents.add(800, 700, 72, 'CARAMEX')");
    //await Photopea.runScript(window.parent, "app.UI.fitTheArea()");
    
    if (btnMasc){
        btnMasc.addEventListener("click", ()=>{
            divMasc.style.display = 'block';
            divFem.style.display = 'none';
        })
    }
    if(btnFem){
        btnFem.addEventListener("click", ()=>{
            divMasc.style.display = 'none';
            divFem.style.display = 'block';
        })
    }


    for(let i = 0; i < 54 ; i++){
        if(imgCaras[i]){
            imgCaras[i].addEventListener("click", async ()=>{
                await addLayer(i, 0, "Cara");
            })
        }
    }

    for(let i = 0; i < 74 ; i++){
        if(imgOjos[i]){
            imgOjos[i].addEventListener("click", ()=>{
                addLayer(i, 54, "Ojos");
            })
        }
    }

    for(let i = 0; i < 30 ; i++){
        if(imgCejas[i]){
            imgCejas[i].addEventListener("click", ()=>{
                addLayer(i, 128, "Cejas");
            })
        }
    }

    for(let i = 0; i < 24 ; i++){
        if(imgNarices[i]){
            imgNarices[i].addEventListener("click", ()=>{
                addLayer(i, 158, "Nariz");
            })
        }
    }

    for(let i = 0; i < 30 ; i++){
        if(imgLabios[i]){
            imgLabios[i].addEventListener("click", ()=>{
                addLayer(i, 182, "Labios");
            })
        }
    }

    for(let i = 0; i < 18 ; i++){
        if(imgOrejas[i]){
            imgOrejas[i].addEventListener("click", ()=>{
                addLayer(i, 212, "Orejas");
            })
        }
    }

    for(let i = 0; i < 18 ; i++){
        if(imgPapadas[i]){
            imgPapadas[i].addEventListener("click", ()=>{
                addLayer(i, 230, "Papada");
            })
        }
    }

    for(let i = 0; i < 12 ; i++){
        if(imgCachetes[i]){
            imgCachetes[i].addEventListener("click", ()=>{
                addLayer(i, 248, "Cachetes");
            })
        }
    }

    for(let i = 0; i < 18 ; i++){
        if(imgArrugasEntrecejo[i]){
            imgArrugasEntrecejo[i].addEventListener("click", ()=>{
                addLayer(i, 260, "Arrugas Entrecejo");
            })
        }
    }

    for(let i = 0; i < 18 ; i++){
        if(imgArrugasPerioculares[i]){
            imgArrugasPerioculares[i].addEventListener("click", ()=>{
                addLayer(i, 278, "Arrugas Perioculares");
            })
        }
    }

    for(let i = 0; i < 18 ; i++){
        if(imgArrugasNasogenianas[i]){
            imgArrugasNasogenianas[i].addEventListener("click", ()=>{
                addLayer(i, 296, "Arrugas Nasogenianas");
            })
        }
    }

    for(let i = 0; i < 18 ; i++){
        if(imgArrugasPeribucales[i]){
            imgArrugasPeribucales[i].addEventListener("click", ()=>{
                addLayer(i, 314, "Arrugas Peribucales");
            })
        }
    }

    for(let i = 0; i < 8 ; i++){
        if(imgAcne[i]){
            imgAcne[i].addEventListener("click", ()=>{
                addLayer(i, 332, "Acne");
            })
        }
    }
    

    for(let i = 0; i < 4 ; i++){
        if(imgCicatrices[i]){
            imgCicatrices[i].addEventListener("click", ()=>{
                addLayer(i, 340, "Cicatrices");
            })
        }
    }

    for(let i = 0; i < 2 ; i++){
        if(imgPecas[i]){
            imgPecas[i].addEventListener("click", ()=>{
                addLayer(i, 344, "Pecas");
            })
        }
    }

    for(let i = 0; i < 10 ; i++){
        if(imgVerrugasyLunares[i]){
            imgVerrugasyLunares[i].addEventListener("click", ()=>{
                addLayer(i, 346, "Verrugas y Lunares");
            })
        }
    }

    for(let i = 0; i < 12 ; i++){
        if(imgHoyoMenton[i]){
            imgHoyoMenton[i].addEventListener("click", ()=>{
                addLayer(i, 356, "Hoyo menton");
            })
        }
    }

    for(let i = 0; i < 7 ; i++){
        if(imgAsimetrias[i]){
            imgAsimetrias[i].addEventListener("click", ()=>{
                addLayer(i, 368, "Asimetrias");
            })
        }
    }

    for(let i = 0; i < 3 ; i++){
        if(imgTorus[i]){
            imgTorus[i].addEventListener("click", ()=>{
                addLayer(i, 375, "Torus");
            })
        }
    }

    for(let i = 0; i < 126 ; i++){
        if(imgCabelleras[i]){
            imgCabelleras[i].addEventListener("click", ()=>{
                addLayer(i, 378, "Cabellera");
            })
        }
    }

    for(let i = 0; i < 17 ; i++){
        if(imgBigotes[i]){
            imgBigotes[i].addEventListener("click", ()=>{
                addLayer(i, 504, "Bigote");
            })
        }
    }

    for(let i = 0; i < 10 ; i++){
        if(imgBarbas[i]){
            imgBarbas[i].addEventListener("click", ()=>{
                addLayer(i, 521, "Barba");
            })
        }
    }

    for(let i = 0; i < 12 ; i++){
        if(imgAretes[i]){
            imgAretes[i].addEventListener("click", ()=>{
                addLayer(i, 332, "Aretes");
            })
        }
    }

    for(let i = 0; i < 19 ; i++){
        if(imgLentes[i]){
            imgLentes[i].addEventListener("click", ()=>{
                addLayer(i, 543, "Lentes");
            })
        }
    }

    for(let i = 0; i < 18 ; i++){
        if(imgSombreros[i]){
            imgSombreros[i].addEventListener("click", ()=>{
                addLayer(i, 562, "Sombrero");
            })
        }
    }


    // await addImageAndWait(window.parent, openData(0));
    // await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Cara";`);
    
    /*await addImageAndWait(window.parent, "https://yikuansun.github.io/photopea-flappyIvan/img/ivanHead.png");
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "ivanHead";`);
    
    for (var i = 0; i < obstaclesPos.length; i++) {
        await addImageAndWait(window.parent, "https://yikuansun.github.io/photopea-flappyIvan/img/dinoBill.png");
        await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "dinoBill${i}";`);

    }

    await addImageAndWait(window.parent, "https://yikuansun.github.io/photopea-flappyIvan/img/photopeaCoin.png");
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "photopeaCoin";`);

    await Photopea.runScript(window.parent, `app.activeDocument.artLayers.add();
    app.activeDocument.activeLayer.kind = LayerKind.TEXT;
    app.activeDocument.activeLayer.textItem.contents = "hello world";`);
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.textItem.size = 24;`);
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "scoreCounter";`);*/
}


// if(app.activeDocument.layers.getByName("Cara").name!=app.activeDocument.layers.getByName(app.activeDocument.layers[app.activeDocument.layers.length-2].name).name)
// {
// let layer = app.activeDocument.layers.getByName("Cara");
// app.activeDocument.layers.getByName(app.activeDocument.layers[app.activeDocument.layers.length-2].name) = layer;
// app.activeDocument.layers.getByName("Cara") = app.activeDocument.layers.getByName(app.activeDocument.layers[app.activeDocument.layers.length-2].name);
// }      

// Switch off any dialog boxes
// displayDialogs = DialogModes.ALL; // OFF 

// shift_layer(-1);


// // Set Display Dialogs back to normal
// displayDialogs = DialogModes.ALL; // NORMAL


// // function SHIFT LAYER (direction)
// // --------------------------------------------------------
// function shift_layer(direction)
// {
//   // direction =  1 Moves layer up 1 place to top
//   // direction = -1 Moves layer down 1 place to background

//   if(direction == undefined) return -1;

//   var where  = (direction > 0) ? ElementPlacement.PLACEBEFORE : ElementPlacement.PLACEAFTER;

//   var currentActiveLayer = app.activeDocument.activeLayer;
//   var idx = get_layer_index(currentActiveLayer);

//   // Get a reference to the active layer
//   var layerRef = app.activeDocument.layers[app.activeDocument.layers.length-2];

//   // Move the new layer set to after the previously first layer
//   currentActiveLayer.move(layerRef, where);
// }


// function get_layer_index(ref)
// {
//   var numOfArtLayers = app.activeDocument.layers.length;

//   // work from the top of the stack down!
//   for (var i = numOfArtLayers -1; i >= 0; i--)
//   {
//     var tempLayer = app.activeDocument.layers[i];
//     if (tempLayer == ref) return i;
//   }
  
// }

// shift_layer(1);