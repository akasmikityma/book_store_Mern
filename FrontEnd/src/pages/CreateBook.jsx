import React,{useState} from 'react'
import { BackButton } from '../Components/BackButton';
import { Spinner } from '../Components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
export const CreateBook = () => {
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  const [publish_year, setpublish_year] = useState('');
  const [loading, setloading] = useState(false);
  const navigate=useNavigate();
  const {enqueueSnackbar}=useSnackbar();
  const  handleSaveBook=()=>{
    const data={
      title,
      author,
      publish_year
    };
    setloading(true);
    axios.post('http://127.0.0.1:3000/books',data)
    .then(()=>{
      setloading(false);
      enqueueSnackbar("the book is created SuccessFully",{variant:'success'});
      navigate('/');
    })
    .catch((err)=>{
      setloading(false);
      enqueueSnackbar("error",{variant:'error'})
      console.log(err);
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading?<Spinner/>:''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500 '>title</label>
        <input type="text" 
         value={title}
         onChange={(e)=> settitle(e.target.value)}
         className='border-2 border-gray-500 px-4 py-2 w-full'
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500 '>author</label>
        <input type="text" 
         value={author}
         onChange={(e)=> setauthor(e.target.value)}
         className='border-2 border-gray-500 px-4 py-2 w-full'
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500 '>publish_year</label>
        <input type="text" 
         value={publish_year}
         onChange={(e)=> setpublish_year(e.target.value)}
         className='border-2 border-gray-500 px-4 py-2 w-full'
        />
      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>save</button>
      </div>
      </div>
  )
}
