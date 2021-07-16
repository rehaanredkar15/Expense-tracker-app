import React ,{useRef,useState} from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth}  from '../../Context/AuthContext';


const Login = () => {
    const [Error, SetError] = useState('')
    const emailRef  = useRef();
    const PasswordRef  = useRef();
    
     
    const { login } = useAuth();

 
    async function  handleSubmit(e) {
        
       
        e.preventDefault();
        
        if(PasswordRef.current.value !== ConfirmPasswordRef.current.value){
            SetError('Passwords Doesnt Match')
        }
        try{
            
            await signup(emailRef.current.value,PasswordRef.current.value)
        }
        catch{
          
            SetError('Oops!!! Failed to create an account')
            
        }
    }
    return (
        <div>
        <Card.Body>
            <h2 className="text-center mb-4 m-auto">Signup</h2>
            {Error && <Alert>{Error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 w-50 ">
               <Form.Label>Email Address</Form.Label>
               <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
            
              
              <Form.Group className='mb-3 w-50' Id = "Password">
                <Form.Label>Password</Form.Label>
               <Form.Control type="password" ref={PasswordRef} required />
              </Form.Group>
             
           
             <Button className="w-50"type="submit">
                Login
              </Button>
               <Card.Body>
              <div className="w-100 text-center mt-2">
               Is it Your First time Here ? <Link to="/signup">Signup</Link>
               </div>{" "}
              </Card.Body>{" "}
              </Form>
           </Card.Body>
        </div>
    )
}

export default Login
