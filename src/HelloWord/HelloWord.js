export default function HelloWord({lastname}){
  
    const age = 20;
    let isAdult = false;
    if(age > 18){
        isAdult= true;
        if(isAdult){
            return <h1>Hello {lastname} Adult</h1>
        }else{
            return <h1>Hello {lastname} Minor</h1>
    
        }
    }
   
   
   
   
}
/*
import { Component } from "react";

export default class HelloWord extends Component{
    render(){
        return <h1>Hello Words</h1>
    }
}
*/


