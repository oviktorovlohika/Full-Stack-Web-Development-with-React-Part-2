import React from 'react'

function ErrMess({ message }) {
  return (
   <div className='container'>
      <div className='row'>{ message }</div>
   </div>  
  )
}

export default ErrMess
