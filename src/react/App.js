import React from 'react';
import {Switch, BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import "./app.css"
import SideBar from "./SideBar/SideBar"
import Boilerplates from './Boilerplates/Boilerplates';
import Settings from "./Settings/Settings"
import {channels} from "../shared/constants"

const {ipcRenderer} = window

export default class App extends React.Component {
	componentDidMount(){
		ipcRenderer.send(channels.GET_COLOR)
      	ipcRenderer.on(channels.GET_COLOR, (_event, args) => {
			ipcRenderer.removeAllListeners(channels.GET_COLOR);
			// eslint-disable-next-line default-case
			switch(args.color){
				case "orange":
				document.querySelector("html").style.setProperty("--orange", "#EB5925")
				break
				case "violet":
				document.querySelector("html").style.setProperty("--orange", "#5C3FC5")
				break
				case "bleu":
				document.querySelector("html").style.setProperty("--orange", "#035AA6")
				break
				case "vert":
				document.querySelector("html").style.setProperty("--orange", "#03A678")
				break
				case "rouge":
				document.querySelector("html").style.setProperty("--orange", "#F23D3D")
				break
			}
		})
	}
	
	render() {
		return (
			<Router>
				<Redirect from="/" to="/boilerplates/default"/>
				<div id="app">
					<SideBar/>
					<Switch>
						<Route path="/boilerplates">
							<Boilerplates/>
						</Route>
						<Route exact path="/new-project">
							<p>New Project</p>
						</Route>
						<Route exact path="/settings">
							<Settings/>
						</Route>
					</Switch>

				</div>
			</Router>
			
		);
	}
}