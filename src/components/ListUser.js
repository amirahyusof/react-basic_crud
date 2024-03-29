import React from 'react';

function ListUser(){
    const [inputs, SetInputs] = React.useState({})

    const handleChange=(event) => {
        const name = event.target.name;
        const value = event.target.value;
        SetInputs(values => ({
            ...values, 
            [name]: value
        }));
    }

    const handleSubmit=(event) => {
        event.preventDefault();

        console.log(inputs)
    }

    return(
        <div className="border rounded-2xl bg-[#113946] w-[650px] mx-auto p-16 text-white">
            <h1 className="text-2xl font-semibold uppercase">List User</h1>
            <form onSubmit={handleSubmit} className="w-[450px] mx-auto mt-6">
                <label>Name:</label>
                <input className="mb-6 mx-2 mt-4 px-2 w-[300px] text-black" type="text" name="name" onChange={handleChange}/>
                <br />

                <label>Email:</label>
                <input className="mb-6 mx-2 px-2 w-[300px] text-black" type="text" name="email" onChange={handleChange} />
                <br />

                <label>No.Phone:</label>
                <input className="mb-4 mx-2 px-2 w-[280px] text-black" type="text" name="phone" onChange={handleChange} />
                <br />
                
                <button className="border w-[100px] mb-4 rounded-full p-2">Submit</button>
            </form>
        </div>
    )
}

export default ListUser;