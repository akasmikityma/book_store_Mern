import React,{useState,useEffect} from 'react'
import { BackButton } from '../Components/BackButton';
import { Spinner } from '../Components/Spinner';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
export const Update = () => {
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  const [publish_year, setpublish_year] = useState('');
  const [loading, setloading] = useState(false);
  const navigate=useNavigate();
  const {id}=useParams();
  useEffect(()=>{
    setloading(true);
    axios.get(`http://127.0.0.1:3000/books/${id}`)
    .then((response)=>{
         setauthor(response.data.author);
         settitle(response.data.title);
         setpublish_year(response.data.publish_year);
         setloading(false);
    }).catch((err)=>{
      setloading(false);
      alert('an error has occured. Please check Connection');
      console.log(err);
    })
  },[])
  const  handleupdateBook=()=>{
    const data={
      title,
      author,
      publish_year
    };
    setloading(true);
    axios.put(`http://127.0.0.1:3000/books/${id}`,data)
    .then(()=>{
      setloading(false);
      navigate('/');
    })
    .catch((err)=>{
      setloading(false);
      alert('An error has occured .Please check Console : ');
      console.log(err);
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>UPdate Book</h1>
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
      <button className='p-2 bg-sky-300 m-8' onClick={handleupdateBook}>save</button>
      </div>
      </div>
  )
}
