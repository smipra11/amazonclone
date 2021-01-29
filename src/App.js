import React ,{useEffect }from 'react';
import Button from '@material-ui/core/Button'
import SaveIcon from "@material-ui/icons/Save"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import './App.css';
import Header from  "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import { useStateValue } from './StateProvider'
import{auth} from "./firebase"




function App() {
  const [{ user },dispatch] = useStateValue();
  
  useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged((authuser)=>{
      if(authuser){
        dispatch({
          type:"SET_USER",
          user:authuser
        })

      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })

    return ()=>{
      unsubscribe();
    }

    

  },[])

  console.log(user)
  
  
  return (
    <Router>
      <div>
      
      <Switch>
        <Route path="/checkout">
          <Header/>
        <Checkout/>
        </Route>
        <Route path="/login">
         <Login/>
        </Route>
        <Route path="/">
         <Header/>
         <Home/>
        </Route>
      </Switch>
      </div>

    </Router>
   
  );
}

export default App;