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
        console.log("Dentro de lib: " + script);
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
        
        var returnedMessage = await myPromise;
        console.log("Para ", script, myPromise);
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
    },
    saveImage: async function(wnd, img) {
        script = "app.activeDocument.saveToOE(\"jpg\")";

        console.log("Dentro de return: " + script);
            wnd.postMessage(script, "*");
            var myPromise = new Promise(function(resolve, reject) {
                var output;
                var messageHandle = function(e) {
                    console.log(e)
                    if (e.source == wnd && e.data instanceof ArrayBuffer) {
                        console.log("AAAAAAAAAAAA1");
                        const blob = new Blob([e.data], { type: 'image/jpg' });
                        const imageUrl = URL.createObjectURL(blob);
                        img.src = imageUrl;
                        output = imageUrl;
                    }else if(e.source == wnd && e.data == "done"){
                        console.log("AAAAAAAAAAAA2");
                        resolve(output);
                        window.removeEventListener("message", messageHandle);
                    }
                };
                window.addEventListener("message", messageHandle);
            });
            
            var returnedMessage = await myPromise;
            console.log("Dentro 2", myPromise);
            return await returnedMessage;
        },
};

async function returnPhoto(wnd){
    // wnd = document.querySelector("#photopea").contentWindow;
    script = "app.activeDocument.saveToOE(\"jpg\")";

    console.log("Dentro de return: " + script);
        wnd.postMessage(script, "*");
        var myPromise = new Promise(function(resolve, reject) {
            var outputarray;
            var messageHandle = function(e) {
                console.log(e)
                if (e.source == wnd && e.data instanceof ArrayBuffer) {
                    console.log("AAAAAAAAAAAA1");
                    const blob = new Blob([e.data], { type: 'image/jpg' });
                    const imageUrl = URL.createObjectURL(blob);
                    outputarray = imageUrl;
                    // window.removeEventListener("message", messageHandle);
                }else if(e.source == wnd && e.data == "done"){
                    console.log("AAAAAAAAAAAA2");
                    resolve(outputarray);
                    window.removeEventListener("message", messageHandle);
                }
            };
            window.addEventListener("message", messageHandle);
        });
        setTimeout(() => {}, 200)
        var returnedMessage = await myPromise;
        console.log("Dentro 2", myPromise);
        return await returnedMessage;
}