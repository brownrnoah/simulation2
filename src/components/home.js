import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../App.css';

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    clickHandler(){
        
    }



    render() {
        return (
            <div>
                <div className="main_body">
                    <img alt="" src="" />
                    <p className="username_p">Username</p>
                    <input type='text' className='username' />
                    <p className="password_p">Password</p>
                    <input type='password' className='password' />
                    <div>
                        <Link to="/dashboard"><button type='submit' onClick="" className='login'><label>LOGIN</label></button></Link>
                        <Link to="/dashboard"><button type='submit' className='register'>REGISTER</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}