import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({children}) => {
  return (
    <div className=' navbar-background'>
    <div className="drawer drawer-end">
<input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
<div className="drawer-content flex flex-col ">

  <div className="w-full navbar px-10 py-10">
 
    <div className="flex-none lg:hidden">
      <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path></svg>
      </label>
    </div> 
   
    <div className="flex-none hidden lg:block mx-auto mt-[-1.8rem] text-black menu-item">
      <ul className="menu menu-horizontal">
        
        <li><Link className='menu' to="/">Home</Link></li>
        <li><Link className='menu' to="/services">Services</Link></li>
        <li><Link className='menu' to="/projects">Projects</Link></li>
        <li><Link className='menu' to="/about">About Us</Link></li>
        <li><Link className='menu' to="/blogs">Blogs</Link></li>
        <li><Link className='menu' to="/portfolio">Portfolios</Link></li>
        <li><Link className='menu' to="/pages">Pages</Link></li>
        <li><Link className='menu' to="/contact">Contact</Link></li>
       
      </ul>
    </div>
  </div>
 
{children}

</div> 
<div className="drawer-side text-white">
  <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
  <ul className="menu p-4 overflow-y-auto w-80 bg-black">
        <li><Link className='menu' to="/">Home</Link></li>
        <li><Link className='menu' to="/services">Services</Link></li>
        <li><Link className='menu' to="/projects">Projects</Link></li>
        <li><Link className='menu' to="/about">About</Link></li>
        <li><Link className='menu' to="/contact">Contact</Link></li>
    
  </ul>
  
</div>
</div>

  </div>
)
  
}

export default Navbar