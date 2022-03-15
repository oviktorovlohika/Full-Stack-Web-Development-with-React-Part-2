import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RenderCard from '../RenderCard';
import { fetchLeaders } from '../../redux/actions';

function HomePage(props) {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchLeaders());
   },[dispatch]);

 return (
   <div className='container'>
      <div className='row'>
         <div className='col-12 col-md-3 m-1'>
            <RenderCard item={props.dishes} />
         </div>
         <div className='col-12 col-md-3 m-1'>
            <RenderCard item={props.promotions} />
         </div>
         <div className='col-12 col-md-3 m-1'>
            <RenderCard item={props.leaders} />
         </div>
      </div>
   </div>
  )

}

export default HomePage;