async function movement(){
    let btnAzul = document.querySelector("#azul");
    let btnVerde = document.querySelector("#rojo");
    let btnRojo = document.querySelector("#verde");
    let btnCyan = document.querySelector("#cyan");

    /*btn.addEventListener("click", function(){
        //Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,10)");
        btn.style.color="blue";
    })*/

    await btnAzul.addEventListener("click", ()=>{
        //btnAzul.style.color="blue";
        Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(20,20)");
    })

    await btnVerde.addEventListener("click", ()=>{
        btnVerde.style.color="cyan";
    })

    await btnRojo.addEventListener("click", ()=>{
        btnRojo.style.color="red";
    })

    await btnCyan.addEventListener("click", ()=>{
        btnCyan.style.color="cyan";
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