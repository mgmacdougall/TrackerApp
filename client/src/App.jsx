import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LogInForm from './pages/LoginPage'
import HomePage from './pages/HomePage';
import TicketPage from './pages/TicketPage';
import BugAdminPage from './pages/BugAdminPage';
import { Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  // const[allTickets, setAllTickets] = useState([]);
  const[queryResults, setQueryResults]=useState([]);

  const[form, setForm]=useState({
    title:'',
    component:'',
    state:'',
    owner:'',
    steps:''
  });

  const[searchForm, setSearchForm]=useState({
    title:'',
    component:'',
    state:'',
    owner:''
  })

  const[loginForm, setLoginForm]= useState({
    uName:'Mike',
    uPass:''
  })

  const handleLogInClick=(e)=>{
    e.preventDefault();
  }

  const handleLoginFormChange=e=>{
    setLoginForm({
      ...loginForm,
      [e.target.name]:e.target.value
    })
  }

  const handleTicketSubmit=(e)=>{
    e.preventDefault();
    console.log(form)
    axios.post("http://localhost:4044/ticket",{form}).then(response=> console.log("success",response)).catch(e=> console.log('failed',e))
  }

  const handleFormChange= e=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSearchFormChange=e=>{
    console.log(e.target.value,e.target.name)
    setSearchForm({
      ...searchForm,
      [e.target.name]:e.target.value
    })
  }

  const handleTicketSearch=e=>{
    e.preventDefault();
    let _queryObject = {...searchForm}

  let objLength=Object.keys(_queryObject).length;
  let queryString = {};
  for(let i=0; i<=objLength-1; i++){    
      if(Object.values(_queryObject)[i]!==''){
        console.log(Object.keys(_queryObject)[i],Object.values(_queryObject)[i])
        let _curKey= Object.keys(_queryObject)[i];
        let _currValue= Object.values(_queryObject)[i];
        queryString[_curKey]=_currValue
      }
  }

    const params = new URLSearchParams(new URLSearchParams(queryString).toString().replace(/(?:\&|^)[^\&]*?\=(?=\&|$)/g, ''));
    console.log(params.toString())
    let query=`http://localhost:4044/ticket/query/${params.toString()}`;
    console.log(query)
    axios.get(`http://localhost:4044/ticket/query?${params.toString()}`).then(response=> setQueryResults(response.data)).catch(e=> console.log(e));
  }

  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage display={isLoggedIn}/>}/> 
        <Route path="/tickets" element={<TicketPage handlers={[handleTicketSubmit, handleFormChange] } vals={[form]} />}/> 
        <Route path="/admin" element={<BugAdminPage formData={searchForm} handlers={[handleTicketSearch,handleSearchFormChange]} results={queryResults}/>} />
        <Route path="/login" element={<LogInForm handleForm={handleLoginFormChange} handleSubmit={handleLogInClick} data={loginForm}/>}/> 
      </Routes>
    </>
  )
}

export default App
