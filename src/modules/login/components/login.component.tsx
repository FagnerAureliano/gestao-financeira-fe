import { Component } from "react";
 
import {
    BrowserRouter,
    Routes,
    Route,
    RouterProps,
  } from "react-router-dom";
  
type Props =  RouterProps 
type State = {
    username: string,
    password: string,
    loading: boolean,
    message: string
  };

export default class Login extends Component<Props, State>{

    // handleLogin(formValue: { username: string; password: string }) {
    //     const { username, password } = formValue;
    
    //     this.setState({
    //       message: "",
    //       loading: true
    //     });
    // }


}