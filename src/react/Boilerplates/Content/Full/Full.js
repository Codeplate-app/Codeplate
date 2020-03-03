import React from "react"
import "./full.css"
import ReactLoading from "react-loading"


export default class Full extends React.Component{
   
    constructor(){
        super()
        this.state = {
            loading: true
        }
        this.forceUpdate()
        this.liste = <ReactLoading type="spinningBubbles" height={64} width={64} className="loading"/>
    }


    componentDidMount(){
        setTimeout(() => {
            this.setState({loading: false})
        }, 2000)
    }



     
     render() {

        if(!this.state.loading){
            this.liste = <p>not loading</p>
        }
  
        return (
           <div>
               {this.liste}  
           </div>
        );
     }
}