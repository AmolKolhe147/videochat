import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const {roomID} = useParams();
    // console.log(roomID);
    const meeting = async(element) =>{
        //3342343432
        const appID= 1825452699;
        //cafff2235EXAMPLE
        const serverSecret="d920834bf12893e4d421fbc797773339";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            Date.now().toString(),
            "amolkolhe"
            );

            // Create instance object from Kit Token.
            const zp = ZegoUIKitPrebuilt.create(kitToken);

            zp.joinRoom({
                container: element,
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall,
                },
                    
            });

    };

  return <div ref={meeting} style={{width:"100vw", height:"100vh"}}></div>
  
};

export default Room