import React, { useState } from "react";
import axios from "axios";

const AddUser = props => {
    const initialState = {
        name: "",
        bio: ""
    }
    const [addInputs, setAddInputs] = useState(initialState)

    const handleChange = e => {
        e.preventDefault();
        setAddInputs({
            ...addInputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/users`, addInputs)
             .then(res => {
                 console.log({ res })
                 props.setUsers([
                     ...props.users,
                     res.data
                 ])
                 setAddInputs(initialState)
             })
             .catch(err => {
                 console.log({ err })
             })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                name="name"
                type="text"
                placeholder="Name"
                value={addInputs.name}
                onChange={handleChange}
            />
            <input 
                name="bio"
                type="text"
                placeholder="Bio"
                value={addInputs.bio}
                onChange={handleChange}
            />
            <button>Create New User</button>
        </form>
    )
}

export default AddUser;