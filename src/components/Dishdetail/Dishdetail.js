import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import  CommentForm  from '../CommentForm';

const Dishdetail = ({ dish, isLoading, isErrMess }) => {
   
   const renderDish = ({ image, name, description }) => (
      <Card>
         <CardImg width="100%" src={image} alt={name} />
         <CardBody>
            <CardTitle><strong>{name}</strong></CardTitle>
            <CardText>{description}</CardText>
         </CardBody>
      </Card>
   )

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