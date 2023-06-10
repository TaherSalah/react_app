import React, { Component } from "react";
import Home from "./compontes/Home/Home";
import About from "./compontes/About/About";
import Contacts from "./compontes/contacts/Contacts";

export default class App extends Component{
  state={

  }
  render(){
    return (
    <React.Fragment>
      <h1 className="demo">Hello World, Taher Salah</h1>
      <h1>Hello World, Taher Salah</h1>
      <label htmlFor="h1">heloooooo</label>
      <input id="h1"  type="email" />
      <Home/>
<About/>
<Contacts/>
      <h1>Hello World, Taher Salah</h1>
      <h1>Hello World, Taher Salah</h1>
      <h1>Hello World, Taher Salah</h1>
      
    </React.Fragment>
    )
  }
  
}