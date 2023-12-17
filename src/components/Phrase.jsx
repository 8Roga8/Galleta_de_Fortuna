import React from 'react'

const Phrase = ({quoteRamdon}) => {

    console.log(quoteRamdon);

  return (   
    <p className='app_phrase'>{quoteRamdon.phrase}</p>
    
  )
}

export default Phrase