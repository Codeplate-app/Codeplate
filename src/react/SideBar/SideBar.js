import React from "react"
import "./sidebar.css"
import Icon from "./Icon/Icon"
import Sections from "./Sections/Sections"


export default class SideBar extends React.Component{

	constructor(props){
		super(props)

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
					<Sections id="boilerplatesLink" title="Boilerplates" link="/boilerplates/default" active={this.state.boilerplates} clickActive={this.actionClickLink.bind(this)}/>
					<Sections id="newProjectLink"title="New Project" link="/new-project" active={this.state.newProject} clickActive={this.actionClickLink.bind(this)}/>
					<Sections id="settingsLink"title="Settings" link="/settings" active={this.state.settings} clickActive={this.actionClickLink.bind(this)}/>
				</div>
			</div>
		);
	}
}