import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts/app.context'
import '../stylesheets/demosDropdown.css'

export default function DemosDropdown() {

    const {currentDemo, setCurrentDemo} = useContext(AppContext)
    const [visible, setVisible] = useState(false)


  return (
    <div className='demos-main-container'>
        <button className='demos-toggle-button' onClick={() => {
            setVisible(!visible)
        }}>demos</button>
        {visible && (
            <div className='demos-container'>
                <Link to={'/grid'} onClick={() => {setCurrentDemo('grid')}}>Grid</Link>
            </div>
        )}
    </div>
  )
}
