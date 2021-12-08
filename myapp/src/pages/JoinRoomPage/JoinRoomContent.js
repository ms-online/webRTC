import React, { useState } from 'react';
import JoinRoomInputs from './JoinRoomInputs';
import { connect } from 'react-redux';
import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox';
import { setConnectOnlyWithAudio } from '../../store/actions';
import ErrorMessage from './ErrorMessage';
const JoinRoomContent = (props) => {
  const { isRoomHost, setConnectOnlyWithAudio, connectOnlyWithAudio } = props;
  const [roomIdValue, setRoomIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');

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
