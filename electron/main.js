const { app, BrowserWindow, ipcMain, screen } = require('electron');
const { channels } = require('../src/shared/constants');
const path = require('path');
const url = require('url');
const Store = require('electron-store');

const store = new Store();

if(store.get("color") === undefined){
	store.set("color", "orange")
}

if(store.get("theme") === undefined){
	store.set("theme", "light")
}

let mainWindow;

app.on('ready', () => {
	const startUrl = process.env.ELECTRON_START_URL || url.format({
		pathname: path.join(__dirname, '../index.html'),
		protocol: 'file:',
		slashes: true,
	});
	const { width, height } = screen.getPrimaryDisplay().workAreaSize
	mainWindow = new BrowserWindow({
		center: true,
		width: width,
		height: height,
		minWidth: width,
		minHeight: height,
		show: false,
		darkTheme: true,
		icon: path.join(__dirname, "../src/assets/images/icone.ico"),
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		}
	});
	mainWindow.on("ready-to-show", () => { mainWindow.show() })
	mainWindow.loadURL(startUrl);
	mainWindow.on('closed', function () {
		mainWindow = null;
	});
	
});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});


ipcMain.on(channels.GITHUB_TOKEN, (event) => {
	event.sender.send(channels.GITHUB_TOKEN, {
		token: store.get("token")
	});
});

ipcMain.on(channels.NEW_TOKEN, (event, args) => {
	if(args !== ""){
		store.set("token", args)
	}
	event.sender.send(channels.NEW_TOKEN);
});

ipcMain.on(channels.DELETE_TOKEN, (event, _args) => {
	store.delete("token")
	event.sender.send(channels.DELETE_TOKEN);
});

ipcMain.on(channels.NEW_COLOR, (event, args) => {
	store.set("color", args)
	event.sender.send(channels.NEW_COLOR);
});


ipcMain.on(channels.GET_COLOR, (event, args) => {
	event.sender.send(channels.GET_COLOR, {
		color: store.get("color")
	});
});




ipcMain.on(channels.SET_THEME, (event, args) => {
	if(store.get("theme") === "light"){
		store.set("theme", "dark")
	} else{
		store.set("theme", "light")
	}
	event.sender.send(channels.SET_THEME);
});


ipcMain.on(channels.GET_THEME, (event, args) => {
	event.sender.send(channels.GET_THEME, {
		theme: (store.get("theme") === "light") ? false : true
	});
});
