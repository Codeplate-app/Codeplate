import React from "react"
import style from "./sidebar.css"
import Icon from "./Icon/Icon"
import Sections from "./Sections/Sections"
import listIcon from "../../assets/icons/fontAwesome/solid/list-ul.svg"
import forkIcon from "../../assets/icons/fontAwesome/solid/plus-circle.svg"
import settingsIcon from "../../assets/icons/fontAwesome/solid/cog.svg"

export default class SideBar extends React.Component{

	render() {
		return(
			<div id="sidebar">
				<Icon/>
				<div id="links">
					<Sections icon={forkIcon} text="New Project" active={true}/>
					<Sections icon={listIcon} text="Boilerplates"/>
					<Sections icon={settingsIcon} text="Settings"/>
					
				</div>
			</div>
		);
	}
}