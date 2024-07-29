import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LogInForm from './pages/LoginPage'
import HomePage from './pages/HomePage';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const[userName, setUserName] = useState("");
  const[userPassword, setUserPassword] = useState("");
  const[allTickets, setAllTickets] = useState([]);

  const handleEmailInput=(e)=>{ setUserName(e.target.value); console.log(userName)};
  const handlePasswordInput=(e)=> setUserPassword(e.target.value);
  const  handleLogInClick=(e)=>{
    e.preventDefault();
    setIsLoggedIn(!isLoggedIn)
  }


  useEffect(() => {
    axios.get('http://localhost:4044/ticket/all').then(response=> setAllTickets(response.data)).catch(e=> console.log(e))
  }, [])
  
  return (
    <>
    {
      !isLoggedIn && <LogInForm emailHandler={handleEmailInput} passwordHandler={handlePasswordInput} handleSubmit={handleLogInClick} uName={userName} uPass={userPassword}/>
    }
    {
      isLoggedIn&&<HomePage tickets={allTickets}/>
    }
    </>
  )
}

export default App
