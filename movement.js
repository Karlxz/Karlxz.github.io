async function movement(){
    let btnUp = document.querySelector("#up");
    let btnDown = document.querySelector("#down");
    let btnLeft = document.querySelector("#left");
    let btnRight = document.querySelector("#right");

    /*btn.addEventListener("click", function(){
        //Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,10)");
        btn.style.color="blue";
    })*/

    await btnUp.addEventListener("click", ()=>{
        //btnAzul.style.color="blue";
        Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,-2)");
    })

    await btnDown.addEventListener("click", ()=>{
        Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,2)");
    })

    await btnLeft.addEventListener("click", ()=>{
        Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(-2,0)");
    })

    await btnRight.addEventListener("click", ()=>{
        Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(2,0)");
    })
}


/*async function moveUp(){
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
}*/