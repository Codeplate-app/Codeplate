import React from "react"
import "./newproject.css"
import automatic from "../../assets/images/undraw/automatic.svg"
import manual from "../../assets/images/undraw/manual.svg"
import Select from "./Select/Select"

export default class NewProject extends React.Component {

   handleClick(){
      console.log("click select")
   }

   render(){
      return (
         <div id="newProject">
            <div id="choice">
               <div id="automatic">
                  <p className="title">Automatic</p>
                  <div className="containerImage">
                     <img src={automatic} alt="automatic illustration"/>
                  </div>
                  <p className="text">The only things you need to do is to give your boilerplate a name, select the languages and submit the reult</p>
                  <Select url="/automatic"/>
               </div>
               <div id="or">
                  <div id="vr"></div>
                  <span>Or</span>
               </div>
               <div id="manual">
                  <p className="title">Manual</p>
                  <div className="containerImage">
                     <img src={manual} alt="automatic illustration"/>
                  </div>
                  <p className="text">You're a GitHub master ? This option is for you. Just create an issue that contains few details</p>
                  <Select url="/manual"/>
               </div>
            </div>
         </div>
      );
   }
}