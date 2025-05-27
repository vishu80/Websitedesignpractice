import React from 'react'
import './Progressbar.css'
const Progressbar = ({color}) => {
  return (
    <div className='progress-bar'>
        <div className='progress-bar-inner-div' style={{backgroundColor:color}}>
        </div>
    </div>
  )
}

export default Progressbar
