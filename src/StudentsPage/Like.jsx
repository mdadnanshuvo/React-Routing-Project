import React, {Component} from 'react';


export default class Like extends Component{

  render (){
    let reaction = "fa fa-heart";
    if(!this.props.liked){
      reaction += "-o";
    }
    return (
  <i className = {reaction} aria-hidden = "true" style = {{cursor:"pointer"}} onClick = {this.props.onClick}></i>

    )
  }
}