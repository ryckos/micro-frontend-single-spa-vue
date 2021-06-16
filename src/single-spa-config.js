// single-spa-config.js
import * as singleSpa from 'single-spa'; //importer single-spa
/*
* runScript：Une méthode de synchronisation de promesse. Peut remplacer pour créer une balise de script,
 puis charger le service
* */
const runScript = async (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    });
};

 singleSpa.registerApplication( 
    'appOne', 
    async () => {
        await runScript('http://localhost:8081/js/chunk-vendors.js');
        await runScript('http://localhost:8081/js/app.js');
        return window.singleVue;
    },
    location => location.pathname.startsWith('/app-one') 
);

singleSpa.registerApplication( 
    'appTwo', 
    async () => {
        await runScript('http://localhost:8083/js/chunk-vendors.js');
        await runScript('http://localhost:8083/js/app.js');
        return window.singleVue;
    },
    location => location.pathname.startsWith('/app-two') 
);

singleSpa.start(); 