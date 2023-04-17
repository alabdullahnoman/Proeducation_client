import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img1 from '../../Image/sign logo/1.png'
import img2 from '../../Image/sign logo/2.png'
import { AuthContext } from '../../UserContext/UserContext';

const SignIn = () => {
    const {login,google,github}=useContext(AuthContext)
    const navigate =useNavigate()
    const location =useLocation()
    const from = location.state?.from?.pathname || "/";
    const handleSubmit=(event)=>{
        event.preventDefault()
        const form =event.target
        const email =form.email.value
        const password =form.password.value
        login(email,password)
        .then(result=>{
            const user =result.user
            console.log(user);
            form.reset()
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.error("error",error);
            form.reset()
        })
    }
    const handlegoogle=()=>{
        google()
        .then(result=>{
            const user =result.user
            console.log(user);
            navigate(from, { replace: true })
            
        })
        .catch(error=>{
            console.error("error",error);
        })

    }
    const handlegithub=()=>{
        github()
        .then(result=>{
            const user =result.user
            console.log(user);
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.error("error",error);
        })
    }
    return (
        <div className='formContainer'>
        <h4 className='formTitle text-center'>Sign In</h4>
        <h4 className='textError'> </h4>
        <form onSubmit={handleSubmit}>
         <div className='formControl'>
             <label htmlFor="email">Email</label>
             <input type="email" name="email" id="email" />
         </div>
         <div className='formControl'>
             <label htmlFor="password">Password</label>
             <input type="password" name="password" id="password" />
         </div>
         <button className='submit'>Sign In</button>
        </form>
        <p className='alter text-center'>New to Pro Edu <Link to='/signup'>Sign Up</Link> </p>
         <hr/>
         <button onClick={handlegoogle} className='buttonsign'>
             <img src={img1} alt="" />
             <p>Contiune with Google</p>
         </button>
         <button onClick={handlegithub} className='buttonsign'>
             <img src={img2} alt="" />
             <p>Contiune with Github</p>
         </button>
       
     </div>
    );
};

export default SignIn;