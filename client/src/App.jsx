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

  const[issueTitle, setIssueTitle]=useState("");
  const[issueDescription, setIssueDescription]=useState("");
  const[component, setComponent]= useState("");
  const[issueState, setIssueState]= useState("");
  const[issueAssignee, setIssueAssignee]= useState("");
  const[issueSteps, setIssueSteps]=useState("");

  const handleEmailInput=(e)=>{ setUserName(e.target.value); console.log(userName)};
  const handlePasswordInput=(e)=> setUserPassword(e.target.value);

  const handleLogInClick=(e)=>{
    e.preventDefault();
    setIsLoggedIn(true);
    console.log('here')
  }

  const handleTicketSubmit=(e)=>{
    e.preventDefault();
    console.log('here', issueTitle, component);
    axios.post("http://localhost:4044/ticket",{title: issueTitle}).then(response=> console.log("success",response)).catch(e=> console.log('failed',e))
    
  }

  const handleIssueTitle=e=> setIssueTitle(e.target.value);
  const handleIssueDescription=e=> setIssueDescription(e.target.value);
  const handleComponentSelection=e=> {setComponent(e.target.value); console.log(e.target.value)};
  const handleIssueState=e=> {setIssueState(e.target.value); console.log(e.target.value)}
  const handleIssueSteps=e=> setIssueSteps(e.target.value);
  const handleIssueAssignee=e=> {setIssueAssignee(e.target.value); console.log(e.target.value)}

  useEffect(() => {
    axios.get('http://localhost:4044/ticket/all').then(response=> setAllTickets(response.data)).catch(e=> console.log(e))
  }, [])
  
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage tickets={allTickets} display={isLoggedIn}/>}/> 
        <Route path="/tickets" element={<TicketPage handlers={[handleTicketSubmit, handleIssueTitle,handleIssueDescription,handleComponentSelection,handleIssueState,handleIssueSteps,handleIssueAssignee] } vals={[issueTitle,issueDescription,component,issueState,issueAssignee,issueSteps]} />}/> 
        <Route path="/admin" element={<AdminPage/>}/> 
        <Route path="/login" element={<LogInForm emailHandler={handleEmailInput} passwordHandler={handlePasswordInput} handleSubmit={handleLogInClick} uName={userName} uPass={userPassword}/>}/> 
      </Routes>
    </>
  )
}

export default App
