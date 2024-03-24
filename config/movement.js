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
    let btnTranslate = document.querySelector("#translate"); 
    let btnResize = document.querySelector("#resize"); 
    let btnRotate = document.querySelector("#rotate"); 
    let btnExtra = document.querySelector("#extra"); 
    
    if(btnTranslate){
        await btnTranslate.addEventListener("click", ()=>{
            divTranslate.style.display = "block";
            divResize.style.display = "none";
        })
        
    }

    if(btnResize){
        await btnResize.addEventListener("click", ()=>{
            divResize.style.display = "block";
            divTranslate.style.display = "none";
        })
    }

    if(btnUp){
        await btnUp.addEventListener("click", ()=>{
            Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,-2)");
            //console.log("Funciona");
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
            Photopea.runScript(window.parent, "app.activeDocument.activeLayer.resize(100,99)");
            //console.log("Tambien funciona");
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

movement();


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