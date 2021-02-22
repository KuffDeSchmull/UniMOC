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
        
            src: "about:blank",
    visible: true,
        blank:true,
    // If the page needs to access Node.js modules, be sure to
    // enable the nodeintegration
    webviewAttributes: {
        nodeintegration: true,
        allowpopups:true,
        webpreferences:"nativeWindowOpen=yes"
    }
        
        
        
    }
});

let tabTest = tabGroup.addTab({
    title: "Open New Tab",
    src: "about:blank",
    visible: true,
    blank:true,
    
             webviewAttributes: {
        nodeintegration: true,
        allowpopups:true,
            webpreferences:"nativeWindowOpen=yes"
    }
});

// 3. Add a tab from a website
let tab1 = tabGroup.addTab({
    title: "Moodle",
    src: "https://moodle.rwth-aachen.de",
    visible: true,
        webviewAttributes: {
        nodeintegration: true,
        allowpopups:true,
            webpreferences:"nativeWindowOpen=yes"
    }
});
let tabOnline = tabGroup.addTab({
    title: "RWTH-Online",
    src: "https://online.rwth-aachen.de",
    visible: true
});
let tabVideo = tabGroup.addTab({
    title: "Video AG",
    src: "https://video.fsmpi.rwth-aachen.de",
    visible: true
});
let tabSeminare = tabGroup.addTab({
    title: "Seminare und Praktika",
    src: "https://supra.informatik.rwth-aachen.de/selectionState",
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


module.exports.tabGroup = tabGroup;

