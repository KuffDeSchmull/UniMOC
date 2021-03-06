const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

//const keytar = require('keytar')//keychain

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({fullscreenWindowTitle:true,opacity:0.98,title : "UniMOC",width: 900, height: 680,  'minHeight': 500,
  'minWidth': 600,
    webPreferences: {
      nodeIntegration: true,
      webviewTag:true
    }});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
   
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
