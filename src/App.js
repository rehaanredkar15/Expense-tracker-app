
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home.js';
import Signup from './components/Signup.js';
import {AuthProvider} from './Context/AuthContext';




function App() {
  return (

<>
   <Router>
   <AuthProvider>
     <Switch>
       <Route path="/home" component={Home}/>
       <Route path="/" component={Signup}/>
     </Switch>
   </AuthProvider>
   </Router>
   </>
  );
}

export default App;
