// import React from 'react'
// import { Link } from 'react-router-dom'

// const Nav = () => {
//   return (
//     <div className='fixed top-0   w-full'  >
//         <ul className='flex justify-around cursor-pointer  p-5  bg-slate-400 '>
//             <li>NewsMonkey</li>
//             <li>
//               <Link to="/">Home
//               </Link></li>
//             <li>
//               <Link to="/Business">
//               Business
//               </Link>
//               </li>
//             <li>
//             <Link to="/Entertainment">
//             Entertainment
//             </Link>
//             </li>
//             <li>
//               <Link to="/General">General
//               </Link></li>
//               <li>
//               <Link to="/Health">Health
//               </Link></li>
//               <li>
//               <Link to="/Science">Science
//               </Link></li>
//               <li>
//               <Link to="/Sports
//                ">Sports

//               </Link></li>
//               <li>
//               <Link to="/Technology">Technology
//               </Link></li>
//               <li></li>


            
//         </ul>


//     </div>
//   )
// }

// export default Nav


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed top-0 w-full bg-slate-400'>
      <div className='flex justify-between items-center p-5'>
        <div className='m-auto font-bold text-black-500 '>React news app</div>
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        </div>
      </div>
      <ul className={`md:flex justify-around cursor-pointer p-5 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <li className='py-1 md:py-0 '><Link to="/">Home</Link></li>
        <li className='py-1 md:py-0 '><Link to="/Business">Business</Link></li>
        <li className='py-1 md:py-0'><Link to="/Entertainment">Entertainment</Link></li>
        <li className='py-1 md:py-0'><Link to="/General">General</Link></li>
        <li className='py-1 md:py-0'><Link to="/Health">Health</Link></li>
        <li className='py-1 md:py-0'><Link to="/Science">Science</Link></li>
        <li className='py-1 md:py-0'><Link to="/Sports">Sports</Link></li>
        <li className='py-1 md:py-0'><Link to="/Technology">Technology</Link></li>
      </ul>
    </div>
  );
};

export default Nav;
