import React from "react"
import "./listeboilerplates.css"
import { Link } from "react-router-dom"

export default class ListeBoilerplates extends React.Component {
   
   render() {
      return (
         <div id="listeBoilerplates">
            <ul>
              <li><Link to="/boilerplates/1">test 1</Link></li>
              <li><Link to="/boilerplates/2">test 2</Link></li>
              <li><Link to="/boilerplates/3">test 3</Link></li>
              <li><Link to="/boilerplates/4">test 4</Link></li>
            </ul>
         </div>
      );
   }
}