import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import LoginForm from "./login";
import RegisterForm from "./register";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginForm/>}/>

          <Route exact path="/register" element={<RegisterForm/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
