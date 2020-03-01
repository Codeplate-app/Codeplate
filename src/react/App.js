import React from 'react';
import {Switch, BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import "./app.css"
import SideBar from "./SideBar/SideBar"
import Boilerplates from './Boilerplates/Boilerplates';
import Settings from "./Settings/Settings"

export default class App extends React.Component {
	
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