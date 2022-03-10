import React from 'react'

function Loader() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <span className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary'></span>
          <p>Loading...</p>
        </div>
      </div>
    </div>
  )
}

export default Loader;