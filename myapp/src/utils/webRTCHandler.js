import store from '../store/store';
import { setShowOverlay } from '../store/actions';
import Peer from 'simple-peer';
import * as wss from './wss';
//指定请求的媒体类型和相对应的参数。
const defaultConstraints = {
  audio: true,
  video: true,
};

let localStream;

//获取本地预览及初始化房间连接
export const getLocalPreviewAndInitRoomConnection = async (
  isRoomHost,
  identity,
  roomId = null
) => {
  //采集本地音视频流（获取媒体输入的访问权限）
  navigator.mediaDevices
    .getUserMedia(defaultConstraints)
    .then((stream) => {
      //   console.log('成功获取本地媒体流');
      localStream = stream;
      //预览本地视频
      showLocalVideoPreview(localStream);

      //派发action隐藏加载动画
      store.dispatch(setShowOverlay(false));

      //初始化房间连接
      isRoomHost ? wss.createNewRoom(identity) : wss.joinRoom(roomId, identity);
    })
    .catch((error) => {
      console.log('无法获取本地媒体流！');
      console.log(error);
    });
};

let peers = {};

//配置STUN服务器
const getConfiguration = () => {
  return {
    iceServers: [
      {
        urls: 'stun:stun1.l.google.com:19302',
      },
    ],
  };
};

//准备webRTC连接
export const prepareNewPeerConnection = (connUserSocketId, isInitator) => {
  const configuration = getConfiguration();
  //实例化对等连接对象
  peers[connUserSocketId] = new Peer({
    initiator: isInitator,
    config: configuration,
    stream: localStream,
  });

  //信令数据传递
  peers[connUserSocketId].on('signal', (data) => {
    //==>peer1.on('signal', data)
    //data - webrtc offer, answer, or ice candidate
    const signalData = {
      signal: data,
      connUserSocketId: connUserSocketId,
    };
    wss.signalPeerData(signalData);
  });
};

export const handleSignalingData = (data) => {
  //将信令数据添加到对等连接中
  peers[data.connUserSocketId].signal(data.signal); //==> peer2.signal(data)
};

//显示本地视频
const showLocalVideoPreview = (stream) => {};
