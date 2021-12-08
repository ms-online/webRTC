import React, { useState } from 'react';
import JoinRoomInputs from './JoinRoomInputs';
import { connect } from 'react-redux';
import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox';
import { setConnectOnlyWithAudio } from '../../store/actions';
import ErrorMessage from './ErrorMessage';
import JoinRoomButtons from './JoinRoomButtons';
import { getRoomExists } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
const JoinRoomContent = (props) => {
  const { isRoomHost, setConnectOnlyWithAudio, connectOnlyWithAudio } = props;
  const [roomIdValue, setRoomIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  //加入房间
  const handleJoinRoom = async () => {
    if (isRoomHost) {
      createRoom();
    } else {
      await joinRoom();
    }
  };

  const joinRoom = async () => {
    const responseMessage = await getRoomExists(roomIdValue);

    const { roomExists, full } = responseMessage;

    if (roomExists) {
      if (full) {
        setErrorMessage('会议房间人数已满，请稍后再试！');
      } else {
        //进入房间
        navigate('/room');
      }
    } else {
      setErrorMessage('会议房间不存在，请验证你的ID是否正确！');
    }
  };

  const createRoom = () => {
    navigate('/room');
  };

  return (
    <>
      <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
      <OnlyWithAudioCheckbox
        connectOnlyWithAudio={connectOnlyWithAudio}
        setConnectOnlyWithAudio={setConnectOnlyWithAudio}
      />
      <ErrorMessage errorMessage={errorMessage} />
      <JoinRoomButtons
        isRoomHost={isRoomHost}
        handleJoinRoom={handleJoinRoom}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setConnectOnlyWithAudio: (onlyWithAudio) =>
      dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(JoinRoomContent);
