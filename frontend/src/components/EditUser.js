import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function EditUser(){
    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getUser();
    },[]);
    
    async function getUser(){
        try {
            const response =await fetch(`http://localhost/API/user.php/${id}`);
            
            if(!response.ok){
            throw new Error("Network response not ok");
            }

            const data = await response.json();
            console.log(data);
            setInputs(data);

        } catch (error){
            console.error("There was problem with your fetch operation:", error);
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({
            ...values,
            [name]: value
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost/API/user.php/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            });

            if (!response.ok) {
                throw new Error("Network response not ok");
            }


            const data = await response.json();
            console.log(data);

            // Navigate to the desired route using navigate.push
            navigate('/');
        } catch (error) {
            console.error('Error processing request', error);
        }
    }

    return (
        <div className="border rounded-2xl bg-[#113946] w-[650px] mx-auto p-16 text-white">
            <h1 className="text-2xl font-semibold uppercase">Edit User</h1>
            <form onSubmit={handleSubmit} className="w-[450px] mx-auto mt-6">
                <label>Name:</label>
                <input value={inputs.name} className="mb-6 mx-2 mt-4 px-2 w-[300px] text-black" type="text" name="name" onChange={handleChange} />
                <br />

                <label>Email:</label>
                <input  value={inputs.email} className="mb-6 mx-2 px-2 w-[300px] text-black" type="text" name="email" onChange={handleChange} />
                <br />

                <label>No.Phone:</label>
                <input  value={inputs.phone} className="mb-4 mx-2 px-2 w-[280px] text-black" type="text" name="phone" onChange={handleChange} />
                <br />

                <button className="border w-[100px] mb-4 rounded-full p-2">Submit</button>
            </form>
        </div>
    )

}

export default EditUser;