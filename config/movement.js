async function movement(){
    let btnUp = document.querySelector("#up");
    let btnDown = document.querySelector("#down");
    let btnLeft = document.querySelector("#left");
    let btnRight = document.querySelector("#right");
    let btnverResMin = document.querySelector("#verResMin");
    let btnverResMax = document.querySelector("#verResMax");
    let btnHorResMin = document.querySelector("#horResMin");
    let btnHorResMax = document.querySelector("#horResMax");
    let btnFullResMin = document.querySelector("#fullResMin");
    let btnFullResMax = document.querySelector("#fullResMax");

    /*btn.addEventListener("click", function(){
        //Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,10)");
        btn.style.color="blue";
    })*/
    if(btnUp){
        await btnUp.addEventListener("click", ()=>{
            //btnAzul.style.color="blue";
            Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,-2)");
        })
    }

    if(btnDown){
        await btnDown.addEventListener("click", ()=>{
            Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,2)");
        })
    }
    
    if(btnLeft){
        await btnLeft.addEventListener("click", ()=>{
            Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(-2,0)");
        })
    }

    if(btnRight){
        await btnRight.addEventListener("click", ()=>{
            Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(2,0)");
        })
    }

    if(btnverResMin){
        await btnverResMin.addEventListener("click", ()=>{
            //btnAzul.style.color="blue";
            Photopea.runScript(window.parent, "app.activeDocument.activeLayer.resize(100,99)");
        })
    }

    if(btnverResMax){
        await btnverResMax.addEventListener("click", ()=>{
            Photopea.runScript(window.parent, "app.activeDocument.activeLayer.resize(100,101)");
        })
    }

    if(btnHorResMin){
        await btnHorResMin.addEventListener("click", ()=>{
            Photopea.runScript(window.parent, "app.activeDocument.activeLayer.resize(99,100)");
        })    
    }

    if(btnHorResMax){
        await btnHorResMax.addEventListener("click", ()=>{
            //btnAzul.style.color="blue";
            Photopea.runScript(window.parent, "app.activeDocument.activeLayer.resize(101,100)");
        })
    }

    if(btnFullResMin){
        await btnFullResMin.addEventListener("click", ()=>{
            Photopea.runScript(window.parent, "app.activeDocument.activeLayer.resize(99,99)");
        })
    }

    if(btnFullResMax){
        await btnFullResMax.addEventListener("click", ()=>{
            Photopea.runScript(window.parent, "app.activeDocument.activeLayer.resize(101,101)");
        })
    }
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