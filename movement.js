function moveUp(){
    app.activeDocument.activeLayer.translate(0,10);
}

function moveDown(){
    app.activeDocument.activeLayer.translate(0,-10);
}

function moveRight(){
    app.activeDocument.activeLayer.translate(10,0);
}

function moveLeft(){
    app.activeDocument.activeLayer.translate(-10,0);
}