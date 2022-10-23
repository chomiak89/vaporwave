import React, {useState, useContext, useEffect} from 'react'
import { AppContext } from '../contexts/app.context'
import '../stylesheets/grid.css'

export default function Grid() {
    //context settings 
    const {gridWidth, gridWidthRef, gridHeight, gridHeightRef} = useContext(AppContext)
    //local states
    const [columns, setColumns] = useState(gridWidth)
    const [rows, setRows] = useState(gridHeight)

//testing console logs
console.log('columns: ', columns)
console.log('rows: ', rows)

//number of tiles to print to screen
const numOfElem = columns * rows

//event list - update tiles printed on screen resize
function updateOnResize() {
  setColumns(Math.floor(document.body.clientWidth / gridWidthRef.current))
  setRows(Math.floor(document.body.clientHeight / gridHeightRef.current))
}

useEffect(() => {
  window.addEventListener("resize", () => {
    updateOnResize()
  })
}, [])

//update tiles on screen with width change from settings
useEffect(() => {
  setColumns(Math.floor(document.body.clientWidth / gridWidth))
}, [gridWidth])
useEffect(() => {
  setRows(Math.floor(document.body.clientHeight / gridHeight))
}, [gridHeight])

console.log("number of elements: ", numOfElem)

  return (
    <div 
    className='grid-main-container' 
    style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`
        }}>

       {Array.from(Array(numOfElem)).map((e, i) => {
        return (
            <div className='grid-item' key={i}></div>
        )
       })}



    </div>
  )
}

