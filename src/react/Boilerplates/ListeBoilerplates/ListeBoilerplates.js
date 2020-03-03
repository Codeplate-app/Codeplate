import React from "react"
import "./listeboilerplates.css"
import Element from "./Element/Element"
import ReactLoading from 'react-loading';

const axios = require('axios');

export default class ListeBoilerplates extends React.Component {

   
   constructor(){
      super()
      this.state = {
         loading: true,
         data: []
      }
      this.liste = <ReactLoading type="spinningBubbles" height={64} width={64} className="loading"/>
   }

   componentDidMount(){


      this.setState({ loading: true}, () => {
         let self = this
         fetch("https://api.github.com/repos/MrAnyx/CodePlate-App/contents/apps", {
            // fetch("https://raw.githubusercontent.com/MrAnyx/CodePlate-App/master/apps/react_electron.json", {
            method: "GET",
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            }
         }).then(response => {
            return response.json()
         }).then(data => {

               data.map(item => {
                  
                  axios.get(item.download_url)
                  .then(function (response) {
                     self.setState({ loading: false, data: [...self.state.data, response.data] })
                  })
                  .catch(function (error) {
                     console.log(error);
                  })
               })
         })
      })
   }

   
   render() {

      let {data} = this.state

      if(!this.state.loading){
         this.liste = []
         let i = 1
         data.map(item => {
            this.liste.push(<Element key={i} id={i} title={item.title} description={item.description} tags={item.languages}/>)
            i++
         })
      } else {
         
      }


      return (
         <div id="listeBoilerplates">
            {this.liste}         
         </div>
      );
   }
}