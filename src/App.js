
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard.js';
import Signup from './components/Authentication/Signup.js';
import Login from './components/Authentication/Login.js';
import ForgotPassword from './components/Authentication/ForgotPassword.js';
import {AuthProvider} from './Context/AuthContext';
import PrivateRoute from "./components/Authentication/PrivateRoute";



function App() {
  return (

<>
   <Router>
   <AuthProvider>
     <Switch>
       <PrivateRoute  exact path="/" component={Dashboard}/>
       <Route path="/signup" component={Signup}/>
       <Route path="/login" component={Login}/>
       <Route path="/reset" component={ForgotPassword}/>
     </Switch>
   </AuthProvider>
   </Router>
   </>
  );
}

export default App;
