// uses Photopea.js
var addImageAndWait = async function(contentWindow, imgURI) {
    return new Promise(async function(resolve) {
        var layerCountOld = "done";
        while (layerCountOld == "done") layerCountOld = (await Photopea.runScript(contentWindow, `app.echoToOE(app.activeDocument.layers.length)`))[0];
        console.log("Sale del ciclo infinito")
        var layerCountNew = layerCountOld;
        await Photopea.runScript(contentWindow, `app.open("${imgURI}", null, true);`);
        var layerCheckInterval = async function () {
            layerCountNew = (await Photopea.runScript(contentWindow, `app.echoToOE(app.activeDocument.layers.length)`))[0];
            if (layerCountNew == layerCountOld + 1) {
                resolve();
                return;
            }
            else setTimeout(layerCheckInterval, 20);
        };
        layerCheckInterval();
    });
};