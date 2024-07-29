import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LogInForm from './pages/LoginPage'
import {useState} from 'react';

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const[userName, setUserName] = useState("");
  const[userPassword, setUserPassword] = useState("");

  const handleEmailInput=(e)=>{ setUserName(e.target.value); console.log(userName)};
  const handlePasswordInput=(e)=> setUserPassword(e.target.value);
  const  handleLogInClick=(e)=>{
    e.preventDefault();
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <>
    {
      !isLoggedIn ? <LogInForm emailHandler={handleEmailInput} passwordHandler={handlePasswordInput} handleSubmit={handleLogInClick} uName={userName} uPass={userPassword}/>: <h2>Logged In </h2>
    }
    {
      <div>{userName}</div>
    }
    </>
  )
}

export default App
