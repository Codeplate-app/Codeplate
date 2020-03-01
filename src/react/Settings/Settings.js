import React from "react"
import "./settings.css"
import Switch from "react-switch";
import Color from "./Color/Color"
import Input from "../Input/Input";
import Button from "./Button/Button";
import { channels } from "../../shared/constants"
const { ipcRenderer } = window; 


export default class Settings extends React.Component {

   constructor(props){
      super(props)

      this.state = {
         checked: false,
         colors: {
            orange: true,
            violet: false,
            bleu: false,
            vert: false,
            rouge: false
         },
         token: undefined
      }

      ipcRenderer.send(channels.GITHUB_TOKEN)
      ipcRenderer.on(channels.GITHUB_TOKEN, (_event, args) => {
         ipcRenderer.removeAllListeners(channels.GITHUB_TOKEN);
         this.input = <Input token={args.token} type="text" placeholder="Token"/>
         this.setState({ token: args.token })
      })

   }


   handleChange(){
      this.setState({
         checked: !this.state.checked
      })
   }

   changeColor(e){

      this.setState({
         colors: {
            orange: false,
            violet: false,
            bleu: false,
            vert: false,
            rouge: false
         }
      })

      // eslint-disable-next-line default-case
      switch(e.target.getAttribute('color')){
         case "orange":
            this.setState({colors: {orange: true}})
            document.querySelector("html").style.setProperty("--orange", "#EB5925")
            break
         case "violet":
            this.setState({colors: {violet: true}})
            document.querySelector("html").style.setProperty("--orange", "#5C3FC5")
            break
         case "bleu":
            this.setState({colors: {bleu: true}})
            document.querySelector("html").style.setProperty("--orange", "#035AA6")
            break
         case "vert":
            this.setState({colors: {vert: true}})
            document.querySelector("html").style.setProperty("--orange", "#03A678")
            break
         case "rouge":
            this.setState({colors: {rouge: true}})
            document.querySelector("html").style.setProperty("--orange", "#F23D3D")
            break
      }
   }

   handleClickBtn(){
      if(document.getElementById("btnToken").classList.contains("save")){

         let new_token = document.getElementById("input").value
         ipcRenderer.send(channels.NEW_TOKEN, new_token)
         ipcRenderer.on(channels.NEW_TOKEN, (_event, _args) => {
            ipcRenderer.removeAllListeners(channels.NEW_TOKEN);
            this.setState({ token: new_token })
         })
      }else{
         ipcRenderer.send(channels.DELETE_TOKEN)
         ipcRenderer.on(channels.DELETE_TOKEN, (_event, _args) => {
            ipcRenderer.removeAllListeners(channels.DELETE_TOKEN);
            document.getElementById("input").value = null
            document.querySelector(".classInput").classList.remove("inputFocus")
            document.querySelector(".placeholder").classList.remove("placeholderFocus")
            this.setState({ token: undefined })
         })
      }

      
      

   }

   render() {

      let {token} = this.state
      let type = (token === undefined || token === "undefined" || token === "") ? "save" : "delete"

      return (
         <div id="settingsSection">
            <div id="appearence">
               <span id="palette">Apprearence</span>
               <div className="space"></div>
               <label htmlFor="material-switch" id="enable">
                  <span>Enable dark theme</span>
                  <Switch checked={this.state.checked} onChange={this.handleChange.bind(this)} onColor="#EB5925" offColor="#2E2E2E" onHandleColor="#F2F2F2" offHandleColor="#F2F2F2" handleDiameter={30} uncheckedIcon={false} checkedIcon={false} boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)" height={20} width={48} className="react-switch" id="material-switch"/>
               </label>
               <br/>
               <br/>
               <span id="accentuation">Accentuation Color</span>
               <div id="colors">
                  <Color color="#EB5925" colorname="orange" active={this.state.colors.orange} handleClick={this.changeColor.bind(this)}/>
                  <Color color="#5C3FC5" colorname="violet" active={this.state.colors.violet} handleClick={this.changeColor.bind(this)}/>
                  <Color color="#035AA6" colorname="bleu" active={this.state.colors.bleu} handleClick={this.changeColor.bind(this)}/>
                  <Color color="#03A678" colorname="vert" active={this.state.colors.vert} handleClick={this.changeColor.bind(this)}/>
                  <Color color="#F23D3D" colorname="rouge" active={this.state.colors.rouge} handleClick={this.changeColor.bind(this)}/>
               </div>
            </div>


            <div id="token">
               <span id="account">GitHub token</span>
               <div className="space"></div>
               {this.input}
               <Button type={type} handleClick={this.handleClickBtn.bind(this)}/>
            </div>

         </div>
      );
   }
}