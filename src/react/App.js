import React from 'react';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import style from "./app.css"
import SideBar from "./SideBar/SideBar"

export default class App extends React.Component {
	
	render() {
		return (
			<SideBar/>
		);
	}
}