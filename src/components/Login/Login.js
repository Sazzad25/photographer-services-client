import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
// import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {

  const {login, loading, setLoading} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  useTitle('Login')

  // if(loading){
  //   return <progress className="progress w-56"></progress>

  // }
  // else{
  //   setLoading();
  // }

  const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
          const user = result.user;
          form.reset();
         
          toast.success('Login Success!');
          
          const currentUser = {
            email: user.email
        }

          // get jwt token
     fetch('https://photo-server-jet.vercel.app/jwt',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('photoToken', data.token);
      navigate(from, { replace: true });
    });
         
          
        })
        .catch(error => toast.error(error.message))
        // setLoading(true);
    }
    
    return (
        <div className="hero w-full my-20">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
    
  
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
    <h1 className="text-5xl text-center font-bold">Login</h1>
      <form onSubmit={handleLogin} className="card-body">  
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className='btn btn-primary' type="submit" value="Login" />
        </div>
      </form>
      <p className='text-center'>New to Glossy Photo Gallery <Link className='text-orange-600 font-bold' to='/register'>Register</Link></p>
      {/* <GoogleLogin></GoogleLogin> */}
    </div>
  </div>
        </div>
    );
};

export default Login;