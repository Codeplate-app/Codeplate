import React from "react"
import "./listeboilerplates.css"
import Element from "./Element/Element"

export default class ListeBoilerplates extends React.Component {
   
   render() {
      return (
         <div id="listeBoilerplates">
            
              <Element id="1"/>
              <Element id="2"/>
              <Element id="3"/>
              <Element id="4"/>
              <Element id="5"/>
            
         </div>
      );
   }
}