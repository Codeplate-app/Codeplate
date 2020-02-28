import React from "react"
import style from "./section.css"

export default class Section extends React.Component{
   
   render() {
      return (
         <p>{this.props.text}</p>
      );
   }
}