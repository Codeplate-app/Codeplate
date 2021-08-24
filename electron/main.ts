/* eslint-disable import/no-extraneous-dependencies */
// electron/electron.js
const path = require("path");
const { app, BrowserWindow } = require("electron");

const isDev = process.env.IS_DEV === "true";

function createWindow() {
   const mainWindow = new BrowserWindow({
      width: 1050,
      height: 600,
      center: true,
      show: false,
      icon: path.join(__dirname, "../src/assets/icon.ico"),
      webPreferences: {
         preload: path.join(__dirname, "preload.ts"),
         nodeIntegration: true,
      },
   });

   mainWindow.on("ready-to-show", () => {
      mainWindow.show();
   });

   mainWindow.loadURL(
      isDev
         ? "http://localhost:3000"
         : `file://${path.join(__dirname, "../dist/index.html")}`
   );
   // Open the DevTools.
   // if (isDev) {
   //    mainWindow.webContents.openDevTools();
   // }

   mainWindow.setMenu(null);
}

app.whenReady().then(() => {
   createWindow();
   app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
   });
});

app.on("window-all-closed", () => {
   if (process.platform !== "darwin") {
      app.quit();
   }
});
