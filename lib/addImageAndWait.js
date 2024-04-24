// uses Photopea.js
var addImageAndWait = function(contentWindow, imgURI) {
    return new Promise(async function(resolve) {
        var layerCountOld = "done";
        while (layerCountOld == "done") {layerCountOld = (await Photopea.runScript(contentWindow, `app.echoToOE(app.activeDocument.layers.length)`))[0]; console("Mandando 1")}
        var layerCountNew = layerCountOld;
        await Photopea.runScript(contentWindow, `app.open("${imgURI}", null, true);`);
        layerCountNew = (await Photopea.runScript(contentWindow, `app.echoToOE(app.activeDocument.layers.length)`))[0]
        if (layerCountNew == layerCountOld + 1) {
            resolve();
            return;
        }else{
            reject() 
        }
        // var layerCheckInterval = async function () {
        //     layerCountNew = (await Photopea.runScript(contentWindow, `app.echoToOE(app.activeDocument.layers.length)`))[0];
        //     if (layerCountNew == layerCountOld + 1) {
        //         resolve();
        //         return;
        //     }
        //     else setTimeout(layerCheckInterval, 50);
        // };
        // layerCheckInterval();
    });
};