function moveUp(){
    app.activeDocument.activeLayer.translate(0,1);
}

function moveDown(){
    app.activeDocument.activeLayer.translate(0,-1);
}

function moveRight(){
    app.activeDocument.activeLayer.translate(1,0);
}

function moveLeft(){
    app.activeDocument.activeLayer.translate(-1,0);
}