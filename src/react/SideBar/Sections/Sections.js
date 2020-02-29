import React from "react"
import style from "./sections.css"
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
            <span className="sectionTitle">{this.props.text}</span>
         </div>
      );
   }
}