import io from 'socket.io-client';
import store from '../store/store';
import { setRoomId, setParticipants } from '../store/actions';
import * as webRTCHandler from './webRTCHandler';
const SERVER = 'http://localhost:5000';

let socket = null;
//客户端连接 socketio 服务器
export const connectWithSocketIOServer = () => {
  socket = io(SERVER);
  socket.on('connect', () => {
    console.log('成功连接到socket.io 服务器');
    console.log(socket.id);
  });
  socket.on('room-id', (data) => {
    const { roomId } = data;
    store.dispatch(setRoomId(roomId));
  });
  socket.on('room-update', (data) => {
    const { connectedUsers } = data;
    store.dispatch(setParticipants(connectedUsers));
  });

  socket.on('conn-prepare', (data) => {
    const { connUserSocketId } = data;

    //已经存在于房间的用户准备webRTC对等连接 ,false意味着发起方在等待接收方准备webRTC
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, false);
  });
};

//主持人创建会议房间
export const createNewRoom = (identity) => {
  const data = {
    identity,
  };
  //向服务器发送创建会议房间的数据（事件）
  socket.emit('create-new-room', data);
};

//加入会议房间
export const joinRoom = (roomId, identity) => {
  //向服务器发送加入会议房间的数据（事件）
  const data = {
    roomId,
    identity,
  };

  socket.emit('join-room', data);
};
