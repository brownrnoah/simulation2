import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from './components/home.js';
import './App.css';
import NewListing1 from "./components/newListing1.js";
import NewListing2 from "./components/newListing2.js";
import NewListing3 from "./components/newListing3.js";
import NewListing4 from "./components/newListing4.js";
import NewListing5 from "./components/newListing5.js";
import Dashboard from "./components/dashboard.js";


export default function Routes(){
    return (
        <div>
            <div>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/newListing1' component={NewListing1}/>
                    <Route path='/newListing2' component={NewListing2}/>
                    <Route path='/newListing3' component={NewListing3}/>
                    <Route path='/newListing4' component={NewListing4}/>
                    <Route path='/newListing5' component={NewListing5}/>
                </Switch>
            </div> 
        </div> 
    )
}