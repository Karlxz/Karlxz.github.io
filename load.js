let cnt = 0;

async function onMessage(e) {
    console.log("I enter onMessage", e);
    if (e.data == "done") {        
            cnt++;
        if(cnt==1) {
            // url = "https://Karlxz.github.io/img/background.jpg";
            // url = "https://Karlxz.github.io/img/caras/masculino/J3_M1267.png";
            // script = `app.open("${url}", null, true);`;
            script = `app.documents.add(1280, 720, 72, "Caramex");`;
            let wnd = document.querySelector("#photopea").contentWindow;
            // document.querySelector("#photopea").contentWindow.postMessage(script, "*");
            Photopea.runScript(wnd, script)
            window.removeEventListener("message", onMessage);
        }
        if(cnt==2) {  /* Image loaded!  Run some script! */
            
        }
    }
}


function iframeLoaded(pp) {
    console.log("I enter iframe");
    window.addEventListener("message", onMessage);
}