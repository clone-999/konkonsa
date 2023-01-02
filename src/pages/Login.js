import React, {useState, useEffect} from "react"
import { 
  GoogleSquareFilled, 
  FacebookFilled, 
  TwitterSquareFilled, 
  LinkedinFilled, 
  GoogleOutlined, 
  FacebookOutlined 
} from '@ant-design/icons'
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";
import '../style.css';

const Login = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {

    if (user != null) {
      navigate('/selection')
      return
    }
    
}, [user, navigate])

  return (
    <div className="container sign-up-mode">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign in</h2>
            <br />
            <div
              className='login-button google'
              onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
              <GoogleOutlined /> Sign In with Google
            </div>
            <br />
            <div
              className='login-button facebook'
              onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
            >
              <FacebookOutlined /> Sign In with Facebook
            </div>
            <br />
            
            <p className="social-text">Or Sign in with social platforms</p>
            <br />
            <div className="social-media">
              <a href="#" className="social-icon">
                <FacebookFilled />
              </a>
              <a href="#" className="social-icon">
                <TwitterSquareFilled />
              </a>
              <a href="#" className="social-icon">
                <GoogleSquareFilled />
              </a>
              <a href="#" className="social-icon">
                <LinkedinFilled />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            
          </div>
          
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One Platform To Connect!</h3>
            <p style={{fontSize: 20}}>
              Make meaningful connections with meetings, team chat, whiteboard, phone, and more in one offering.
            </p>
            
            <button className="btn transparent" 
              id="sign-in-btn"
              onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login