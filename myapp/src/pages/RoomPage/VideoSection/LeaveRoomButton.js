import React from 'react';

const LeaveRoomButton = () => {
  const handleRoomDisconnection = () => {
    // 返回站点主地址，并不包括（？）之后的查询字串。
    const siteUrl = window.location.origin;
    // 当前页面打开URL页面
    window.location.href = siteUrl;
  };
  return (
    <div className='video_button_container'>
      <button className='video_button_end' onClick={handleRoomDisconnection}>
        离开房间
      </button>
    </div>
  );
};

export default LeaveRoomButton;
