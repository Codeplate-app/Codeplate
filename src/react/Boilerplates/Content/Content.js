import React from "react"
import "./content.css"
import Default from "./Default/Default"
import Full from "./Full/Full";


export default class Content extends React.Component {
   
   render() {

      let content = (this.props.match.params.user === "default" && this.props.match.params.repo === "default") ? <Default/> : <Full user={this.props.match.params.user} repo={this.props.match.params.repo}/>

      return (
         <div id="content">
            {content}
         </div>
      );
   }
}