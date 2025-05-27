import React from 'react'
import './Maincontainer.css'
import Humanbody from './Humanbody'
import Calender from './Calender'
const Maincontainer = () => {
  return (
    <div className='maincontainer'>
        <Humanbody/>
        <Calender/>
    </div>
  )
}

export default Maincontainer
