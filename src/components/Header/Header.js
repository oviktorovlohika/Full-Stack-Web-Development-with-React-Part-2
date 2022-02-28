import React from 'react';
import Navigation  from './Navigation'

const Header = () => {

  return (
   <>
     <Navigation />
      <div  className='jumbotron'>
         <div className='container'>
            <div className='row row-header'>
               <div className='col-12 col-sm-6'>
                  <h1>Ristorane Con Fusion</h1>
                  <p>We take inspiration from the Worlds best cuisines, and create a unique fusion experience. Our lipsmacking creations will ticket your culinary</p>
               </div>
            </div>
         </div>
      </div>
   </> 
  )
}

export default Header;