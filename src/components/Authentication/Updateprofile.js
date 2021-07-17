import React ,{useRef,useState} from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth}  from '../../Context/AuthContext';
import {Link} from 'react-router-dom'

const Login = () => {
    const [Error, SetError] = useState('')
    const emailRef  = useRef();
    const PasswordRef  = useRef();
    const ConfirmPasswordRef  = useRef();

    
    const { updatepassword } = useAuth();
    const { updateemail } = useAuth();

 
    async function  handleSubmit(e) {
        
       
        e.preventDefault();
        
        try{
            
            await login(emailRef.current.value,PasswordRef.current.value)
        }
        catch(err){
          
            SetError("I'm Afraid! " +err.message);
            
        }
    }
    return (
        <div>
        <Card.Body>
            <h2 className="text-center mb-4 m-auto">Update Credentials</h2>
             {Error && <Alert variant="danger" className="h-2 w-50">{Error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 w-50 ">
               <Form.Label>Email Address</Form.Label>
               <Form.Control type="email" ref={emailRef} placeholder="leave blank to keep same" required />
              </Form.Group>
            
              
              <Form.Group className='mb-3 w-50' Id = "Password">
                <Form.Label>Password</Form.Label>
               <Form.Control type="password" ref={PasswordRef} placeholder="leave blank to keep same" required />
              </Form.Group>
              <Form.Group className='mb-3 w-50' Id = "Password">
                <Form.Label>ConfirmPassword</Form.Label>
               <Form.Control type="password" ref={ConfirmPasswordRef} placeholder="leave blank to keep same" required />
              </Form.Group>
             
               <Button  className="w-50"type="submit">
                Update Credentials
              </Button>
               <Card.Body>
              <div className="w-100 text-center mt-2">
               <Link to="/">Cancel </Link>
               </div>{" "}
              </Card.Body>{" "}
              </Form>
           </Card.Body>
        </div>
    )
}

export default Login
