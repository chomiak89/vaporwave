import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../stylesheets/container.css'
import Grid from './Grid'

export default function Container() {
  return (
    <div className='display-container'>
      <Routes>
        <Route path='/grid' element={<Grid />}></Route>
      </Routes>
        
    </div>
  )
}
