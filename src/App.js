
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard.js';
import Signup from './components/Authentication/Signup.js';
import {AuthProvider} from './Context/AuthContext';




function App() {
  return (

<>
   <Router>
   <AuthProvider>
     <Switch>
       <Route  exact path="/" component={Dashboard}/>
       <Route path="/signup" component={Signup}/>
     </Switch>
   </AuthProvider>
   </Router>
   </>
  );
}

export default App;
