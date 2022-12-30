import React, { useContext, useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() { return useContext(AuthContext) }

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const navigate = useNavigate();


  useEffect(() => {
    
    auth.onAuthStateChanged(user => {
      
      if(user != null){
        //console.log("user 1", user)
        setUser(user)
        navigate('/chats')
      }

      setLoading(false)
      
    })
  }, [user, navigate])

  const value = { user }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
