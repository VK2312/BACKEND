import React, { Children } from 'react'
import {useAuth} from "../context/AuthContext.jsx";

const Profile = () => {
  const {user, loading, isAuthenticated, logout} = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  if(!isAuthenticated) {
    return <div>Not Logged in</div>
  }


  return (
    <div>
      <h1>Profile</h1>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
      <button onClick={logout} >Logout</button>
    </div>
  )
}

export default Profile
