import React,{useState} from 'react'
import { Link, useHistory } from "react-router-dom"
import "./login.css"
import {auth} from "./firebase"

const Login = () => {
    const history = useHistory()
    const[email,setEmail] =useState("")
    const[password,setPassword] = useState("")

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/");
            //logged in
        })
        .catch((e)=>alert(e.message))
    }

    const register = ( e)=>{
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email,password)
      .then((auth)=>{
        //logged in
    })
    .catch((e)=>alert(e.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="" />
            </Link>
            <div className="login_container">
                <h1> Sign in </h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="login_signinButton" type="submit" onClick={login}> Sign in</button>
                </form>
                <button className="login_registerButton" onClick={register}> Create Amazon Account</button>
            </div>


        </div>

    )

}

    export default Login