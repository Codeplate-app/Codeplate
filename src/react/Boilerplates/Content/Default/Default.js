import React from "react"
import "./default.css"
import image from "../../../../assets/images/undraw/undraw_searching_p5ux.svg"

export default class Default extends React.Component {

   render() {
      return (
         <div id="defaultContent">
            <img src={image} alt="image lost"/>
            <div id="textLost">
               <span id="lost">You're lost ?</span>
               <br/>
               <br/>
               <span id="descriptionLost">Don't worry, the only thing you need to do is to select a boilerplate, then let your imagination take over.</span>
            </div>
         </div>
      );
   }
}