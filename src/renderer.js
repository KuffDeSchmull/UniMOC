// ./renderer.js

// 1. Require the module
const TabGroup = require("electron-tabs");

// 2. Define the instance of the tab group (container)
let tabGroup = new TabGroup({
    // If you want a new button that appends a new tab, include:
    newTab: {
        title: 'New App',
        // The file will need to be local, probably a local-ntp.html file
        // like in the Google Chrome Browser.

        //src: "./some-index-file.html",
        //visible: true,
        //webviewAttributes: {
        //    nodeintegration: true
        //}
            src: "http://localhost:3000/cluster.html",
    visible: true,
    // If the page needs to access Node.js modules, be sure to
    // enable the nodeintegration
    webviewAttributes: {
        nodeintegration: true
    }
        
        
        
    }
});

// 3. Add a tab from a website
let tab1 = tabGroup.addTab({
    title: "Moodle",
    src: "https://moodle.rwth-aachen.de",
    visible: true
});
let tabOnline = tabGroup.addTab({
    title: "RWTH-Online",
    src: "https://online.rwth-aachen.de",
    visible: true
});
// 4. Add a new tab that contains a local HTML file
/*let tab2 = tabGroup.addTab({
    title: "Cluster",
    src: "http://localhost:3000/cluster.html",
    visible: true,
    // If the page needs to access Node.js modules, be sure to
    // enable the nodeintegration
    webviewAttributes: {
        nodeintegration: true
    }
});*/