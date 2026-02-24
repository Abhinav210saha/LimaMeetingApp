import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { use } from 'react'
import { useParams } from 'react-router-dom';
import dotenv from 'dotenv'
dotenv.config()

function VideoRoom() {
      let { roomId } = useParams();

  const myMeeting = async (element) => {
    const appId = process.env.APPID;
    const serverSecret = process.env.SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Abhinav",
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy link",
          url:`http://localhost:5173/room/${roomId}`,
           
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };
  return (
    <div>
        <div ref={myMeeting} style={{ width: "100vw", height: "100vh" }}></div>
    </div>
  )
}

export default VideoRoom