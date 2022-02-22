import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

const Dishdetail = ({ selectedDish }) => {

   const renderDish = ({ image, name, description }) => (
      <Card>
         <CardImg width="100%" src={image} alt={name} />
         <CardBody>
            <CardTitle><strong>{name}</strong></CardTitle>
            <CardText>{description}</CardText>
         </CardBody>
      </Card>
   )
    
   const renderComments = ({ id, comments }) => (
      <>
         <h4>Comments</h4>
         <ul className='list-unstyled'>
            <li key={id}>
               <p>{comments.comment}</p>
               <p> -- {comments.author}, {comments.date}</p>
            </li>
         </ul>
      </>
   )
    
  return (
     <div className='container'>
      {selectedDish ? 
      <div className='row'>
         <div className='col-md-5 m-1'>
            { renderDish(selectedDish) }
         </div> 
         <div className='col-md-5 m-1'>
            { renderComments(selectedDish) }
         </div>
      </div> : null}
     </div>
  )
}

export default Dishdetail;