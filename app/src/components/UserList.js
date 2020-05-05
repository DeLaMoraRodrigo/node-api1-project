import React, { useState, useEffect } from "react";
import axios from "axios";

import AddUser from "./AddUser";
import UserCard from "./UserCard";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users`)
             .then(res => {
                 console.log({ res })
                 setUsers(res.data);
             })
             .catch(err => {
                 console.log({ err })
             })
    }, [])

    return(
        <>
            <AddUser users={users} setUsers={setUsers} />
            {users && users.map(user => {
                return <UserCard key={user.id} user={user} users={users} setUsers={setUsers} />
            })}
        </>
    )
}

export default UserList;