import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';

const App = () => {

  const {register, handleSubmit} = useForm();


  const submitHandler = async (data) => {

    const formData = new FormData();

    formData.append("name",data.name);
    formData.append("email", data.email);
    
    // formData.append("images", data.images);
      // Append ALL selected files
    for (const image of data.images) {
      formData.append("images", image);
    }

    try {
      let response = await axios.post("http://localhost:3000/uploads", formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)} >
        <input {...register('name')} type="text" placeholder='Enter your name' required/> <br /> <br />
        <input {...register('email')} type="text" placeholder='Enter your email' required /> <br /> <br />
        <input {...register('images')} multiple type="file" placeholder='Upload your files' required/> <br /> <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
