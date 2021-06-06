const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({
        height: 800,
        width: 1000,
        resize: false,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(
        isDev ?
        'http://localhost:3000':
        `file://${path.join(__dirname, '../build/index.html')}`
    );

    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin')
        app.quit();
});

app.on('activate', () => {
    if(mainWindow === null)
        createWindow();
});

