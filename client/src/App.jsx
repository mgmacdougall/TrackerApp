import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LogInForm from './pages/LoginPage'
import HomePage from './pages/HomePage';
import TicketPage from './pages/TicketPage';
import AdminPage from './pages/AdminPage';
import { Routes, Route, Navigate  } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const[userName, setUserName] = useState("");
  const[userPassword, setUserPassword] = useState("");
  const[allTickets, setAllTickets] = useState([]);

// const navigate = useNavigate();

  const handleEmailInput=(e)=>{ setUserName(e.target.value); console.log(userName)};
  const handlePasswordInput=(e)=> setUserPassword(e.target.value);
  const handleLogInClick=(e)=>{
    e.preventDefault();
    setIsLoggedIn(true);
    console.log('here')
  }

  useEffect(() => {
    axios.get('http://localhost:4044/ticket/all').then(response=> setAllTickets(response.data)).catch(e=> console.log(e))
  }, [])
  
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage tickets={allTickets} display={isLoggedIn}/>}/> 
        <Route path="/tickets" element={<TicketPage/>}/> 
        <Route path="/admin" element={<AdminPage/>}/> 
        <Route path="/login" element={<LogInForm emailHandler={handleEmailInput} passwordHandler={handlePasswordInput} handleSubmit={handleLogInClick} uName={userName} uPass={userPassword}/>}/> 
      </Routes>
    </>
  )
}

export default App
