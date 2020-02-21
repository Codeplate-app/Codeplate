import React from 'react';
import logo from '../assets/logo.svg';
import '../App.css';
import { channels } from '../shared/constants';
import {Link} from "react-router-dom"
const { ipcRenderer } = window

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      appVersion: '',
    };
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      const { appName, appVersion } = arg;
      this.setState({ appName, appVersion });
    });
  }

  render() {
    const { appName, appVersion } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{appName} version {appVersion}</p>
          <Link to="/other">other</Link>
        </header>
      </div>
    );
  }
}