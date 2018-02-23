import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../App.css';
import logo from "../images/logo_small.png";


export default class Header extends Component{
    render(){
        return(
            <div>
                <div className="dashboard_header">
                    <div>
                        <img alt="" src={logo}/>
                        <span className="houser">Houser</span>
                        <span className="">Dashboard</span>
                        <Link to="/"><span className="logout">Logout</span></Link>
                    </div> 
                </div> 
            </div> 
        )
    }
}