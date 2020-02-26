const { app, BrowserWindow, ipcMain, session } = require('electron');
const { channels } = require('../src/shared/constants');
const path = require('path');
const url = require('url');
const axios = require("axios").default

let mainWindow;
let loginGithubWindow;

app.on('ready', () => {
	const startUrl = process.env.ELECTRON_START_URL || url.format({
		pathname: path.join(__dirname, '../index.html'),
		protocol: 'file:',
		slashes: true,
	});
	mainWindow = new BrowserWindow({
		center: true,
		minWidth: 1200,
		minHeight: 800,
		show: false,
		darkTheme: true,
		icon: path.join(__dirname, "../src/assets/icone.ico"),
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		}
	});
	mainWindow.on("ready-to-show", () => { mainWindow.show() })
	mainWindow.loadURL(startUrl);
	mainWindow.on('closed', function () {
		mainWindow = null;
	});

	loginGithubWindow = new BrowserWindow({
		center: true,
		minWidth: 1200,
		minHeight: 800,
		show: false,
		darkTheme: true,
		parent: mainWindow,
		modal: true,
		icon: path.join(__dirname, "../src/assets/icone.ico"),

	});
	loginGithubWindow.loadURL("https://https://github.com/login/oauth/authorize");
	loginGithubWindow.on('closed', function () {
		loginGithubWindow = null;
	});

});


app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

ipcMain.on(channels.APP_INFO, (event) => {
	event.sender.send(channels.APP_INFO, {
		appName: app.getName(),
		appVersion: app.getVersion(),
	});
});


ipcMain.on(channels.LOGIN_GITHUB, (event) => {
	loginGithubWindow.show()
	session.defaultSession.webRequest.onBeforeSendHeaders(null, (details, callback) => {
		event.sender.send(channels.LOGIN_GITHUB, {
			code: "code"
		});
	})
	
	
	
	
});