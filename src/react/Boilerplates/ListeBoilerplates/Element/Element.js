import React from "react"
import "./element.css"
import { Link } from "react-router-dom"

export default class Element extends React.Component {
   render() {

      let path = `/boilerplates/${this.props.id}`

      return (
         <Link to={path}>
            <div className="element">
               link
            </div>
         </Link>
      );
   }
}