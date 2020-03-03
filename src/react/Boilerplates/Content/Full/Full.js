import React from "react"
import "./full.css"
import ReactLoading from "react-loading"

const axios = require('axios');


export default class Full extends React.Component{
    constructor(){
        super()
        this.state = {
           loading: true,
           data: ""
        }
        this.liste = <ReactLoading type="spinningBubbles" height={64} width={64} className="loading"/>
        
        
     }

    componentDidMount(){
        this.setState({ loading: true}, () => {
            let self = this
            axios.get(`https://raw.githubusercontent.com/${this.props.user}/${this.props.repo}/master/README.md`)
                .then(function (response) {
                    self.setState({ loading: false, data: response.data })
                })
                .catch(function (error) {
                    console.log(error);
                })
        })
    }
     

     
     render() {

  
        let {data} = this.state
  
        if(!this.state.loading){
            this.liste = <pre>{data}</pre>
        }
  
  
        return (
           <div>
              {this.liste}   
           </div>
        );
     }
}