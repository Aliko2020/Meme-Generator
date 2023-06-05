import React from 'react'
import framed from './images/framed.png'
import memesdata from './memedata'
import { useState } from 'react'



const Meme = () => {
  
  const [memes, setMemes] = useState({
    topText : "",
    buttomText: "",
    randomImage : "https://i.imgflip.com/gk5el.jpg"
  })

  const [allMemeImages , setAllMemeImage] = useState(memesdata)

  const [memeImage,setMemeImage] = useState("https://i.imgflip.com/gk5el.jpg")

  const [topText, setTopText] = useState('')
  const [buttomText , setButtomTex] = useState('')
  
  function clickHandler(){
        const memesArray =allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemes((preMe)=>({
          ...preMe, randomImage: url
        }))

        
    }

  return (
    <div className='meme'>
        <main>
                
                <input className='first-input' placeholder='Top-Text' value={topText} onChange={(e)=> setTopText(e.target.value)} />
                <input className='first-input' placeholder='Buttom-Text' value={buttomText} onChange={(e)=>setButtomTex(e.target.value)} />
                <button className='btn' onClick={clickHandler}>Get Me a New Meme<img src={framed} alt="" /></button>
                
                
        </main>
        <div className='image-container'>
          <h1 className='top'>{topText}</h1>
        <img src={memes.randomImage} alt="memeImage" className='hero'/>
        <h1 className='buttom'>{buttomText}</h1>
        </div>
    </div>
  )
}

export default Meme