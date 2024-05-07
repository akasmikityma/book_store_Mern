import React,{useState} from 'react';
import { Spinner } from '../Components/Spinner';
import axios from 'axios';
import { BackButton } from '../Components/BackButton';
import { useNavigate,useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
export const Delete = () => {
  const [loading, setloading] = useState(false);
  const navigate=useNavigate();
  const {id}=useParams();
  const {enqueueSnackbar}=useSnackbar();
  const handleDeleteBook=()=>{
    setloading(true);
    axios.delete(`http://127.0.0.1:3000/books/${id}`)
    .then(()=>{
      setloading(false);
      enqueueSnackbar("the book is deleted ,Successfully",{variant:'success'})
      navigate('/');
    }).catch((err)=>{
      setloading(false);
      enqueueSnackbar("error occured",{variant:'error'})
      console.log(err);
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading? <Spinner/>:""}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You sure, U want to delete this Book?</h3>
       <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>Yes Delete it</button>
      </div>
    </div>
  )
}
