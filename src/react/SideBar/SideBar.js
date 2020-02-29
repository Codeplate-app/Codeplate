import React from "react"
import "./sidebar.css"
import Icon from "./Icon/Icon"
import Sections from "./Sections/Sections"

import listIcon from "../../assets/icons/fontAwesome/solid/list-ul.svg"
import forkIcon from "../../assets/icons/fontAwesome/solid/plus-circle.svg"
import settingsIcon from "../../assets/icons/fontAwesome/solid/cog.svg"
import listIconOrange from "../../assets/icons/fontAwesome/solid/list-ul-orange.svg"
import forkIconOrange from "../../assets/icons/fontAwesome/solid/plus-circle-orange.svg"
import settingsIconOrange from "../../assets/icons/fontAwesome/solid/cog-orange.svg"

export default class SideBar extends React.Component{

	constructor(props){
		super(props)
		this.list = {
			black: listIcon,
			orange: listIconOrange
		}
		this.newProject = {
			black: forkIcon,
			orange: forkIconOrange
		}
		this.settings = {
			black: settingsIcon,
			orange: settingsIconOrange
		}

		this.state = {
			boilerplates: true,
			newProject: false,
			settings: false
		}
	}

	actionClickLink(e){
		this.setState({
			boilerplates: false,
			newProject: false,
			settings: false
		})

		if(e.target.title === "Boilerplates"){
			this.setState({boilerplates: true})
		} if(e.target.title === "New Project") {
			this.setState({newProject: true})
		} if(e.target.title === "Settings") {
			this.setState({settings: true})
		}
	}

	

	render() {

		return(
			<div id="sidebar">
				<Icon/>
				<div id="links">
					<Sections icon={this.list} title="Boilerplates" link="/" active={this.state.boilerplates} clickActive={this.actionClickLink.bind(this)}/>
					<Sections icon={this.newProject} title="New Project" link="/new-project" active={this.state.newProject} clickActive={this.actionClickLink.bind(this)}/>
					<Sections icon={this.settings} title="Settings" link="/settings" active={this.state.settings} clickActive={this.actionClickLink.bind(this)}/>
				</div>
			</div>
		);
	}
}