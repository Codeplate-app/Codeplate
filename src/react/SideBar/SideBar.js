import React from "react"
import style from "./sidebar.css"
import Icon from "./Icon/Icon"
import Section from "./Section/Section"

export default class SideBar extends React.Component{
	render() {
		return(
			<div id="sidebar">
				<Icon/>
				<div id="links">
					<Section text="bonjour"/>
				</div>
			</div>
		);
	}
}