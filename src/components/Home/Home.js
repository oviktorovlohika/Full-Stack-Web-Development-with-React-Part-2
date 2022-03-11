import React from 'react';
import RenderCard from '../RenderCard';

function Home(props) {
  
  return (
   <div className='container'>
      <div className='row'>
         {props.leader.map((item) => (
            <div className='col-12 col-md-3 m-1' key={item.id}>
                <RenderCard item={item} />
            </div>
         ))}
      </div>
   </div>
  )
}

export default Home;