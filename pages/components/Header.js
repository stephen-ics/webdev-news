import React from 'react'
import headerStyles from '/styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className='text-7xl flex justify-center mt-16'>
            <span className='text-blue-700'>WebDev</span> News
        </h1>
    </div>
  )
}

export default Header