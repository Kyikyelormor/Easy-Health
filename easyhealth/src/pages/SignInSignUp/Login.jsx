import React,{useState} from "react";
import './SignInSignUp.css'
import { AppLogo} from '../../App/components/Logo'
import Signup from '../../App/assets/images/Signup.svg'
import Button from '../../App/components/Button'
// import { SignUp } from './SignInSignUp'


export const LogIn = () => {

// const [visible, setvisible] = useState(false);

// const handleshow  = () => {
//   setvisible(!visible);
// };


//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (e) => {
//       setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//       setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       // Handle form submission (login/register logic)
//   };

  return (
    <div className='pageholder'>

    <div className='imgpage'>
    <img src={Signup} alt='' className='signupimg' />
    </div>

   
      <div className='formpage'>

      <div className="logoheader">
          <AppLogo />
      </div>

      <h1 className="h1">WELCOME BACK!</h1>  
    <div>
      <p className='p'>Don't have an account ? 
          <a className='login' href="src\pages\SignInSignUp\SignInSignUp.jsx">Sign Up</a>
      </p>
     </div>
  
   <div className='form-box'>
   <form className='form' >

     <label className='label'>Email</label>
     <div className='input-field'>
     <input className='input' type='Email'
     placeholder='input43@gmail.com'/>
     </div>
     
     <label className='label'>Password</label>
     <div className='input-field password' >
     <input className='input' type='{visible? "text":"password"}'
     placeholder='Password'/>
    {/*   onClick={handleshow} */}
    {/* {(visible=== false)?   
      <Hide className='show-hide' onClick={handleshow}/>:<Show className='show-hide' onClick={handleshow}/>} */}
     </div>

     <div >
      <a className='forget' href='#'>Forget Password?</a>
     </div>

    <br/>

     {/* <button className='submit' type='submit'>
     <span className='text'>Get Started</span> 
      </button> */}
      <Button type="submit"  text="Login" />
     </form>

     </div>
     
     {/* <div>
      <Socialmedia />
     </div>
   */}
     </div>

    



     

      </div>
   )  
};