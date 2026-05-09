import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
    const [users, setUsers] = useState([])

    const getAllUsers = async () => {
        const resp = await fetch('https://dummyjson.com/users')
        const data = await resp.json()
        setUsers(data.users)
    }

    useEffect(()=>{
        getAllUsers()
    }, [])


  return (
    <div>
        <h1>Users</h1>
        <div className='usersContainer'>
            {users.map((user) => (
                <div key={user.id} className='userCard'>
                    <img src={user.image} alt="" />
                    <h2>{user.firstName} {user.lastName}</h2>
                    <p>{user.email}</p>
                    <h2>{user.phone}</h2>
                    <Link to={`/users/${user.id}`}>Show More</Link>
                </div>
            ))}
        </div>
    </div>
  )
}
