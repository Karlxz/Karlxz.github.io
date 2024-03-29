async function movement(){
    let btnUp = document.querySelector("#up");
    let btnDown = document.querySelector("#down");
    let btnLeft = document.querySelector("#left");
    let btnRight = document.querySelector("#right");
    let btnverResMin = document.querySelector("#shrinkVer");
    let btnverResMax = document.querySelector("#expandVer");
    let btnHorResMin = document.querySelector("#shrinkHor");
    let btnHorResMax = document.querySelector("#expandHor");
    let btnFullResMin = document.querySelector("#shrink");
    let btnFullResMax = document.querySelector("#expand");
    let btnRotRight = document.querySelector("#rotRight"); 
    let btnRotLeft = document.querySelector("#rotLeft"); 
    let btnTranslate = document.querySelector("#translate"); 
    let btnResize = document.querySelector("#resize"); 
    let btnRotate = document.querySelector("#rotate"); 
    // let btnExtra = document.querySelector("#extra"); 
    
    if(btnTranslate){
        await btnTranslate.addEventListener("click", ()=>{
            divNothing.style.display = "none";
            divResize.style.display = "none";
            divRotate.style.display = "none";
            divTranslate.style.display = "block";
        })
        
    }

    if(btnResize){
        await btnResize.addEventListener("click", ()=>{
            divNothing.style.display = "none";
            divTranslate.style.display = "none";
            divRotate.style.display = "none";
            divResize.style.display = "block";
        })
    }

    if(btnRotate){
        await btnRotate.addEventListener("click", ()=>{
            divNothing.style.display = "none";
            divTranslate.style.display = "none";
            divResize.style.display = "none";
            divRotate.style.display = "block";
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

    if(btnRotRight){
        await btnRotRight.addEventListener("click", ()=>{
            Photopea.runScript(window.parent, "app.activeDocument.activeLayer.rotate(1)");
        })
    }

    if(btnRotLeft){
        await btnRotLeft.addEventListener("click", ()=>{
            Photopea.runScript(window.parent, "app.activeDocument.activeLayer.rotate(-1)");
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