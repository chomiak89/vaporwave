import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../stylesheets/container.css'
import Grid from './Grid'
import Test_component from './Test_component'

export default function Container() {
  return (
    <div className='display-container'>
      <Routes>
        <Route path='/grid' element={<Grid />}></Route>
        <Route path='/test' element={<Test_component />}></Route>
      </Routes>
        
    </div>
  )
}
