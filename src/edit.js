import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Edit(){
    const {id}=useParams();
    const [user,setUser]=useState(null);
    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then(res => res.json())
            .then(data => setUser(data.find(l=>l.id===Number(id))))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);
    if(user){
        return(
            <div>
                <h1>user information</h1>
                <p>nom : {user.name}</p>
                <p>age : {user.age}</p>
                <p>adresse : {user.street}, {user.city}, {user.state}, {user.zip}</p>
                <p>email : {user.email}</p>
            </div>
        )
    }else{
        return(
            <div>
                <h1>not found</h1>
            </div>
        )
    }
}