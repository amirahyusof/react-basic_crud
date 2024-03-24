import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListUser(){
    
    const[users, setUsers] = useState([]);

    useEffect(()=>{
        getUser();
    },[]);
    
    async function getUser(){
        try {
            const response =await fetch('http://localhost/API/saveUser.php');
            
            if(!response.ok){
            throw new Error("Network response not ok");
            }

            const data = await response.json();
            console.log(data);
            setUsers(data);

        } catch (error){
            console.error("There was problem with your fetch operation:", error);
        }
    }
    
    return(
        <div className="border rounded-2xl bg-[#113946] w-[650px] mx-auto p-16 text-white">
            <h1 className="text-2xl font-semibold uppercase">List User</h1>
            <table className="border my-4 mx-auto">
                <thead>
                    <tr>
                        <th className="px-4">No</th>
                        <th className="px-6">Name</th>
                        <th className="px-6">Email</th>
                        <th className="px-6">Phone</th>
                        <th className="px-6">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map( (user, key) =>
                    <tr key={key}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <Link className="px-4" to={`/user/${user.id}/edit`}>Edit</Link>
                            <button className="px-2">Delete</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListUser;