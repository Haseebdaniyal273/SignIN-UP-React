// import logo from './logo.svg';
import './App.css';
import Register from "./components/Register"
import Log from "./components/Log"
import Dashboard from "./components/Dashboard"
import Navbar from './Navbar';
import { Routes , Route } from "react-router-dom"
import Login from './components/Login';
 

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Navbar/>
  
   
<Routes>
<Route path="/" element={<Log/>}/>
<Route path="/Dashboard" element={<Dashboard/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/Register" element={<Register/>}/>
</Routes>

    </div>

);
}

export default App;
