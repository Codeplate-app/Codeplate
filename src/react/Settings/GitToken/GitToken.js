import React from "react"
import "./gittoken.css"

export default class GitToken extends React.Component {
   componentDidMount(){

      if(this.props.token !== ""){
         document.querySelector("#inputGit").value = this.props.token
         document.querySelector(".gittoken").classList.add("gittokenFocus")
         document.querySelector(".tokenSpan").classList.add("tokenSpanFocus")
      }

      document.querySelector(".gittoken").addEventListener("focusin", () => {
         document.querySelector(".gittoken").classList.add("gittokenFocus")
         document.querySelector(".tokenSpan").classList.add("tokenSpanFocus")
      })
      
      document.querySelector(".gittoken").addEventListener("focusout", () => {

         if(document.querySelector(".gittoken").value === ""){
            document.querySelector(".gittoken").classList.remove("gittokenFocus")
            document.querySelector(".tokenSpan").classList.remove("tokenSpanFocus")
         }
         
      })
   }

   handleOutFocus(){
      document.querySelector(".gittoken").value = ""
   }

   render() {
      return (
         <div id="inputToken">
            <input type="password" id="inputGit" className="gittoken"/>
            <span className="tokenSpan">Token</span>
         </div>
      );
   }
}