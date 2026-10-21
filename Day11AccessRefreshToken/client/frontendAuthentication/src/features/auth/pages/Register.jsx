import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import {useAuth} from "../context/AuthContext.jsx";
import useApi from "../../../shared/api.jsx";

const Register = () => {
      const auth = useAuth();
      const navigate = useNavigate();
      const api = useApi(); 
      const [form, setForm] = useState({name: "", email:"", password:""});
      const [error, setError] = useState(null);

      const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        try{
          // await register(form)
          // navigate("/profile")
          const response = await api.post("/auth/register", form);

          console.log(response.data)

        } catch(err){
          setError(err?.message || "Registration failed");
        }
      }

  return (
    <div className='flex gap-5'>
      <form onSubmit={handleSubmit} className='mt-5 ml-5 flex flex-col gap-5'>
        <div>
          <p>Name</p>
          <input name="name" value={form.name} onChange={handleChange} className='border border-blue-300' type="text" placeholder='enter your name' />
        </div>
        <div>
          <p>Email</p>
          <input name="email" value={form.email} onChange={handleChange} className='border border-blue-300' type="email" id="" placeholder='enter your email'/>
        </div>
        <div>
          <p>Password</p>
          <input name="password" value={form.password} onChange={handleChange} className='border border-blue-300' type="password" id="" placeholder='enter your password'/>
        </div>
        <button type="submit" className='bg-blue-500'>Register</button>
      </form>
      {error && <p>{error}</p> }
    </div>
  )
}

export default Register
