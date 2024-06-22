let photopea = document.querySelector("#photopea");
wnd = photopea.contentWindow
let actual = [-1]
let layers = []

function shift_layer(dir)
{

}

function arrangeLayer(dir){
    let script = `var where = ElementPlacement.PLACEBEFORE
    var currentActiveLayer = app.activeDocument.activeLayer;
    var layerRef = app.activeDocument.layers[${dir}+1];
    currentActiveLayer.move(layerRef, where);`
    return script
}



function reArrangeLayers(itm, posPrev){
    let posAct = findLayer(itm)
    if(posAct != posPrev){
        if(posAct > posPrev){
            Photopea.runScript(wnd, arrangeLayer(posAct))
            .then(() => {setTimeout(() => {Photopea.saveImage(wnd, document.querySelector("#img"))}, 60)})
        }else if(posAct < posPrev){
            Photopea.runScript(wnd, arrangeLayer(posAct-1))
            .then(() => {setTimeout(() => {Photopea.saveImage(wnd, document.querySelector("#img"))}, 60)})    
        }
    }
    console.log("RE ACOMODE CAPAS", itm.getElementsByClassName('layerName')[0].textContent)
    console.log("Esta en la pos: ", findLayer(itm))

}

function findLayer(itm){
    let totalLayers = document.querySelectorAll(".layer");
    for(let i = 0; i < totalLayers.length; i++){
        if(itm.getElementsByClassName('layerName')[0].textContent == totalLayers[i].getElementsByClassName('layerName')[0].textContent){
            return i;
        }
    }
}






async function layer(name){
    var myPromise = new Promise((resolve, reject) => {
        layers.push(name)
        resolve()
    })
    var returnedPromise = await myPromise
    return await returnedPromise
}

function putLabel(url){
    var label = url.split("/");
    label = label[label.length-1].split(".")[0];
    var p = document.createElement('p');    
    p.classList.add('label');
    p.append(label);
    return p
}

function createLayer(url, layerName){
    if(!layers.includes(layerName)){
        let layerCont = document.querySelector('.layerCont');
        let layerDiv = document.createElement('div');
        let layerImg = document.createElement('img');
        let layerP = document.createElement('p');
        let dragDiv = document.createElement('div');
        layerDiv.classList.add('layer', 'list__item', 'is-idle', 'js-item');
        layerDiv.addEventListener(("click"), (e) => {
            Photopea.runScript(wnd, `app.activeDocument.activeLayer = app.activeDocument.layers.getByName("${layerName}");`);
        })
        layerImg.classList.add('layerImg');
        layerP.classList.add('layerName');
        dragDiv.classList.add('drag-handle', 'js-drag-handle');
        layerImg.src = url;
        layerP.textContent = layerName;
        layerDiv.insertAdjacentElement('beforeend', layerImg);
        layerDiv.insertAdjacentElement('beforeend', layerP);
        layerDiv.insertAdjacentElement('beforeend', dragDiv);
        layerCont.insertAdjacentElement('afterbegin', layerDiv);
    }else{
        let allLayers = document.querySelectorAll('.layer');
        for(let i = 0; i < allLayers.length; i++){
            if(allLayers[i].getElementsByClassName('layerName')[0].textContent == layerName){
                allLayers[i].getElementsByClassName('layerImg')[0].src = url;
            }
        }
    }
    // createSortable('.layerCont');

}

