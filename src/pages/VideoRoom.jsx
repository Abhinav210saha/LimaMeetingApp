import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { use } from 'react'
import { useParams } from 'react-router-dom';

function VideoRoom() {
      let { roomId } = useParams();

  const myMeeting = async (element) => {
    const appId = 1118441628;
    const serverSecret = "02f17cf9f19f691b9db46f1fec58e68e";
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