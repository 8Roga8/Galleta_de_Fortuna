import './App.css'
import phrases from './utils/phrases.json'
import getPhrases from './utils/getPhrases'
import { useState } from 'react'
import Phrase from './components/Phrase'
import Press from './components/Press'
import backgroundIndex from './utils/photos.json'



function App() {

  const ramdonPhrase = getPhrases(phrases)
  const pageBackground = getPhrases(backgroundIndex)

  const [quoteRamdon, setquoteRamdon] = useState(ramdonPhrase)
  const [photoRamdon, setPhotoRamdon] = useState(pageBackground )

  const odjStyle = {
    backgroundImage: `url(/fondo${photoRamdon}.jpg)`,
  }

  return (
   <div className='all' style = {odjStyle}>
        <h1 className='title'>Galletas de la Fortuna.</h1> 
      <div className='bg_card'>     
        <Phrase quoteRamdon = {quoteRamdon}/>
      </div>    
      <div>
        <Press 
        setquoteRamdon = {setquoteRamdon}
        setPhotoRamdon = {setPhotoRamdon}
        />
      </div>
   </div>
  )
}

export default App
