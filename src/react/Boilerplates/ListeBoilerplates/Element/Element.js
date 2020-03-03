import React from "react"
import "./element.css"
import { Link } from "react-router-dom"

export default class Element extends React.Component {
   render() {

      let path = `/boilerplates/${this.props.user}/${this.props.repo}`
      let tags = []
      let i = 0
      this.props.tags.map(item => {

         tags.push(<li key={i} className="elementLiTags">{item}</li>)
         i++
      })

      return (

         <Link to={path}>
            <div className="elementColor">
               <div className="element">
                  <span className="elementTitle">{this.props.title}</span>
                  <br/>
                  <p className="elementDescription">{this.props.description}</p>
                  <div className="elementTags">
                     <ul className="elementUlTags">
                        {tags}
                     </ul>
                  </div>
               </div>
            </div>
         </Link>
      );
   }
}