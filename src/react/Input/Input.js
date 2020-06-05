import React from "react"
import "./input.css"

export default class Input extends React.Component {
   componentDidMount(){

      if(this.props.token !== undefined){
         document.querySelector(".inputDiv input").value = this.props.token
         document.querySelector(".classInput").classList.add("inputFocus")
         document.querySelector(".placeholder").classList.add("placeholderFocus")
      }

      document.querySelector(".classInput").addEventListener("focusin", () => {
         document.querySelector(".classInput").classList.add("inputFocus")
         document.querySelector(".placeholder").classList.add("placeholderFocus")
      })
      
      document.querySelector(".classInput").addEventListener("focusout", () => {
         if(document.querySelector(".classInput").value === ""){
            document.querySelector(".classInput").classList.remove("inputFocus")
            document.querySelector(".placeholder").classList.remove("placeholderFocus")
         }
         
      })
   }

   render() {
      return (
         <div className="inputDiv">
            <input type={this.props.type} className="classInput"/>
            <span className="placeholder">{this.props.placeholder}</span>
         </div>
      );
   }
}