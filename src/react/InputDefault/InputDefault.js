import React from "react"
import "./inputDefault.css"

export default class InputDefault extends React.Component {
   componentDidMount(){

      Array.from(document.getElementsByClassName("classInput")).forEach(input => {
         input.addEventListener("focusin", (e) => {
            document.querySelector(".classInput").classList.add("inputFocus")
            document.querySelector(".placeholder").classList.add("placeholderFocus")
         })
      })


      Array.from(document.getElementsByClassName("classInput")).forEach(input => {
         input.addEventListener("focusout", () => {
            if(document.querySelector(".classInput").value === ""){
               document.querySelector(".classInput").classList.remove("inputFocus")
               document.querySelector(".placeholder").classList.remove("placeholderFocus")
            }
         })
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