import React, {useState, useContext, useEffect} from 'react'
import { AppContext } from '../contexts/app.context'
import '../stylesheets/grid.css'

export default function Grid() {
    //context settings 
    const {gridWidth, gridHeight} = useContext(AppContext)
    //local states
    const [columns, setColumns] = useState(Math.floor(document.body.clientWidth / 50))
    const [rows, setRows] = useState(Math.floor(document.body.clientHeight / 50))

//testing console logs
console.log('columns: ', columns)
console.log('rows: ', rows)

//number of tiles to print to screen
const numOfElem = columns * rows

//event list - update tiles printed on screen resize
window.addEventListener("resize", (event) => {
    console.log('changing')
    setColumns(Math.floor(document.body.clientWidth / gridWidth))
    setRows(Math.floor(document.body.clientHeight / gridHeight))
})

//update tiles on screen with width change from settings
useEffect(() => {
  setColumns(Math.floor(document.body.clientWidth / gridWidth))
}, [gridWidth])
useEffect(() => {
  setRows(Math.floor(document.body.clientWidth / gridHeight))
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

