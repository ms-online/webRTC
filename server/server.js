//引入模块
const express = require('express');
const http = require('http');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

//初始化
const app = express();
const PORT = process.env.PORT || 5000;
//创建 HTTP 服务器
const server = http.createServer(app);

//cors包解决跨域访问错误
app.use(cors());

//初始化房间和用户
let connectedUsers = [];
let rooms = [];

//创建路由验证房间是否存在
app.get('/api/room-exists/:roomId', (req, res) => {
  const { roomId } = req.params;
  const room = rooms.find((room) => room.id === roomId);

  if (room) {
    //房间存在
    if (room.connectedUsers.length > 3) {
      //房间人数已满
      return res.send({ roomExists: true, full: true });
    } else {
      //房间可以加入
      return res.send({ roomExists: true, full: false });
    }
  } else {
    //房间不存在
    return res.send({ roomExists: false });
  }
});

// 传递server对象，初始化一个io实例
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});
// 服务器监听客户端socketio连接
io.on('connection', (socket) => {
  console.log(`用户已实现socket连接${socket.id}`);

  socket.on('create-new-room', (data) => {
    createNewRoomHandler(data, socket);
  });
});

// socket.io handler
const createNewRoomHandler = (data, socket) => {
  console.log('主持人正在创建会议房间...');
  console.log(data);

  const { identity } = data;

  const roomId = uuidv4();

  //创建新用户（进入会议的人）
  const newUser = {
    identity,
    id: uuidv4(),
    roomId,
    socketId: socket.id,
  };
  //将新用户添加到已连接的用户数组里面
  connectedUsers = [...connectedUsers, newUser];

  //创建新会议房间
  const newRoom = {
    id: roomId,
    connectedUsers,
  };

  //新用户加入会议房间
  socket.join(roomId);
  rooms = [...rooms, newRoom];

  //向客户端发送数据告知会议房间已创建（roomId）
  socket.emit('room-id', { roomId });

  //发送通知告知有新用户加入并更新房间
};

//监听端口号
server.listen(PORT, () => {
  console.log(`服务器正在${PORT}端口号运行...`);
});
