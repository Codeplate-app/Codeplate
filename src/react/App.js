import React from 'react';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import "./app.css"
import SideBar from "./SideBar/SideBar"

export default class App extends React.Component {
	
	render() {
		return (
			<Router>
				<div id="test">
					<SideBar/>
					<Switch>
						<Route exact path="/">
							<p>Boilerplates</p>
						</Route>
						<Route exact path="/new-project">
							<p>New Project</p>
						</Route>
						<Route exact path="/settings">
							<p>Settings</p>
						</Route>
					</Switch>

				</div>
			</Router>
			
		);
	}
}