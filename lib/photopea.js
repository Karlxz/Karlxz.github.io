var Photopea = {
    initEmbed: async function(elem_to_append_to, config) {
        var iframe = document.createElement("iframe");
        iframe.style.border = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        if (config) iframe.src = "https://www.photopea.com#" + encodeURI(config);
        else iframe.src = "https://www.photopea.com";
        elem_to_append_to.appendChild(iframe);
        var myPromise = new Promise(function(resolve, reject) {
            var messageHandle = function(e) {
                //if (e.source == iframe.contentWindow && e.data == "done") {
                    resolve(iframe);
                    window.removeEventListener("message", messageHandle);
                //}
            };
            window.addEventListener("message", messageHandle);
        });
        return await myPromise;
    },
    runScript: async function(contentWindow, script) {
        console.log("Dentro de lib" + script);
        contentWindow.postMessage(script, "*");
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
        // window.addEventListener("message", (e) => {
        //     if(e.data == "done" && e.origin == "https://www.photopea.com"){

        //     }
        //     console.log(e.data); console.log(e.origin)
        // })
        // return await myPromise;
        var returnedMessage = await myPromise;
        console.log(myPromise);
        return await returnedMessage;
    },
    addBinaryAsset: async function(contentWindow, asset) {
        var myPromise = new Promise(function(resolve, reject) {
            var messageHandle = function(e) {
                if (e.source == contentWindow && e.data == "done") {
                    resolve(true);
                    window.removeEventListener("message", messageHandle);
                };
            };
            window.addEventListener("message", messageHandle);
        });
        contentWindow.postMessage(asset, "*");
        return await myPromise;
    }
};