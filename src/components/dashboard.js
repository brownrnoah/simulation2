import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import Header from "./dashboard_header.js"
import Body from "./dashboard_body.js"

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body>
                    <Link to="/newlisting1"><button type='' className=''>Add new property</button></Link>
                    <div>
                        <span className="">List properties with "desired rent" greator than: $ </span>
                        <input type='' placeholder="0" className='' />
                        <button type='' className=''>Filter</button>
                        <button type='' className=''>Reset</button>
                    </div>
                    <hr />
                    <div>
                        <span className="">Home Listings</span>
                    </div>
                </Body>
            </div>
        )
    }
}