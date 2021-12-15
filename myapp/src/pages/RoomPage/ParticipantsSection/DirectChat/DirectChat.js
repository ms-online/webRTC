import React, { useState } from 'react';
import ConversationNotChosen from './ConversationNotChosen';
import DirectChatHeader from './DirectChatHeader';
import MessagesContainer from './MessagesContainer';
import NewMessage from './NewMessage';
import { connect } from 'react-redux';
const DirectChat = ({ activeConversation, directChatHistory }) => {
  const [messages, setMessages] = useState([]);
  return (
    <div className='direct_chat_container'>
      <DirectChatHeader activeConversation={activeConversation} />
      <MessagesContainer messages={messages} />
      <NewMessage />
      {!activeConversation && <ConversationNotChosen />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(DirectChat);
