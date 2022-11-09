import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const {user,  logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
         .then()
         .catch();
  }
    return (
        <div className="navbar bg-primary text-white">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Glossy Photo Gallery</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
    
      {
        user?.email ?
        <>
        <li className='font-semibold'>
        <Link to='/myreviews' className='btn-ghost'>My Reviews</Link>
        </li>
        <li className='font-semibold'>
        <Link to='/addserv' className='btn-ghost'>Add Service</Link>
        </li>
        <li className='font-semibold'>
        <button onClick={handleLogOut} className='btn-ghost'>Log Out</button>
        </li>
        </>
        :
        <li><Link to='/login'>Login</Link></li>
      }
      
    </ul>
  </div>
</div>
    );
};

export default Header;