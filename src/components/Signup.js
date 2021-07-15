import React ,{useRef} from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";
import {useAuth } from '../Context/AuthContext';


const Signup = () => {

    const emailRef  = useRef();
    const PasswordRef  = useRef();
     
    const {signup} = useAuth();

  console.log(emailRef.current.value);

    async function  handleSubmit(e) {
        
        e.preventDefault();

        try{

            await signup(emailRef.current.value,PasswordRef.current.value)
        }
        catch{


        }
    }
    return (
        <div>
        <Card.Body>
            THe signup form
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 w-50" Id="Email">
               <Form.Label>Email Address</Form.Label>
               <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              
              <Form.Group className='mb-3 w-50' Id = "Password">
                <Form.Label>Password</Form.Label>
               <Form.Control type="password" ref={emailRef} required />
              </Form.Group>
            </Form>
             <Button className="w-50"type="submit">
                Sign Up{" "}
              </Button>{" "}

           </Card.Body>
        </div>
    )
}

export default Signup
