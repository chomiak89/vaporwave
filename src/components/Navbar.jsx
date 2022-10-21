import React, {useContext} from 'react'
import '../stylesheets/navbar.css'
import SettingsDropdown from './SettingsDropdown'
import DemosDropdown from './DemosDropdown'
import { AppContext } from '../contexts/app.context'

export default function Navbar() {
    const {currentDemo, setCurrentDemo} = useContext(AppContext)
  return (
    <div className='navbar'>
        <h4>navbar</h4>
        <DemosDropdown />
        <SettingsDropdown />
    </div>
  )
}
