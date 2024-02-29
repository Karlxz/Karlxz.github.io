const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,10)");
    btn.style.color="red";
})  

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

async function open(){
    await Photopea.runScript(window.parent, "app.documents.add(800, 700, 72, 'Caramex')");
    await Photopea.runScript(window.parent, "app.UI.fitTheArea()");
}