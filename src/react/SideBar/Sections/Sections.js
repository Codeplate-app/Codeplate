import React from "react"
import "./sections.css"
import { Link } from "react-router-dom"
import SVGInject from "@iconfu/svg-inject"

export default class Section extends React.Component{

   constructor(props){
      super(props)

      this.className = (this.props.active) ? "section active" : "section"
      this.icon = (this.props.active) ? this.props.icon.orange : this.props.icon.black
   }

   componentWillMount(){
      SVGInject(document.querySelector("img.iconSection"));
   }

   render() {


      return (
         <div className={this.className}>
            <img src={this.icon} alt="icon" className="iconSection"/>
            <Link to={this.props.link} className="sectionTitle">{this.props.text}</Link>
         </div>
      );
   }
}