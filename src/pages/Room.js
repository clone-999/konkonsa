import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const {roomID} = useParams();
    let myMeeting = async (element) => {
        const appID = 1673231861;
        const serverSecret = "b79ec003da70f88da69e2d5269c36b11";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Host");

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                  name: 'Personal link',
                  url:
                   window.location.protocol + '//' + 
                   window.location.host + window.location.pathname,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            }
        });
    }

    return (
        <div 
            ref={myMeeting} 
            style={{ width: '100vw', height: '100vh', backgroundColor: "black" }}></div>
    )
}

export default Room