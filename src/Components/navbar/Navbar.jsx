import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <>

      <div className="body">
        <nav className='nav'>
          <a href="/"><h1>Jobbero</h1></a>
          <ul>
            <li>Home</li>
            <li>About Us</li>
          </ul>
         <div className="Nav-btn">
         <button className='Emp-login'>Employer Log in</button>
          <button className='Login'>Log in</button>
          <button className='Signup'>Sign Up</button>
         </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar