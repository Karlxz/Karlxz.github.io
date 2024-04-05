// async function addLayer(){

// }

async function setup() {
    let btnMasc = document.querySelector("#masculino");
    let btnFem = document.querySelector("#femenino");
    //await Photopea.runScript(window.parent, "app.documents.add(800, 700, 72, 'CARAMEX')");
    //await Photopea.runScript(window.parent, "app.UI.fitTheArea()");
    
    // if(!app.activeDocument.layers.getByName("Cara")){
    // }
    if (btnMasc){
        await btnMasc.addEventListener("click", ()=>{
            divMasc.style.display = 'block';
            divFem.style.display = 'none';
        })
    }
    if(btnFem){
        await btnFem.addEventListener("click", ()=>{
            divMasc.style.display = 'none';
            divFem.style.display = 'block';
        })
    }


    for(let i = 0; i < 54 ; i++){
        if(imgCaras[i]){
            await imgCaras[i].addEventListener("click", async ()=>{
                // if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Cara");`))
                //     await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Cara").remove();`);

                let data = openData(i);
                data.then((imagen) =>{
                    console.log("Si jalo: ", imagen);
                    addImageAndWait(window.parent, imagen);
                    // Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Cara";`);
                })
            })
        }
    }

    for(let i = 0; i < 74 ; i++){
        if(imgOjos[i]){
            await imgOjos[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Ojos");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Ojos").remove();`);

                await addImageAndWait(window.parent, openData(i+54)); //24
                await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,-34)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Ojos";`);
            })
        }
    }

    for(let i = 0; i < 30 ; i++){
        if(imgCejas[i]){
            await imgCejas[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Cejas");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Cejas").remove();`);

                await addImageAndWait(window.parent, openData(i+128)); //24
                await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,-55)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Cejas";`);
            })
        }
    }

    for(let i = 0; i < 24 ; i++){
        if(imgNarices[i]){
            await imgNarices[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Nariz");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Nariz").remove();`);

                await addImageAndWait(window.parent, openData(i+158)); //24
                await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,0)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Nariz";`);
            })
        }
    }

    for(let i = 0; i < 30 ; i++){
        if(imgLabios[i]){
            await imgLabios[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Labios");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Labios").remove();`);

                await addImageAndWait(window.parent, openData(i+182)); //24
                await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,59)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Labios";`);
            })
        }
    }

    for(let i = 0; i < 18 ; i++){
        if(imgOrejas[i]){
            await imgOrejas[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Orejas");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Orejas").remove();`);

                await addImageAndWait(window.parent, openData(i+212)); //24
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Orejas";`);
            })
        }
    }

    for(let i = 0; i < 18 ; i++){
        if(imgPapadas[i]){
            await imgPapadas[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Papada");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Papada").remove();`);

                await addImageAndWait(window.parent, openData(i+230)); //24
                await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Papada";`);
            })
        }
    }

    for(let i = 0; i < 12 ; i++){
        if(imgCachetes[i]){
            await imgCachetes[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Cachetes");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Cachetes").remove();`);

                await addImageAndWait(window.parent, openData(i+248)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Cachetes";`);
            })
        }
    }

    for(let i = 0; i < 18 ; i++){
        if(imgArrugasEntrecejo[i]){
            await imgArrugasEntrecejo[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Arrugas Entrecejo");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Arrugas Entrecejo").remove();`);

                await addImageAndWait(window.parent, openData(i+260)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Arrugas Entrecejo";`);
            })
        }
    }

    for(let i = 0; i < 18 ; i++){
        if(imgArrugasPerioculares[i]){
            await imgArrugasPerioculares[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Arrugas Perioculares");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Arrugas Perioculares").remove();`);

                await addImageAndWait(window.parent, openData(i+278)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Arrugas Perioculares";`);
            })
        }
    }

    for(let i = 0; i < 18 ; i++){
        if(imgArrugasNasogenianas[i]){
            await imgArrugasNasogenianas[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Arrugas Nasogenianas");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Arrugas Nasogenianas").remove();`);

                await addImageAndWait(window.parent, openData(i+296)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Arrugas Nasogenianas";`);
            })
        }
    }

    for(let i = 0; i < 18 ; i++){
        if(imgArrugasPeribucales[i]){
            await imgArrugasPeribucales[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Arrugas Peribucales");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Arrugas Peribucales").remove();`);

                await addImageAndWait(window.parent, openData(i+314)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Arrugas Peribucales";`);
            })
        }
    }

    for(let i = 0; i < 8 ; i++){
        if(imgAcne[i]){
            await imgAcne[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Acne");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Acne").remove();`);

                await addImageAndWait(window.parent, openData(i+332)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Acne";`);
            })
        }
    }
    

    for(let i = 0; i < 4 ; i++){
        if(imgCicatrices[i]){
            await imgCicatrices[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Cicatrices");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Cicatrices").remove();`);

                await addImageAndWait(window.parent, openData(i+340)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Cicatrices";`);
            })
        }
    }

    for(let i = 0; i < 2 ; i++){
        if(imgPecas[i]){
            await imgPecas[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Pecas");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Pecas").remove();`);

                await addImageAndWait(window.parent, openData(i+344)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Pecas";`);
            })
        }
    }

    for(let i = 0; i < 10 ; i++){
        if(imgVerrugasyLunares[i]){
            await imgVerrugasyLunares[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Verrugas y Lunares");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Verrugas y Lunares").remove();`);

                await addImageAndWait(window.parent, openData(i+346)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Verrugas y Lunares";`);
            })
        }
    }

    for(let i = 0; i < 12 ; i++){
        if(imgHoyoMenton[i]){
            await imgHoyoMenton[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Hoyo menton");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Hoyo menton").remove();`);

                await addImageAndWait(window.parent, openData(i+356)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Hoyo menton";`);
            })
        }
    }

    for(let i = 0; i < 7 ; i++){
        if(imgAsimetrias[i]){
            await imgAsimetrias[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Asimetrias");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Asimetrias").remove();`);

                await addImageAndWait(window.parent, openData(i+368)); //24
                await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,0)")
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Asimetrias";`);
            })
        }
    }

    for(let i = 0; i < 3 ; i++){
        if(imgTorus[i]){
            await imgTorus[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Torus");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Torus").remove();`);

                await addImageAndWait(window.parent, openData(i+375)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Torus";`);
            })
        }
    }

    for(let i = 0; i < 126 ; i++){
        if(imgCabelleras[i]){
            await imgCabelleras[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Cabellera");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Cabellera").remove();`);

                await addImageAndWait(window.parent, openData(i+378)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Cabellera";`);
            })
        }
    }

    for(let i = 0; i < 17 ; i++){
        if(imgBigotes[i]){
            await imgBigotes[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Bigote");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Bigote").remove();`);

                await addImageAndWait(window.parent, openData(i+504)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Bigote";`);
            })
        }
    }

    for(let i = 0; i < 10 ; i++){
        if(imgBarbas[i]){
            await imgBarbas[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Barba");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Barba").remove();`);

                await addImageAndWait(window.parent, openData(i+521)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Barba";`);
            })
        }
    }

    for(let i = 0; i < 12 ; i++){
        if(imgAretes[i]){
            await imgAretes[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Aretes");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Aretes").remove();`);

                await addImageAndWait(window.parent, openData(i+531)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Aretes";`);
            })
        }
    }

    for(let i = 0; i < 19 ; i++){
        if(imgLentes[i]){
            await imgLentes[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Lentes");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Lentes").remove();`);

                await addImageAndWait(window.parent, openData(i+543)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Lentes";`);
            })
        }
    }

    for(let i = 0; i < 18 ; i++){
        if(imgSombreros[i]){
            await imgSombreros[i].addEventListener("click", async ()=>{
                if(Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Sombrero");`))
                    await Photopea.runScript(window.parent, `app.activeDocument.layers.getByName("Sombrero").remove();`);

                await addImageAndWait(window.parent, openData(i+562)); //24
                //await Photopea.runScript(window.parent, "app.activeDocument.activeLayer.translate(0,64)");
                await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Sombrero";`);
            })
        }
    }


    // await addImageAndWait(window.parent, openData(0));
    // await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "Cara";`);
    
    /*await addImageAndWait(window.parent, "https://yikuansun.github.io/photopea-flappyIvan/img/ivanHead.png");
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "ivanHead";`);
    
    for (var i = 0; i < obstaclesPos.length; i++) {
        await addImageAndWait(window.parent, "https://yikuansun.github.io/photopea-flappyIvan/img/dinoBill.png");
        await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "dinoBill${i}";`);

    }

    await addImageAndWait(window.parent, "https://yikuansun.github.io/photopea-flappyIvan/img/photopeaCoin.png");
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "photopeaCoin";`);

    await Photopea.runScript(window.parent, `app.activeDocument.artLayers.add();
    app.activeDocument.activeLayer.kind = LayerKind.TEXT;
    app.activeDocument.activeLayer.textItem.contents = "hello world";`);
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.textItem.size = 24;`);
    await Photopea.runScript(window.parent, `app.activeDocument.activeLayer.name = "scoreCounter";`);*/
}