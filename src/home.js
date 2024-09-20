import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Home() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

   

   

    return (
        <div className="container mt-5">
            <h1>User List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map(u => (
                        <tr key={u.id}>
                            <td>{u.name}</td>
                            <td>{u.age}</td>
                            <td>{u.address.street}, {u.address.city}, {u.address.state}, {u.address.zip}</td>
                            <td>{u.email}</td>
                            <td>
                             <Link to={`/user/${u.id}`}>
                                 <button className="btn btn-primary btn-sm" >
                                    Edit
                                </button>
                             </Link>
                                <button className="btn btn-danger btn-sm ml-2" >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
