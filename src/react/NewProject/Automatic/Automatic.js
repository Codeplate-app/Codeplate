import React from "react"
import "./automatic.css"

const axios = require('axios');

export default class Automatic extends React.Component {

   handleClick(e){
      e.preventDefault()
      let repo = document.getElementById("repo").value
      let description = document.getElementById("description").value
      let title = repo.split("/")[repo.split("/").length-1]
      let languages = document.getElementById("languages").value.split(",").slice(0, 3)
      let dl = document.getElementById("downloadable").checked

      console.log(repo, languages, dl, title, description)
   
   }
   
   render() {
      return (
         <div id="automatic-background">

            <div id="new-project">

               <span id="new-icon">Submit a new project</span>
               <div className="space"></div>
               <input type="text" id="repo" placeholder="Repository URL"/>
               <div className="space"></div>
               <input type="text" id="languages" placeholder="Languages"/>
               <span>Languages need to be separated by a comma (eg: php, html, css).</span>
               <span>You need to put between 1 and 3 languages.</span>
               <div className="space"></div>
               <input type="text" id="description" placeholder="Description"/>
               <div className="space"></div>
               <input type="checkbox" id="downloadable" on="yes" off="no"/>
               <label htmlFor="downloadable" id="label">Downloadable ?</label>
               <div className="space"></div>
               <button id="submit" onClick={this.handleClick.bind(this)}>Submit</button>
            </div>


         </div>
      );
   }
}