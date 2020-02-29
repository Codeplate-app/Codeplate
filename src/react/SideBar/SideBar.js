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
	}

	render() {
		return(
			<div id="sidebar">
				<Icon/>
				<div id="links">
					<Sections icon={this.list} text="Boilerplates" link="/"/>
					<Sections icon={this.newProject} text="New Project" link="/new-project"/>
					<Sections icon={this.settings} text="Settings" link="/settings" active={true}/>
				</div>
			</div>
		);
	}
}