import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Loader from '../Loader';


function RenderCard({ item }) {  
   const dispatch = useDispatch();
   const loading = useSelector(state => state.app.isLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  },[dispatch]);
   
  if(loading) {
    return <Loader />
   }

   return (
      <Card>
         <CardImg width="100%" src={item.image} alt={item.name} />
         <CardBody>
            <CardTitle>{item.name}</CardTitle>
               {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
         </CardBody>
      </Card>
   )
}

export default RenderCard;