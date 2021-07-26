import React, { useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.js';
import Signup from './components/Authentication/Signup.js';
import Login from './components/Authentication/Login.js';
import ForgotPassword from './components/Authentication/ForgotPassword.js';
import {AuthProvider} from './Context/AuthContext';
import {TransProvider} from './Context/TransContext';
import PrivateRoute from "./components/Authentication/PrivateRoute";
import './App.css';



function App() {
  return (


   <Router>
   <AuthProvider>
   <TransProvider>
     <Switch>
       <Route  exact path="/" component={Dashboard}/>
       <Route path="/signup" component={Signup}/>
       <Route path="/login" component={Login}/>
       <Route path="/reset" component={ForgotPassword}/>
     </Switch>
       </TransProvider>
   </AuthProvider>
   </Router>
  );
}

export default App;
