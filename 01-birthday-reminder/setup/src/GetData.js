import React, { useEffect, useState } from "react"

const GetData = () => {
    const [users, setUsers] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")  /**fetch function is inbuild js function */
        const data = await response.json()
        console.log(data);
        setUsers(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {users.length > 0 && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default GetData;
