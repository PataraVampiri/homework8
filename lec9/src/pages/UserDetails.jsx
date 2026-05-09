import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function UserDetails() {
    const params = useParams()
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const getUserById = async (id) => {
        const resp = await fetch(`https://dummyjson.com/users/${id}`)
        if(resp.status === 200){
            const data = await resp.json()
            setUser(data)
        }
        if(resp.status === 400 || resp.status === 404){
            navigate('/not-found')
        }
    }

    useEffect(() => {
        getUserById(params.id)
    }, [])
    
  return (
    <div>
        <Link to={'/users'}>Back to users</Link>
        <br />
        <img src={user.image} />
        <h1>{user.firstName} {user.lastName}</h1>
        <h2>{user.age}</h2>
        <h2>{user.email}</h2>
        <h2>{user.birthDate}</h2>
        <h2>{user.phone}</h2>
        <h2>{user.university}</h2>
        <h2>{user.weight}KG</h2>
        <h2>{user.height}CM</h2>
    </div>
  )
}
