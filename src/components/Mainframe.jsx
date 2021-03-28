import React from "react"
import {Route} from "react-router-dom";
import Profile from "./Mainframe/Profile/Profile";
import Dialogs from "./Mainframe/Dialogs/Dialogs";
import Users from "./Mainframe/Users/Users";

const Mainframe = () => {
    return (
        <div className="mainframe" >
            <Route component={Profile} path="/profile" />
            <Route component={Dialogs} path="/dialogs" />
            <Route component={Users} path="/users" />
        </div>
    )
}

export default Mainframe