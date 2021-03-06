import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../App.css';
import Header from "./dashboard_header.js"
import Body from "./dashboard_body.js"
import pending from "../images/status_pending.png"
import complete from "../images/status_complete.png"
import uncomplete from "../images/status_uncomplete.png"

export default class NewListing1 extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Body>
                    <div>
                        <h1>Add new listing</h1>
                        <Link to="/dashboard"><button type='' className='cancel'>Cancel</button></Link>
                    </div> 
                    <div>
                        <p>Step 4</p>
                        <div className="statuses">
                            <img alt="" src={complete}/>
                            <img alt="" src={complete}/>
                            <img alt="" src={complete}/>
                            <img alt="" src={pending}/>
                            <img alt="" src={uncomplete}/>
                        </div> 
                        <div><h1>Property Name</h1></div>
                        <input type='' className=''/>
                        <div><h1>Property Description</h1></div>
                        <textarea className="property_textarea"></textarea>
                        <div><Link to="/newlisting5"><button type='' className='nextStep'>Next Step</button></Link></div> 
                    </div> 
                </Body>
            </div> 
        )
    }
}