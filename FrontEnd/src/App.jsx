import React from 'react'
import { Home } from './pages/Home'
import { CreateBook } from './pages/CreateBook'
import { Show } from './pages/Show'
import { Update } from './pages/Update'
import { Delete } from './pages/Delete'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/books/create' element={<CreateBook/>}/>
     <Route path='/books/details/:id' element={<Show/>}/>
     <Route path='/books/update/:id' element={<Update/>}/>
     <Route path='/books/delete/:id' element={<Delete/>}/>
    </Routes>
  )
}

export default App