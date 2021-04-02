import react, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Login from './Login'
import { auth } from "./firebase";
import {useStateValue} from './StateProvider'




function App() {
const [{},dispatch] = useStateValue();


useEffect(() => {
 // Will only run once when the app component loads..
 auth.onAuthStateChanged(authUser =>{
   console.log('The user is: ',authUser);

   if(authUser) {
     // the user just loged in/ the user was loged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
   }else{
     // the user is logged out
     dispatch({
       type: 'SET_USER',
       user: null,
     })
   }
 })
}, [])
  
  return (
    // BEM
    <Router>
    <div className="app">
   
      <Switch>

      <Route exact path="/" >
      <Header />
      <Home />
      </Route>

      <Route path="/checkout" >
      <Header />
      <Checkout />
      </Route>

      <Route path="/login">
      <Login />
      </Route>

      

      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
