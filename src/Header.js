import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"

function Header() {
    const [{basket,user}] = useStateValue();

    const login =() =>{
        if(user){
            auth.signOut()

        }
       

    }
    return (
        <nav className="Header">
            <Link to="/">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"  className="Header_logo"alt="header"/>

            </Link>
            <div className="headersearch">
            <input type="text" placeholder="search" className="searchinput"/>
          <SearchIcon className="searchicon"/>
          </div>

            <div className="header_nav">
                <Link  to={!user && "/login"}className="header_link">
                    <div onClick={login}className="header_options">
                    <span className="header_optionone">Hello {user?.email} </span>
    <span className="header_optiontwo">{user?'Sign out':'Sign In'}</span>
                    </div>
                    
                </Link>

                <Link  to="/"className="header_link">
                    <div className="header_options">
                    <span className="header_optionone">Returns</span>
                    <span className="header_optiontwo">Orders</span>
                    </div>
                    
                </Link>


                <Link to="/" className="header_link">
                    <div className="header_options">
                    <span className="header_optionone">Your</span>
                    <span className="header_optiontwo">Prime</span>
                    </div>
                    
                </Link>
                <Link to="/checkout" className="header_link">
                    <div className= "header_optionsbasket">
                    <ShoppingBasketIcon/>
                <span>{basket?.length}</span>
                    </div>
                </Link>

          

            </div>
          
          
        
        </nav>
    )
}

export default Header