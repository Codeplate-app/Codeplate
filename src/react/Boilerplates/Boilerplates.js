import React from "react"
import "./boilerplates.css"
import {Switch, BrowserRouter as Router, Route } from "react-router-dom"
import ListeBoilerplates from "./ListeBoilerplates/ListeBoilerplates"
import Content from "./Content/Content"

export default class Boilerplates extends React.Component {
   
   render() {
      return (
         <Router>
            <div id="boilerplates">
               <ListeBoilerplates/>
               <Switch>
                  <Route path="/boilerplates/:user/:repo" component={Content}/>
               </Switch>
            </div>
         </Router>
      );
   }
}