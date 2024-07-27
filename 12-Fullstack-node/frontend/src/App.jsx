import React, { useEffect, useState } from 'react'

export default function App() {
  const [users,setUsers] =useState([])

  useEffect(() => {
    fetch(import.meta.env.VITE_API+'/users')
      .then((res) => {
        if(!res.ok){
          throw new Error('Network response was not ok' + res.statusText)
        }
        return res.json()
      })
      .then((result) => {
        setUsers(result)
        console.log(result)
      })
      .catch((error)=> {
        console.error('There has been a problem with your fetch operation:', error)
      })
  },[])
  return (
    <div>
      <h1>Users</h1>
      <ul>
      {users.map((user)=>(
        <li key={user.id}>User: {user.username}, Email: {user.email}</li>
      ))}
      </ul>
    </div>
  )
}
