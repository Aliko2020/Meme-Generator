import React from 'react'
import framed from './images/framed.png'
import memesdata from './memedata'


const Meme = () => {
    function clickHandler(){
        
        const memesArray = memesdata.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length) 
        console.log(randomNumber);
        
        
    }
  return (
    <div className='meme'>
        <main>
            
                <input className='first-input' placeholder='Top-Text'/>
                <input className='first-input' placeholder='Buttom-Text' />
                <button className='btn' onClick={clickHandler}>Get Me a New Meme<img src={framed} alt="" /></button>
        </main>
    </div>
  )
}

export default Meme