function putSource(data){
    let conteiner = document.querySelector(".imgDataPreview");
    while (conteiner.lastElementChild) {
        conteiner.removeChild(conteiner.lastElementChild);
    }

    if(data.sexo.length != 0){
        let masc = document.createElement('div');
        masc.classList.add('masc');
        masc.style.display = "block";
        let izqM = document.createElement('div');
        izqM.classList.add('izq');
        let derM = document.createElement('div');
        derM.classList.add('der');
        
        let fem = document.createElement('div');
        fem.classList.add('fem');
        fem.style.display = "none";
        let izqF = document.createElement('div');
        izqF.classList.add('izq');
        let derF = document.createElement('div');
        derF.classList.add('der');

        let top = document.createElement('div');
        top.classList.add('top');
        let imgTitle = document.createElement('h2');
        imgTitle.classList.add('imgTitle');
        imgTitle.append(data.id)
        let mascBtn = document.createElement('button');
        mascBtn.textContent = "Masc"
        mascBtn.classList.add('btnSexo')
        mascBtn.id = 'masculino';
        mascBtn.addEventListener("click", (e) => {
            masc.style.display = "block";
            fem.style.display = "none";
        })
        let femBtn = document.createElement('button');
        femBtn.textContent = "Fem"
        femBtn.classList.add('btnSexo');
        femBtn.id = 'femenino';
        femBtn.addEventListener("click", (e) => {
            masc.style.display = "none";
            fem.style.display = "block";
        })
        top.insertAdjacentElement('beforeend', imgTitle);
        top.insertAdjacentElement('beforeend', mascBtn);
        top.insertAdjacentElement('beforeend', femBtn);
        conteiner.insertAdjacentElement('beforeend', top);

        for (let i = 0; i < data.total; i++){
            let img = document.createElement('img');
            img.classList.add('imgData');
            let url = openData(i + data.inicio);
            img.src = url;
            let layerCountOld
            img.addEventListener("click", (e) => {
                if(layers.includes(data.id)){
                    addImageAndWait(wnd, url)
                    .then(() => Photopea.runScript(wnd, data.script))
                    .then(() => Photopea.runScript(wnd, `app.activeDocument.layers.getByName("${data.id}").remove();`))
                    .then(() => Photopea.runScript(wnd, `app.activeDocument.activeLayer.name = "${data.id}";`))
                    .then(() => {setTimeout(() => {Photopea.saveImage(wnd, document.querySelector("#img"))}, 60)})
                }else{
                    addImageAndWait(wnd, url)
                    .then(() => Photopea.runScript(wnd, data.script))
                    .then(() => Photopea.runScript(wnd, `app.activeDocument.activeLayer.name = "${data.id}";`))
                    .then(() => layer(data.id))
                    .then(() => {setTimeout(() => {Photopea.saveImage(wnd, document.querySelector("#img"))}, 60)})
                }
                createLayer(url, data.id)             
            })
            if(i < data.sexo[0]){
                if(i <= Math.ceil(data.sexo[0]/2)-1){
                    izqM.insertAdjacentElement('beforeend', img);
                    izqM.insertAdjacentElement('beforeend', putLabel(url));
                }else{
                    derM.insertAdjacentElement('beforeend', img);
                    derM.insertAdjacentElement('beforeend', putLabel(url));
                }
            }else{
                if(i <= Math.ceil((data.sexo[1]/2)+data.sexo[0])-1){
                    izqF.insertAdjacentElement('beforeend', img);
                    izqF.insertAdjacentElement('beforeend', putLabel(url));
                }else{
                    derF.insertAdjacentElement('beforeend', img);
                    derF.insertAdjacentElement('beforeend', putLabel(url));
                }
            }
        }
        masc.insertAdjacentElement('beforeend', izqM);
        masc.insertAdjacentElement('beforeend', derM);
        fem.insertAdjacentElement('beforeend', izqF);
        fem.insertAdjacentElement('beforeend', derF);
        conteiner.insertAdjacentElement('beforeend', masc);
        conteiner.insertAdjacentElement('beforeend', fem);
    }else{
        let top = document.createElement('div');
        top.classList.add('top');
        let imgTitle = document.createElement('h2');
        imgTitle.classList.add('imgTitle');
        imgTitle.append(data.id)
        top.insertAdjacentElement('beforeend', imgTitle);
        conteiner.insertAdjacentElement('beforeend', top);

        let izq = document.createElement('div');
        izq.classList.add('izq');
        let der = document.createElement('div');
        der.classList.add('der');

        for (let i = 0; i < data.total; i++){
            let img = document.createElement('img');
            img.classList.add('imgData');
            let url = openData(i + data.inicio);
            img.src = url;
            img.addEventListener("click", (e) => {
                if(layers.includes(data.id)){
                    addImageAndWait(wnd, url)
                    .then(() => Photopea.runScript(wnd, data.script))
                    .then(() => Photopea.runScript(wnd, `app.activeDocument.layers.getByName("${data.id}").remove();`))
                    .then(() => Photopea.runScript(wnd, `app.activeDocument.activeLayer.name = "${data.id}";`))
                    .then(() => {setTimeout(() => {Photopea.saveImage(wnd, document.querySelector("#img"))}, 60)})
                }else{
                    addImageAndWait(wnd, url)
                    .then(() => Photopea.runScript(wnd, data.script))
                    .then(() => Photopea.runScript(wnd, `app.activeDocument.activeLayer.name = "${data.id}";`))
                    .then(() => layer(data.id))
                    .then(() => {setTimeout(() => {Photopea.saveImage(wnd, document.querySelector("#img"))}, 60)})
                }
                createLayer(url, data.id)
            })
            if(i <= Math.ceil(data.total/2)-1){
                izq.insertAdjacentElement('beforeend', img);
                izq.insertAdjacentElement('beforeend', putLabel(url));
            }else{
                der.insertAdjacentElement('beforeend', img);
                der.insertAdjacentElement('beforeend', putLabel(url));
            }
        }
        conteiner.insertAdjacentElement('beforeend', izq);
        conteiner.insertAdjacentElement('beforeend', der);
    }

}

