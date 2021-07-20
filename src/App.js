
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.js';
import Signup from './components/Authentication/Signup.js';
import Login from './components/Authentication/Login.js';
import ForgotPassword from './components/Authentication/ForgotPassword.js';
import {AuthProvider} from './Context/AuthContext';
import PrivateRoute from "./components/Authentication/PrivateRoute";
import './App.css';


function App() {
  return (

<div>
   <Router>
   <AuthProvider>
     <Switch>
       <Route  exact path="/" component={Dashboard}/>
       <Route path="/signup" component={Signup}/>
       <Route path="/login" component={Login}/>
       <Route path="/reset" component={ForgotPassword}/>
     </Switch>
   </AuthProvider>
   </Router>
   </div>
  );
}

export default App;
