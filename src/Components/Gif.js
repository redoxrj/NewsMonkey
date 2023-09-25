import React from 'react'
import gif from './loading-thinking.gif'

const Gif=()=>{
  
    return (
      <div className='text-center'>
        <img src={gif} alt="loading" className='w-25' style={{height : '150px'}} />
        
      </div>
    )
  
}

export default Gif
