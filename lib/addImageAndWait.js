// uses Photopea.js
var addImageAndWait = async function(contentWindow, imgURI) {
    return new Promise(async function(resolve) {
        // var layerCountOld = "done";
        // while (layerCountOld == "done") layerCountOld = (await Photopea.runScript(contentWindow, `app.echoToOE(app.activeDocument.layers.length)`))[0];
        // var layerCountNew = layerCountOld;
        // await Photopea.runScript(contentWindow, `app.open("${imgURI}", null, true);`);
        // var layerCheckInterval = async function () {
        //     layerCountNew = (await Photopea.runScript(contentWindow, `app.echoToOE(app.activeDocument.layers.length)`))[0];
        //     if (layerCountNew == layerCountOld + 1) {
        //         resolve();
        //         return;
        //     }
        //     else setTimeout(layerCheckInterval, 50);
        // };
        // layerCheckInterval();

        await Photopea.runScript(contentWindow, `app.open("${imgURI}", null, true);`);
        var myPromise = new Promise(function(resolve, reject) {
            var outputarray = [];
            var messageHandle = function(e) {
                if (e.source == contentWindow) {
                    outputarray.push(e.data);
                    if (e.data == "done") {
                        resolve(outputarray);
                        window.removeEventListener("message", messageHandle);
                    }
                }
            };
            window.addEventListener("message", messageHandle);
        });

        return await myPromise;
    });
};