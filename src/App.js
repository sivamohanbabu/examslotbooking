import React  from 'react'
import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 // Link
} from "react-router-dom";
import Home from './components/home/Home';




function App() {
  return (
    <div className="App">
   <Router>
     <Switch> 
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
       
        </Switch>

    </Router>
{/*<Login/>*/}
{/*Register/>*/}
  
    </div>
  );
}

export default App;

