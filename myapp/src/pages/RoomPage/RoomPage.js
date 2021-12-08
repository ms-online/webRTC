import React from 'react';
import ChatSection from './ChatSection/ChatSection';
import ParticipantsSection from './ParticipantsSection/ParticipantsSection';

import './Roompage.css';
import VideoSection from './VideoSection/VideoSection';
const RoomPage = () => {
  return (
    <div className='room_container'>
      <ParticipantsSection />
      <VideoSection />
      <ChatSection />
    </div>
  );
};

export default RoomPage;
