import React, {useState, useContext} from 'react'
import { AppContext } from '../contexts/app.context'
import '../stylesheets/settingsDropdown.css'

export default function Sidebar() {

    const {currentDemo, gridWidth, setGridWidthRef, gridHeight, setGridHeightRef} = useContext(AppContext)
    //state for displaying or hiding menu
    const [visible, setVisible] = useState(false)


  return (
    <div className='settings-main-container'>
        <button className='settings-toggle-button' onClick={() => {
            setVisible(!visible)
        }}>settings</button>
        {visible && (
            <div className='settings-container'>
              {/* ℹ️ menu for the grid component */}
                {currentDemo === 'grid' && (
                  <>
                    <p>width: {gridWidth}</p>
                    <input type="range" min={25} max={100} value={gridWidth} onChange={(e) => {setGridWidthRef(e.target.value)}}/>
                    <p>height: {gridHeight}</p>
                    <input type="range" min={25} max={100} value={gridHeight} onChange={(e) => {setGridHeightRef(e.target.value)}}/>
                    <button onClick={() => {setGridWidthRef(50); setGridHeightRef(50)}}>reset</button>
                  </>
                )}
            </div>
        )}
    </div>
  )
}
