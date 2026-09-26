import { useEffect, useState } from 'react'
import axios from 'axios';
import NoteCard from '../src/components/NoteCard';

const App = () => {

    const [formValues, setFormValues] = useState({
      title:"",
      description:"",
    });

    const [allNotes, setAllNotes] = useState([]);

    const [noteIdForUpdate, setNoteIdForUpdate] = useState(null);

    const handleChange = (e) => {
          setFormValues(prev => ({...prev, [e.target.name]:e.target.value}));
    }


    let getAllNotes = async () => {
      try {
          let res = await axios.get("http://localhost:3000/notes/allNotes");
          // console.log(res.data.data);
          setAllNotes(res.data.data);
      } catch (error) {
        console.log("Error in get all notes api", error);
      }
    }

    useEffect(() => {
        getAllNotes();
    }, []);


    //Handle Submit either get notes or update notes
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if(noteIdForUpdate){
        //api call for update
        let res = await axios.put(`http://localhost:3000/notes/${noteIdForUpdate}`, formValues);
        console.log(res);
        setNoteIdForUpdate(null);
      } else {
          //api call for creation 
      let res = await axios.post("http://localhost:3000/notes/create", formValues);
      console.log(res);
      }

      setFormValues({
        title:"",
        description:""
      });
      getAllNotes();
    };


    let deleteNote = async (id) => {
      try {
        let res = await axios.delete(`http://localhost:3000/notes/${id}`);
        console.log(res);
        getAllNotes();
      } catch (error) {
        console.log("Error occurred while deleting", error);
      }
    }

    let noteForUpdate = (note) => {
      console.log(note);
      setNoteIdForUpdate(note._id);
      setFormValues({
        title:note.title,
        description:note.description,
      });
    };

  return (
    <div className='h-screen p-5 flex flex-col gap-5'>
      <h1 className='text-3xl font-semibold'>Notes App</h1>
<br />
      <form onSubmit={handleSubmit} className='w-70 border border-black rounded-xl flex flex-col p-4 gap-5'>
        <input 
        onChange={handleChange}
        name = "title" 
        value={formValues.title}
        className='p-2 outline-none text-xl rounded border border-black'  type="text" placeholder='title'/>
        <br />
        <input 
        onChange={handleChange}
        name = "description" 
        value={formValues.description}
        className='p-2 outline-none text-xl rounded border border-black' 
        type="text" 
        placeholder='description' 
        minLength={20}
        required
        />
        <button className='bg-blue-600 text-black p-2 rounded-xl' >Add Note</button>
      </form>
      <div className='flex gap-4'>
        {
          allNotes.map(val => <NoteCard key={val._id} note={val} deleteNote={deleteNote} noteForUpdate={noteForUpdate}/>)
        }
      </div>

    </div>
  )
}

export default App
