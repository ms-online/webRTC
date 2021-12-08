import React, { useState } from 'react';
import JoinRoomInputs from './JoinRoomInputs';
import { connect } from 'react-redux';
import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox';
import { setConnectOnlyWithAudio } from '../../store/actions';
import ErrorMessage from './ErrorMessage';
import JoinRoomButtons from './JoinRoomButtons';
const JoinRoomContent = (props) => {
  const { isRoomHost, setConnectOnlyWithAudio, connectOnlyWithAudio } = props;
  const [roomIdValue, setRoomIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');

  //加入房间
  const handleJoinRoom = () => {
    //加入房间
    console.log('成功加入房间');
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
      <ErrorMessage errorMessage='会议ID不正确！' />
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
