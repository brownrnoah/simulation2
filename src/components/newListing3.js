import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import Header from "./dashboard_header.js"
import Body from "./dashboard_body.js"
import pending from "../images/status_pending.png"
import complete from "../images/status_complete.png"
import uncomplete from "../images/status_uncomplete.png"

export default class NewListing1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body>
                    <div>
                        <h1>Add new listing</h1>
                        <Link to="/dashboard"><button type='' className='cancel'>Cancel</button></Link>
                    </div>
                    <div>
                        <p>Step 3</p>
                        <div className="statuses">
                            <img alt="" src={complete} />
                            <img alt="" src={complete} />
                            <img alt="" src={pending} />
                            <img alt="" src={uncomplete} />
                            <img alt="" src={uncomplete} />
                        </div>
                        <div className="imagebox">
                            <img alt="" src=""/>
                            <h1>Preview</h1>
                        </div>
                        <div>
                            <h1>Image URL</h1>
                            <input type='text' className='' />
                        </div>
                        <div>
                            <div><Link to="/newlisting1"><button type='' className='nextStep'>Previous Step</button></Link></div>
                            <div><Link to="/newlisting4"><button type='' className='nextStep'>Next Step</button></Link></div>
                        </div>
                    </div>
                </Body>
            </div>
        )
    }
}