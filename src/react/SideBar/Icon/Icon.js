import React from "react"
import style from "./icon.css"
import logo from "../../../assets/images/logo.svg"

export default class Icon extends React.Component{
   render() {
      return (
         <div id="logoSideBar">
            <img src={logo} alt="CodePlate Logo" id="logoSvg"/>
            <span id="titleLogo">CodePlate</span>
         </div>
      );
   }
}