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
            method: "GET",
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            }
         }).then(response => {
            return response.json()
         }).catch(function (error) {
            console.log(error);
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
            let user = item.projectUrl.split("/").slice(-2)[0]
            let repo = item.projectUrl.split("/").slice(-2)[1]
             
            this.liste.push(<Element key={i} user={user} repo={repo} title={item.title} description={item.description} tags={item.languages}/>)
            i++
         })
      }


      return (
         <div id="listeBoilerplates">
            {this.liste}         
         </div>
      );
   }
}