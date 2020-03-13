import React from "react"
import "./select.css"
import { Link } from "react-router-dom"

export default class Select extends React.Component {
   render() {
      return (
         <Link to={this.props.url}>
         
            <div className="selectBtn">
               <span>Select</span>
            </div>
         </Link>
      );
   }
}