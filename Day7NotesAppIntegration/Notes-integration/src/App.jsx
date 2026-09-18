import { useState } from 'react'

const App = () => {

    const [formValues, setFormValues] = useState({
      title:"",
      description:"",
    });

    const handleChange = (e) => {
          setFormValues(prev => ({...prev, [e.target.name]:e.target.value}));
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formValues);

      setFormValues({
        title:"",
        description:""
      });
    };

  return (
    <div className='h-screen p-5 flex flex-col gap-5'>
      <h1 className='text-3xl font-semibold'>Notes App</h1>
<br />
      <form onSubmit={handleSubmit} className='w-70 border border-black rounded-xl flex flex-col p-4 gap-5'>
        <input onChange={handleChange}
        name = "title" value={formValues.tilte}
        className='p-2 outline-none text-xl rounded border border-black'  type="text" placeholder='title'/>
        <br />
        <input onChange={handleChange}
        name = "description" value={formValues.description}
        className='p-2 outline-none text-xl rounded border border-black' type="text" placeholder='description' />
        <button className='bg-blue-600 text-black p-2 rounded-xl' >Add Note</button>
      </form>
    </div>
  )
}

export default App
