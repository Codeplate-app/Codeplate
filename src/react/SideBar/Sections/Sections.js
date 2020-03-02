import React from "react"
import "./sections.css"
import { Link } from "react-router-dom"

export default class Section extends React.Component{

   render() {

      let className = (this.props.active) ? "section active" : "section"

      return (
         <div className={className} onClick={this.props.clickActive} title={this.props.title}>
            <Link to={this.props.link} className="sectionTitle" title={this.props.title}>
               <span id={this.props.id} title={this.props.title}>{this.props.title}</span>
            </Link>
            
         </div>
      );
   }
}