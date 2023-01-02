import React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from "./contexts/AuthContext"
import Chats from "./pages/Chats";

import Login from "./pages/Login";
import Room from "./pages/Room";
import Selection from "./pages/Selection";

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/chats" element={<Chats />} exact></Route>
            <Route path="/selection" element={<Selection />} exact></Route>
            <Route path="/room/:roomID" element={<Room />} exact></Route>
            <Route path="/" element={<Login />} exact></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
