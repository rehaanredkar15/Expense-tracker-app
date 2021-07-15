
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home.js';
import Signup from './components/Signup.js';
function App() {
  return (

   <Router>
     <Switch>
       <Route path="/home" component={Home}/>
       <Route path="/" component={Signup}/>
     </Switch>
   
   </Router>
  );
}

export default App;
