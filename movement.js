let movConteiner = document.querySelector(".optConteiner");
let main = document.querySelector("#optionsBar");
let allMainOpt = document.querySelectorAll(".mainOpt");
let translate = document.querySelector("#optTranslate");
let clicks = 0

function animateOptMenu(direction, menu, widthMenu){
    const contKey = [
        { width: "280px" },
        { width: widthMenu },
    ];
    
    const options = {
        duration: 250,
        fill: "forwards",
        direction: direction
    };

    movConteiner.animate(contKey, options);

    for(i = 0; i < allMainOpt.length; i++){
        const optKey = [
            { transform: "scale(1)" },
            { transform: "scale(0)" },
        ];

        allMainOpt[i].animate(optKey, options);
    }

    const transKey = [
        { right: "-490px" },
        { right: "0px"},
    ];

    menu.animate(transKey, options);
}

function getTranslate(x){
    let translate = [
        "app.activeDocument.activeLayer.translate(0,-2)",
        "app.activeDocument.activeLayer.translate(0,2)",
        "app.activeDocument.activeLayer.translate(-2,0)",
        "app.activeDocument.activeLayer.translate(2,0)"
    ]
    return translate[x-1];
}

function getResize(x){
    let resize = [
        "app.activeDocument.activeLayer.resize(100,99)",
        "app.activeDocument.activeLayer.resize(100,101)",
        "app.activeDocument.activeLayer.resize(99,100)",
        "app.activeDocument.activeLayer.resize(101,100)",
        "app.activeDocument.activeLayer.resize(99,99)",
        "app.activeDocument.activeLayer.resize(101,101)"
    ]
    return resize[x-1];
}

function getRotate(x){
    let rotate = [
        "app.activeDocument.activeLayer.rotate(1)",
        "app.activeDocument.activeLayer.rotate(-1)",
    ]
    return rotate[x-1];
}

function movement(opt){
    main = document.querySelector("#optionsBar");
    let photopea = document.querySelector("#photopea");
    wnd = photopea.contentWindow
    switch(opt){
        case 0:
            let translate = document.querySelector("#optTranslate");
            animateOptMenu("normal", translate, "350px");

            let allTranslate = document.querySelectorAll(".transOpt");

            for(let i = 0; i < allTranslate.length; i++){
                allTranslate[i].addEventListener("click", (e) => {
                    if(i == 0){
                        console.log("clickee en translate")
                        animateOptMenu("reverse", translate, "350px");
                        for(aux of allTranslate) allTranslate[i].replaceWith(allTranslate[i].cloneNode(true));
                    }else{
                        Photopea.runScript(wnd, getTranslate(i))
                        .then(() => {setTimeout(() => {Photopea.saveImage(wnd, document.querySelector("#img"))}, 50)})
                    }
                })
            }
            break;

        case 1:
            let resize = document.querySelector("#optResize");
            animateOptMenu("normal", resize, "490px");

            let allResize = document.querySelectorAll(".resizeOpt");

            for(let i = 0; i < allResize.length; i++){
                allResize[i].addEventListener("click", (e) => {
                    if(i == 0){
                        console.log("clickee en translate")
                        animateOptMenu("reverse", resize, "490px");
                        for(aux of allResize) allResize[i].replaceWith(allResize[i].cloneNode(true));
                    }else{
                        Photopea.runScript(wnd, getResize(i))
                        .then(() => {setTimeout(() => {Photopea.saveImage(wnd, document.querySelector("#img"))}, 50)})
                    }
                })
            }
            break;

        case 2:
            let rotate = document.querySelector("#optRotate");
            animateOptMenu("normal", rotate, "210px");

            let allRotate = document.querySelectorAll(".rotateOpt");

            for(let i = 0; i < allRotate.length; i++){
                allRotate[i].addEventListener("click", (e) => {
                    if(i == 0){
                        console.log("clickee en translate")
                        animateOptMenu("reverse", rotate, "210px");
                        for(aux of allRotate) allRotate[i].replaceWith(allRotate[i].cloneNode(true));
                    }else{
                        Photopea.runScript(wnd, getRotate(i))
                        .then(() => {setTimeout(() => {Photopea.saveImage(wnd, document.querySelector("#img"))}, 50)})
                    }
                })
            }
            break;

        case 3:

            break;

        default:

            break;

    }

}