function openMenu(i){
    // actual.push(i);
    console.log(actual)
    let data = getCharData(i);

    if(menu.offsetWidth <= Math.ceil(conteiner.offsetWidth*0.034)){
        putSource(data);
        menu.style.width = "20%";
        sideMenu.style.width = "17%";
        sideMenuData.style.width = "83%";
        sideMenuData.style.display = "block";
    }else{
        if(actual[0] == i){
            menu.style.width = "3.4%";
            sideMenu.style.width = "100%"
            sideMenuData.style.width = "0%";
            sideMenuData.style.display = "none";
        }else{
            putSource(data);
        }
    }
    console.log("LLEGO AL FINAL")
    actual[0] = i;
}

function caramex(){

    for(let i=0; i < btnMasc.length; i++){
        if (btnMasc[i]){
            btnMasc[i].addEventListener("click", ()=>{
                divMasc[i].style.display = 'block';
                divFem[i].style.display = 'none';
            })
        }
    }

    for(let i = 0; i < btnFem.length; i++){
        if(btnFem[i]){
            btnFem[i].addEventListener("click", ()=>{
                divMasc[i].style.display = 'none';
                divFem[i].style.display = 'block';
            })
        }
    }

    menuPiel.addEventListener("click", () => {
        for(let el of pielElements){
            if(el.style.display == "none") el.style.display = 'block';
            else if(el.style.display == "block") el.style.display = 'none';
        }
    });

    menuAcc.addEventListener("click", () => {
        for(let el of accElements){
            if(el.style.display == "none") el.style.display = 'block';
            else if(el.style.display == "block") el.style.display = 'none';
        }
    });

    let menuPrev = document.querySelectorAll(".imgPrev");
    
    for(let i = 0; i < menuPrev.length; i++){
        menuPrev[i].parentNode.addEventListener("click", (e) => {
            openMenu(i);
        })
    }

    let menuOpt = document.querySelectorAll(".mainOpt");

    for(let i = 0; i < menuOpt.length; i++){
        menuOpt[i].addEventListener("click", (e) => {
            console.log("clickee")
            movement(i)
        })
    }

    // alert(document.getElementById("optTranslate").style.right);
}




function moveLayer(i){
    
}





