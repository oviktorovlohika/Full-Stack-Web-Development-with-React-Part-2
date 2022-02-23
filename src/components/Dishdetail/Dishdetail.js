import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Dishdetail = ({ dish, comments }) => {

   const renderDish = ({ image, name, description }) => (
      <Card>
         <CardImg width="100%" src={image} alt={name} />
         <CardBody>
            <CardTitle><strong>{name}</strong></CardTitle>
            <CardText>{description}</CardText>
         </CardBody>
      </Card>
   )
    
   const renderComments = ({ id, comment, author, date }) => (
      <>
         <h4>Comments</h4>
         <ul className='list-unstyled'>
            <li key={id}>
               <p>{comment}</p>
               <p> -- {author}, {date}</p>
            </li>
         </ul>
      </>
   )
    
  return (
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
            { renderComments(comments) }
         </div>
      </div> 
     </div>
  )
}

export default Dishdetail;