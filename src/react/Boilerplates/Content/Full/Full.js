import React from "react"
import "./full.css"
import ReactLoading from "react-loading"

const MarkdownIt = require('markdown-it')
const axios = require("axios")


export default class Full extends React.Component{
   
    constructor(){
        super()
        this.state = {
            data: ""
        }
        this.md = new MarkdownIt();
       
    }

    componentDidMount(){
        axios.get(`https://raw.githubusercontent.com/${this.props.user}/${this.props.repo}/master/README.md`)
        .then(response => {
            this.setState({
                data: response.data
            }, () => console.log(response.data))
        })
    }

    componentWillReceiveProps(nextProps){
        axios.get(`https://raw.githubusercontent.com/${nextProps.user}/${nextProps.repo}/master/README.md`)
        .then(response => {
            this.setState({
                data: response.data
            }, () => console.log(response.data))
        })
    }



     
     render() {

        

        return (
           <div>
               {this.md.render(this.state.data)}
           </div>
        );
     }
}