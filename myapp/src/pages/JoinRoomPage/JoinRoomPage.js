import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const JoinRoomPage = (props) => {
  //useLocaltion返回URL的location对象，search属性返回的是问号之后的查询字符串
  const search = useLocation().search;

  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get('host');

    if (isRoomHost) {
      //将主持人的状态保存到redux的store里面
    }
  }, []);
  return (
    <div className='join_room_page_container'>
      <div className='join_room_page_panel'></div>
    </div>
  );
};

export default JoinRoomPage;
