import React from 'react';
import logo from '../assets/logo.svg';
import '../App.css';
import { channels } from '../shared/constants';
const { ipcRenderer } = window

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      appName: '',
      appVersion: '',
      isConnecting: false
    };
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      const { appName, appVersion } = arg;
      this.setState({ appName, appVersion });
    });
    this.login = this.login.bind(this)
  }

  login(e){
    e.preventDefault()
    this.setState({isConnecting: true})
    ipcRenderer.send(channels.LOGIN_GITHUB);
    ipcRenderer.on(channels.LOGIN_GITHUB, (event, args) => {
      console.log(args.code)
      this.setState({isConnecting: false})
    });
  }

  render() {
    const { appName, appVersion, isConnecting } = this.state;
    let connecting

    if(isConnecting){
      connecting = <span>connecting</span>
    }else{
      connecting = <span>not connecting</span>
    }

    let url = "https://github.com/login/oauth/authorize?client_id=53bcaef9d43b0aee49dd&redirect_uri="+window.location.href

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{appName} version {appVersion}</p>
          <a href={url}>Log in with github</a>
          {connecting}
          

        </header>
      </div>
    );
  }
}