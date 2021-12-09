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
