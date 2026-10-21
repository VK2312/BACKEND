import React, { use, useState } from 'react'
import useApi from '../../shared/useApi'
import {useAuthContext} from '../context/AuthProvider';

const Register = () => {
    const api = useApi();
    const authContext = useAuthContext();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault()

        const response = await api.post('/auth/register', {
            name, 
            email,
            password
        })

        console.log(response.data);
        authContext.setAccessToken(response.data.accessToken);
    }

  return (
    <main>
        <form className='flex-col gap-4 m-5 w-5' onSubmit={handleSubmit}>
                Name<input className='border p-2 rounded-sm' 
                value={name} onChange={e => setName(e.target.value)} 
                type="text" required placeholder='enter your name' />

                Email<input className='border p-2 rounded-sm' 
                value={email} onChange={e => setEmail(e.target.value)} 
                type="text" required placeholder='enter your email'/>

                Password<input className='border p-2 rounded-sm' 
                value={password} onChange={e => setPassword(e.target.value)} 
                required type="password" name="password" id="password" placeholder='enter your password' />

                <button type="submit" className='bg-blue-300 border p-2 rounded-sm mt-5' >Submit</button>
        </form>
    </main>
  )
}

export default Register
