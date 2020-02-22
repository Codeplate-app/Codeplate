import React from 'react';
import logo from '../assets/logo.svg';
import '../App.css';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./Home"

export default class App extends React.Component {
	
	render() {
		return (
			<Router>
				<Home/>
				<Switch>
					<Route exact path="/">
						<p>test1</p>
					</Route>
					<Route exact path="/other">
						<p>other</p>
						<Link to="/">Home</Link>
					</Route>
				</Switch>
			</Router>
			);
		}
	}