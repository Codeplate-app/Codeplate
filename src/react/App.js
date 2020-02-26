import React from 'react';
import '../App.css';
import {Switch, BrowserRouter as Router, Route, Link} from "react-router-dom"
import Home from "./Home"

export default class App extends React.Component {
	constructor(){
		super()
		window.localStorage.clear("test")
	}

	
	render() {
		return (
			<Home/>
		);
	}
}