let imgCaras = document.querySelectorAll("#caras");

function linkData(){
    console.log("Entra");

    for (let i = 0; i < 16; i++){
        imgCaras[i].src = openData(i);
    }

    return new Promise(function(resolve, reject) {
        resolve();
    });
}
