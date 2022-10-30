import React, {useState, useContext, useEffect, useRef} from 'react'
import { AppContext } from '../contexts/app.context'
import '../stylesheets/grid.css'
import anime from 'animejs'

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

// AnimeJS 

const animation = useRef(null)

// useEffect(() => {
//   animation.current = anime ({
//     targets: '.grid-main-container .grid-item',
//     background: '#FFF',
//     scale: [
//       {value: .1, easing: 'easeOutSine', duration: 500},
//       {value: 1, easing: 'easeInOutQuad', duration: 1200}
//     ],
//   delay: anime.stagger(200, {grid: [rows, columns], from: 'center'})
//   }, [])
// })

const handleOnClickAnime = (index) => {
  animation.current = anime ({
    targets: '.grid-main-container .grid-item',
    background: '#e76df2',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
  delay: anime.stagger(200, {grid: [columns, rows], from: 'center'})
  })
}



  return (
    <div 
    className='grid-main-container' 
    style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`
        }}>

       {Array.from(Array(numOfElem)).map((e, i) => {
        return (
            <div className='grid-item' key={i} onClick={() => {handleOnClickAnime()}}></div>
        )
       })}



    </div>
  )
}

