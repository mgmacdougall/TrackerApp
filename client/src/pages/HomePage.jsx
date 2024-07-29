import NavBar from '../components/Navbar';


import { v4 as uuidv4 } from 'uuid';
function HomePage({tickets}) {
  console.log(tickets)
  return (
    <>
    <NavBar/>
      <h1 className='text-centered'>Current bug list</h1>  
      {tickets.map(ticket=>{
    return(
      <div key={uuidv4()}>
        <h3><strong>Title:</strong> {ticket.title}</h3>
      </div>
    )})
    }
    </>)
}

export default HomePage;
