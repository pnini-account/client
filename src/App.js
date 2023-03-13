import Login from  "./pages/login/Login";

import {BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home/Home";
function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/">home  </NavLink>
        <NavLink to="/login">login  </NavLink>
      </nav>
      <Routes>       
        <Route path = "/" element ={<Home/>}></Route>
        <Route path = "/login" element={<Login/>}></Route>
      </Routes>
    </Router>
   

  );
}
export default App;
