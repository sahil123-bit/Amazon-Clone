import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link  } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';


const Header = () => {
 const[{basket,user}, dispatch] = useStateValue();

 const handleAuthentication =() =>{
     if(user){
         auth.signOut();
     }
     
 }

    return (
        <div className='header'>
            <Link to="/">
            <img className='header-logo'
            src='https://yoamarketing.com/wp-content/uploads/2020/11/amazon_squidink_noto_email_v2016_fr-main._CB463436975_.png'
             />
            </Link>
             <div className='header__search'>
                <input className='header__searchInput'
                type='text' />
                <SearchIcon  className='header__searchIcon'/>
             </div>

            <div className='header_nav'>
            <Link to={!user &&"/login"}>
                <div onClick={handleAuthentication} className='header__option'>
                 <span className='header__optionLineOne'>
                     Hello   {user ? user?.email : 'Guest'}
                   
                 </span>

                 <span className='header__optionLineTwo'>
                  {user ? 'Sign Out' : 'Sign In'}
                 </span> 
                 
                </div>
                </Link> 

                <div className='header__option'>
                 
                <span className='header__optionLineOne'>
                     Returns
                 </span>

                 <span className='header__optionLineTwo'>
                     & Orders
                 </span>

                </div>

                <div className='header__option'>
                 
                <span className='header__optionLineOne'>
                     Your
                 </span>

                 <span className='header__optionLineTwo'>
                     Prime
                 </span>

                </div>
            </div>

            <div className="header__optionBasket">
          <Link to="/checkout">  < ShoppingCartIcon  /> </Link>
            <span className="header__optionLineTwo header_basketCount">
                 {basket?.length}
            </span>
            </div>
        </div>

        
    )
}

export default Header
