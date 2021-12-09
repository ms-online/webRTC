import io from 'socket.io-client';

const SERVER = 'http://localhost:5000';

let socket = null;
//客户端连接 socketio 服务器
export const connectWithSocketIOServer = () => {
  socket = io(SERVER);
  socket.on('connect', () => {
    console.log('成功连接到socket.io 服务器');
    console.log(socket.id);
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
};
