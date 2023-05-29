import React from 'react'
import Trollface from './images/Trollface.png'

const Header = () => {
  return (
    <div className='header-container'>
        <header>
            <img src={Trollface} alt="trollface" />
            <h2>Meme Generator</h2>
        </header>
    </div>
  )
}

export default Header