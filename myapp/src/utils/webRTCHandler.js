//指定请求的媒体类型和相对应的参数。
const defaultConstraints = {
  audio: true,
  video: true,
};

let localStream;

//获取本地预览及初始化房间连接
export const getLocalPreviewAndInitRoomConnection = (
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
      //初始化房间连接
    })
    .catch((error) => {
      console.log('无法获取本地媒体流！');
      console.log(error);
    });
};

//显示本地视频
const showLocalVideoPreview = (stream) => {};
