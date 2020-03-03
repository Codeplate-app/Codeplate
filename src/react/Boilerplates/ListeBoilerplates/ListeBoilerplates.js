import React from "react"
import "./listeboilerplates.css"
import Element from "./Element/Element"

export default class ListeBoilerplates extends React.Component {
   
   render() {
      return (
         <div id="listeBoilerplates">
            <ul>
               <li><Element id="1"/></li>
               <li><Element id="2"/></li>
               <li><Element id="3"/></li>
               <li><Element id="4"/></li>
               <li><Element id="5"/></li>
            </ul>
         </div>
      );
   }
}