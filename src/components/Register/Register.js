import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { setAuthToken } from '../../api/auth';
// import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Register')

    const from = location.state?.from?.pathname || '/';
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
   

    createUser(email, password)
    .then(result => {
      const user = result.user;
      toast.success('Register Success!');
    navigate(from, { replace: true });
      
    })
    .catch(error => toast.error(error.message))
  }

    return (
        <div className="hero w-full my-20">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
    
      {/* <img className='w-3/4' src={img} alt="" /> */}
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
      <form onSubmit={handleSignUp} className="card-body">  
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          
        </div>
        <div className="form-control mt-6">
            <input className='btn btn-primary' type="submit" value="Sign Up" />
        </div>
      </form>
      <p className='text-center'>All ready have an account <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
      <GoogleLogin></GoogleLogin>
    </div>
  </div>
        </div>
    );
};

export default Register;