import React from "react"
import "./element.css"
import { Link } from "react-router-dom"

export default class Element extends React.Component {
   render() {

      let path = `/boilerplates/${this.props.id}`

      return (
         <Link to={path}>
            <div className="elementColor">
               <div className="element">
                  <span className="elementTitle">React Electron</span>
                  <br/>
                  <p className="elementDescription">Quick introduction to show you how to link electron with react</p>
                  <div className="elementTags">
                     <ul className="elementUlTags">
                        <li className="elementLiTags">Javascript</li>
                        <li className="elementLiTags">HTML</li>
                        <li className="elementLiTags">CSS</li>
                     </ul>
                  </div>
               </div>
            </div>
         </Link>
      );
   }
}