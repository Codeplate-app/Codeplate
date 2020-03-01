import React from "react"
import "./content.css"
import Default from "./Default/Default"

export default class Content extends React.Component {
   
   render() {

      let content = (this.props.match.params.id === "default") ? <Default/> : this.props.match.params.id

      return (
         <div id="content">
            {content}
         </div>
      );
   }
}