import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListUser(){
    const[users, setUsers] = useState([]);

    useEffect(()=>{
        getUser();
    },[]);
    
    async function getUser(){
        try {
            const response =await fetch('http://localhost/API/user.php');
            
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

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost/API/user.php/${id}/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error("Network response not ok");
            }

           setUsers(users.filter(user => user.id !== id));
           console.log("User deleted successfully")

        } catch (error) {
            console.error('Error processing request', error);
        }

    }
    
    return(
        <div className="border rounded-2xl bg-[#113946] w-[650px] mx-auto px-6 text-white">
            <h1 className="text-2xl font-semibold uppercase my-4">List User</h1>
            <table className="border my-8 w-[600px]">
                <thead>
                    <tr>
                        <th className="px-4 mx-4">No</th>
                        <th className="px-6 mx-4">Name</th>
                        <th className="px-6 mx-4">Email</th>
                        <th className="px-6 mx-4">Phone</th>
                        <th className="px-6 mx-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map( (user, key) =>
                    <tr key={key}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td className="px-4">{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <Link className="px-4 border rounded-lg bg-[#EAD7BB] text-black mx-2 hover:bg-[#FFF2D8]" to={`/user/${user.id}/edit`}>Edit</Link>
                            <button className="px-2 border rounded-lg bg-[#EAD7BB] text-black hover:bg-[#FFF2D8]" onClick={()=> deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListUser;