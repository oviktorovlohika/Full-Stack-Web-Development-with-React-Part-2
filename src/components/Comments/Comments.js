/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import {
   Label, 
   Nav, 
   NavItem, 
   Button, 
   ModalHeader, 
   Modal as StrapModal, 
   ModalBody, 
   Row,
   Col
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { required, maxLength, minLength } from '../../utils/validators';

const Comments = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

const toggle = () => {
   setIsModalOpen(!isModalOpen);
}

const handleSubmit = (value) => {
   alert(JSON.stringify(value));
}

  return (
      <Nav className='ml-auto' navbar>
         <NavItem>
            <Button outline onClick={toggle}><span className='fa fa-pencil fa-lg'></span> Submit Comment </Button>
         </NavItem>
       <StrapModal isOpen={isModalOpen} toggle={toggle} >
         <ModalHeader toggle={toggle}><h3>Submit Comment</h3> </ModalHeader>
         <ModalBody>
            <LocalForm onSubmit={(values) => handleSubmit(values)}>
               <Row className="form-group">
                  <Col md={{size: 2}}>
                     <div className="form-check">
                        <Label><strong>Rating</strong></Label>
                     </div>
                  </Col>
                  <Col md={{size: 3}}>
                     <Control.select model=".rating" name="rating"
                        className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                     </Control.select>
                  </Col>
               </Row>
               <Row className="form-group">
                  <Label htmlFor="autor" md={2}>Your Name</Label>
                  <Col md={10}>
                     <Control.text model=".autor" id="autor" name="autor"
                        placeholder="Your Name"
                        className="form-control"
                        validators={{
                           required, minLength: minLength(3), maxLength: maxLength(15)}}/>
                     <Errors
                        className="text-danger"
                        model=".autor"
                        show="touched"
                        messages={{
                           required: 'Required',
                           minLength: 'Must be greater than 2 characters',
                           maxLength: 'Must be 15 characters or less'
                        }}/>
                  </Col>
               </Row>
               <Row className="form-group">
                  <Label htmlFor="comment" md={2}>Comment</Label>
                  <Col md={10}>
                  <Control.textarea model=".comment" id="comment" name="comment"
                     rows="12"
                     className="form-control" />
                  </Col>
                </Row>        
                  <Row className="form-group">
                     <Col md={{size:10, offset: 2}}>
                        <Button type="submit" color="primary">Submit</Button>
                      </Col>
                  </Row>
                </LocalForm>
            </ModalBody>
         </StrapModal> 
      </Nav>
  )
}

export default Comments;
