import React from "react"
import "./color.css"

export default class Color extends React.Component {
   render() {

      let style = {
         width: "38px",
         height: "38px",
         borderRadius: "50%",
         backgroundColor: this.props.color,
         border: (this.props.active) ? "5px solid var(--text)" : "0px solid white"
      }

      return (
         <div style={style} onClick={this.props.handleClick} color={this.props.colorname}></div>
      );
   }
}