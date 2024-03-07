

async function setup() {
    
    //await Photopea.runScript(window.parent, "app.documents.add(800, 700, 72, 'CARAMEX')");
    //await Photopea.runScript(window.parent, "app.UI.fitTheArea()");
    
    // if(!app.activeDocument.layers.getByName("Cara")){
    // }
    for(let i = 0; i < 16; i++){
        if(imgCaras[i]){
            await imgCaras[i].addEventListener("click", ()=>{
                //Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,-2)");
                console.log("Funciona");
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