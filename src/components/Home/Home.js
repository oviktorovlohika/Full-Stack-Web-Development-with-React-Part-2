import React from 'react';
import RenderCard from '../RenderCard';

function Home(props) {
  return (
   <div className='container'>
      <div className='row'>
         {Object.keys(props).map((item) => (
            <div className='col-12 col-md-3 m-1' key={item}>
                <RenderCard item={props[item]} />
            </div>
         ))}
      </div>
   </div>
  )
}

export default Home;