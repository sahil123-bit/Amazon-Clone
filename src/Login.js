import React,{ useState} from 'react';
import './Login.css';
import { Link ,useHistory} from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
 const history = useHistory(); // allows to programatically change the URL
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) =>{
    e.preventDefault();

    // Same Fancy firebase Login...
    auth
    .signInWithEmailAndPassword(email,password)
    .then( (auth) =>{
        history.push('/')
    })
    .catch(error =>alert(error.message))
  }

  const register = (e) => {
    e.preventDefault();

    // do some fancy firebase Register...
      auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth) =>{
          // Successfully created a new user
          console.log(auth);
          if(auth){
              history.push('/')
          }
      })
      .catch(error=> alert(error.message))
  }

    return (
        <div className='login'>
            <Link to='/'>
            <img className='login__logo'
            src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-Mail</h5>
                    <input type='text' value={email} 
                    onChange={e=>setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password}
                     onChange={e=>setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}
                    className='login__SignInButton'>
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Clone Condition
                    of Use & Sale. Please use our Privacy Notice, our
                    Cookies Notice and our Interest based Ads
                </p>
                    <button onClick={register}
                    className='login__registerButton'>
                        Create you Amazon Account
                        </button>
            </div>
        </div>
    )
}

export default Login
