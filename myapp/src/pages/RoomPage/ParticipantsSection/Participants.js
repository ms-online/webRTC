import React from 'react';
import { connect } from 'react-redux';

const SingelParticipant = (props) => {
  const { identity, lastItem, participant } = props;

  return (
    <>
      <p className='participants_paragraph'>{identity}</p>
      {!lastItem && <span className='participants_separator_line'></span>}
    </>
  );
};

const Participants = ({ participants }) => {
  return (
    <div className='participants_container'>
      {participants.map((participant, index) => {
        return (
          <SingelParticipant
            identity={participant.identity}
            lastItem={Participants.length === index + 1}
            participant={participant}
            key={participant.identity}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Participants);
