import React, { useEffect,useState } from 'react'
import { Spinner } from '../Components/Spinner.jsx'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BackButton } from '../Components/BackButton.jsx';

export const Show = () => {
  const [book, setbook] = useState({});
  const [Loading, setLoading] = useState(false);
  const {id}=useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://127.0.0.1:3000/books/${id}`)
    .then((response)=>{
      setbook(response.data);
      setLoading(false);
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div className='p-4'>
       <BackButton/>
       <h1 className='text-3xl my-4'>show book</h1>
       {Loading?(
        <Spinner/>
       ):(
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>id</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>title</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>publish year</span>
            <span>{book.publish_year}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>creation Tine</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Tine</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
       )}
    </div>
  )
}
