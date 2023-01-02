import React, { useRef, useState, useEffect } from "react"

import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine'
import { useAuth } from "../contexts/AuthContext"
import { auth } from "../firebase"
import '../index.css';

export default function Chats() {
  const didMountRef = useRef(false)
  const [ loading, setLoading ] = useState(true)
  const { user } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await auth.signOut()
    navigate("/")
  }

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: 'image/jpeg' });
  }

  function goToSelection() {
    navigate("/selection")
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true

      if (!user || user === null) {
        navigate("/")
        return
      }
      
      // Get-or-Create should be in a Firebase Function
      axios.get(
        'https://api.chatengine.io/users/me/',
        { headers: { 
          "project-id": 'bdf18233-0cb6-4bbf-bd19-93c0be838391',
          "user-name": user.email,
          "user-secret": user.uid
        }}
      )

      .then(() => setLoading(false))

      .catch(e => {
        let formdata = new FormData()
        formdata.append('email', user.email)
        formdata.append('username', user.email)
        formdata.append('secret', user.uid)

        getFile(user.photoURL)
        .then(avatar => {
          formdata.append('avatar', avatar, avatar.name)

          axios.post(
            'https://api.chatengine.io/users/',
            formdata,
            { headers: { "private-key": 'e7425755-65f8-42e3-8492-ad9c0e2bde66' }}
          )
          .then(() => setLoading(false))
          .catch(e => console.log('e', e.response))
        })
      })
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    }
  }, [user, navigate])
  

  if (!user || loading) return <div />

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab' onClick={goToSelection}>
          KONKONSA
        </div>

        <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div>
      </div>

      <ChatEngine 
        height='calc(100vh - 66px)'
        projectID='bdf18233-0cb6-4bbf-bd19-93c0be838391'
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  )
}
