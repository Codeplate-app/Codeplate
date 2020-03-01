import React from "react"
import "./button.css"

export default class Button extends React.Component {

   
   render() {

      let button
      if(this.props.type === "save"){
         button = <button id="btnToken" className="save" onClick={this.props.handleClick}>Save this token</button>
      }else if(this.props.type === "delete"){
         button = <button id="btnToken" className="delete" onClick={this.props.handleClick}>Delete this token</button>
      }

      return (
         <div>
            {button}
         </div>
      );
   }
}