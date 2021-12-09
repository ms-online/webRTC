const defaultConstraints = {
  audio: true,
  video: true,
};

let localStream;
export const getLocalPreviewAndInitRoomConnection = (
  isRoomHost,
  identity,
  roomId = null
) => {
  //采集本地音视频流（获取媒体输入的访问权限）
  navigator.mediaDevices
    .getUserMedia(defaultConstraints)
    .then((stream) => {
      localStream = stream;
      //预览本地视频
      showLocalVideoPreview(localStream);
      //初始化房间连接
    })
    .catch((error) => {
      console.log('无法获取本地媒体流！');
      console.log(error);
    });
};

const showLocalVideoPreview = (stream) => {
  //显示本地视频
};
