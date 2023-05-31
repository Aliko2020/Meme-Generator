import React from 'react'
import framed from './images/framed.png'
import memesdata from './memedata'
import { useState } from 'react'



const Meme = () => {
  const [memeImage,setMemeImage] = useState("")
  

    function clickHandler(){
        const memesArray =memesdata.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)

        
    }
 
  return (
    <div className='meme'>
        <main>
                
                <input className='first-input' placeholder='Top-Text'/>
                <input className='first-input' placeholder='Buttom-Text' />
                <button className='btn' onClick={clickHandler}>Get Me a New Meme<img src={framed} alt="" /></button>
                
                
        </main>
        <div className='image-container'>
        <img src={memeImage} alt="memeImage" className='hero'/>
        </div>
    </div>
  )
}

export default Meme