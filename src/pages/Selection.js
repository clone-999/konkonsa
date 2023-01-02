import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
import '../style2.css';

function Selection() {
    const [roomCode, setRoomCode] = useState("");
    const [showError, setShowError] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    const submitCode = () => {
        if (roomCode) {
            navigate(`/room/${roomCode.replace(/\s/g, '')}`)
        } else {
            setShowError(true)
        }
    }

    const goToChat = () => {
        navigate('/chats')
    }

    useEffect(() => {

        if (!user || user === null) {
            navigate("/")
            return
        }
        
    }, [user, navigate])

    return (
        <div className="containerr">
            <div className="split left">
                <h1>Video Call</h1>
                <div className="input-field2">
                    <i className="fas fa-user"></i>
                    <input type="text" value={roomCode} placeholder="Enter room code" onChange={(e) => setRoomCode(e.target.value)} />
                </div>
                {showError && 
                    <strong className='shw'>Room code is required</strong> 
                }
                <a href="#" className="button" onClick={submitCode}>Create Meeting</a>
            </div>
            <div className="split right">
                <h1>Group Chat</h1>
                <a href="#" className="button" onClick={goToChat}>Start Chatting</a>
            </div>
        </div>
    )
}

export default Selection