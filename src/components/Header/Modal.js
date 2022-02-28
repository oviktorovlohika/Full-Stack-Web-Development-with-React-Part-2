import React, { useState } from 'react'
import {
   Input, 
   Form, 
   Label, 
   FormGroup, 
   Nav, 
   NavItem, 
   Button, 
   ModalHeader, 
   Modal as StrapModal, 
   ModalBody, 
   ModalFooter 
} from 'reactstrap';

const Modal = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [remember, setRemember] = useState(false);

const toggle = () => {
   setIsModalOpen(!isModalOpen);
}

const handleLogin = (event) => {
   toggle();
   alert(`Username: ${username} Password: ${password} Remember: ${remember}`);
   event.preventDefault();
}

  return (
      <Nav className='ml-auto' navbar>
         <NavItem>
            <Button outline onClick={toggle}><span className='fa fa-sign-in fa-lg'></span>Login</Button>
         </NavItem>
       <StrapModal isOpen={isModalOpen} toggle={toggle} >
         <ModalHeader toggle={toggle}> Login </ModalHeader>
         <ModalBody>
         <Form >
         <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" name="username" 
            onChange={e => setUsername(e.target.value)} />
         </FormGroup>
         <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" 
               onChange={e => setPassword(e.target.value)} />
         </FormGroup>
         <FormGroup check>
            <Label check><Input type="checkbox" name="remember" 
               onChange={e => setRemember(e.target.checked)}/>
               Remember me
            </Label>
         </FormGroup>
         <Button type="submit" 
            value="submit" 
            color="primary" 
            onClick={handleLogin}>
            Login
         </Button>
         </Form>
         </ModalBody>
         <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
         </ModalFooter>
         </StrapModal> 
      </Nav>
  )
}

export default Modal;
