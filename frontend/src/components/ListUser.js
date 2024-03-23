import React, { useEffect } from "react";

function ListUser(){
    
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
        } catch (error){
            console.error("There was problem with your fetch operation:", error);
        }
    }
    
    return(
        <div className="border rounded-2xl bg-[#113946] w-[650px] mx-auto p-16 text-white">
            <h1 className="text-2xl font-semibold uppercase">List User</h1>
        </div>
    )
}

export default ListUser;