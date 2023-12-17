import React from 'react'
import getPhrases from '../utils/getPhrases'
import phrase from '../utils/phrases.json'
import photos from '../utils/photos.json'

const Press = ({setquoteRamdon, setPhotoRamdon}) => {
    const pressForAnotherPhrase = () => {
        setquoteRamdon(getPhrases(phrase))
        setPhotoRamdon(getPhrases(photos))
    }

  return (
    <button className='app_btn' onClick={pressForAnotherPhrase}>Otra galleta</button>
  )
}

export default Press