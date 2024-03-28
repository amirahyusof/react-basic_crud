import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [inputs, setInputs] = React.useState([]);
    const navigate = useNavigate();

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
            const response = await fetch('http://localhost/API/user.php', {
                method: 'POST',
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

            // Navigate to list of user
            navigate('/user/list');
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    }

    return (
        <div className="border rounded-2xl bg-[#113946] w-[650px] mx-auto p-16 text-white">
            <h1 className="text-2xl font-semibold uppercase">Create User</h1>
            <form onSubmit={handleSubmit} className="w-[450px] mx-auto mt-6">
                <label>Name:</label>
                <input className="mb-6 mx-2 mt-4 px-2 w-[300px] text-black" type="text" name="name" onChange={handleChange} />
                <br />

                <label>Email:</label>
                <input className="mb-6 mx-2 px-2 w-[300px] text-black" type="text" name="email" onChange={handleChange} />
                <br />

                <label>No.Phone:</label>
                <input className="mb-4 mx-2 px-2 w-[280px] text-black" type="text" name="phone" onChange={handleChange} />
                <br />

                <button className="border w-[100px] mb-4 rounded-full p-2 bg-[#EAD7BB] text-black hover:bg-[#FFF2D8]">Submit</button>
            </form>
        </div>
    )
}

export default CreateUser;
