import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

import  CommentForm  from '../CommentForm';
import Loader from '../Loader';
import { baseUrl } from '../../mocks/baseUrl';

const Dishdetail = ({ dish }) => {
   const dispatch = useDispatch()
   const loading = useSelector(state => state.app.isLoading)
 
   useEffect(() => {
     dispatch(fetchPosts());
   },[dispatch]);

   const renderDish = ({ image, name, description }) => (
      <FadeTransform
      in
      transformProps={{
         exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
      <Card>
         <CardImg width="100%" src={baseUrl + image} alt={name} />
         <CardBody>
            <CardTitle><strong>{name}</strong></CardTitle>
            <CardText>{description}</CardText>
         </CardBody>
      </Card>
      </FadeTransform>
   )

   if(loading) {
      return <Loader />
   }

  return (
   <>
     <div className='container'>
      <div className='row'>
         <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
         </Breadcrumb>
         <div className='col-12'>
            <h3>{dish.name}</h3>
            <hr />
         </div>
      </div>
      <div className='row'>
         <div className='col-md-5 m-1'>
            { renderDish(dish) }
         </div> 
         <div className='col-md-5 m-1'>
            <CommentForm dishId={dish.id} />
         </div>
      </div> 
     </div>
   </>
  )
}

export default Dishdetail;