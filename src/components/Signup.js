import React ,{useRef} from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth}  from '../Context/AuthContext';


const Signup = () => {

    const emailRef  = useRef();
    const PasswordRef  = useRef();
     
    const { signup } = useAuth();

 
    async function  handleSubmit(e) {
        
        console.log('reahed')
        e.preventDefault();
           console.log(emailRef.current.value);
        try{
            
            await signup(emailRef.current.value,PasswordRef.current.value)
        }
        catch{


        }
    }
    return (
        <div>
        <Card.Body>
            <h2 className="text-center mb-4">Signup</h2>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 w-50" Id="Email">
               <Form.Label>Email Address</Form.Label>
               <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              
              <Form.Group className='mb-3 w-50' Id = "Password">
                <Form.Label>Password</Form.Label>
               <Form.Control type="password" ref={PasswordRef} required />
              </Form.Group>
           
             <Button className="w-50"type="submit">
                Sign Up{" "}
              </Button>{" "}
              </Form>
           </Card.Body>
        </div>
    )
}

export default Signup
