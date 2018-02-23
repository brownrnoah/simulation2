import React, { Component } from 'react';
import '../App.css';

export default class Body extends Component{
    render(){
        return(
            <div>
                <div className="dashboard_body">{this.props.children}</div> 
            </div> 
        )
    }
}