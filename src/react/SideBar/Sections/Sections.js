import React from "react"
import style from "./sections.css"
import SVGInject from "@iconfu/svg-inject"

export default class Section extends React.Component{

  componentDidMount(){
     SVGInject(document.querySelector("img.iconSection"));
  }
   
   render() {

      let className = "section"
      if(this.props.active){
         className+=" active"
      }
     

      return (
         <div className={className}>
            <img src={this.props.icon} alt="icon" className="iconSection"/>
            <span className="sectionTitle">{this.props.text}</span>
         </div>
      );
   }
}