import React from "react";
import { Link } from "react-router-dom";
export default function log(){
    return(
        <div>
            <input type="email" placeholder="entrer votre email"/>
            <input type="password"/>
            <Link to='/home'>go</Link>
        </div>
    )
}