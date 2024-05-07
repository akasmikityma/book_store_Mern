import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Spinner } from '../Components/Spinner';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md';
import { BookTable } from '../Components/Home/BookTable';
import { Bookcard } from '../Components/Home/Bookcard';
// import { book } from '../../../BackEnd/models/bookModel.js';
export const Home = () => {
    const [books, setbooks] = useState([]);
    const [Showtype, setShowtype] = useState('table');
    const [Loading, setLoading] = useState(true);
   useEffect(()=>{
    setLoading(true);
         axios.get('http://127.0.0.1:3000/books')
         .then((response=>{
            setbooks(response.data.data);
            console.log(response.data.data)
            setLoading(false);
         })).catch((err)=>{
            console.log(err);
            setLoading(false);
         })
   },[]);
  return (
    <div className='p-4'>
        <div className='flex justify-center items-center gap-x-4'>
            <button 
            className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
            onClick={()=>setShowtype('table')}
            >
            Table
            </button>
            <button 
            className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
            onClick={()=>setShowtype('card')}
            >
            Card
            </button>
        </div>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl my-8'>Books List</h1>
          <Link to='books/create'>
            <MdOutlineAddBox className='text-sky-800 text-4xl'/>
          </Link>
        </div>
        {Loading?(
            <Spinner/>
        ):(
           Showtype==='table'?<BookTable books={books}/>:<Bookcard books={books}/>
        )}
        {/* home */}
    </div>
  )
}
