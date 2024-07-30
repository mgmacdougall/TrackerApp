import NavBar from '../components/Navbar';

function HomePage({display}) {
  console.log(display)
  return (
    <>
    <NavBar/>
      <h1 className='text-centered'>Welcome to the Bug Tracker application</h1>  

    </>)
}

export default HomePage;
