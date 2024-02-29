async function moveUp(){
    //app.activeDocument.activeLayer.translate(0,10);
    await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,10)");
}

async function moveDown(){
    //app.activeDocument.activeLayer.translate(0,-10);
    await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,-10)");
}

async function moveRight(){
    //app.activeDocument.activeLayer.translate(10,0);
    await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(10,0)");
}

async function moveLeft(){
    //app.activeDocument.activeLayer.translate(-10,0);
    await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(-10,0)");
}