import React, { useState } from 'react';
import SwitchImg from '../../../resources/images/switchToScreenSharing.svg';
import LocalScreenSharingPreview from './LocalScreenSharingPreview';

const constrains = {
  audio: false,
  video: true,
};

const SwitchToScreenSharingButton = () => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);
  const [screenSharingStream, setScreenSharingStream] = useState(null);
  const handleScreenShareToggle = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        //获取本地要共享的媒体资源
        stream = await navigator.mediaDevices.getDisplayMedia(constrains);
      } catch (error) {
        console.log('获取共享屏幕的媒体流失败');
      }
      if (stream) {
        setScreenSharingStream(stream);
        setIsScreenSharingActive(true);
      }
    } else {
      setIsScreenSharingActive(false);
      //停止共享屏幕
      screenSharingStream.getTracks().forEach((track) => track.stop());
      setScreenSharingStream(null);
    }

    // setIsScreenSharingActive(!isScreenSharingActive);
  };
  return (
    <>
      <div className='video_button_container'>
        <img
          src={SwitchImg}
          onClick={handleScreenShareToggle}
          className='video_button_image'
        />
      </div>
      {isScreenSharingActive && (
        <LocalScreenSharingPreview stream={screenSharingStream} />
      )}
    </>
  );
};

export default SwitchToScreenSharingButton;
