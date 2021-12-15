import React, { useState } from 'react';
import sendMessageButton from '../../../../resources/images/sendMessageButton.svg';
const NewMessage = ({ activeConversation, identity }) => {
  const [message, setMessage] = useState('');

  const handleTextChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    //发送消息
  };

  return (
    <div className='new_message_container new_message_direct_border'>
      <input
        className='new_message_input'
        value={message}
        onChange={handleTextChange}
        placeholder='请输入消息...'
        type='text'
        onKeyDown={handleKeyDown}
      />
      <img
        className='new_message_button'
        src={sendMessageButton}
        onClick={sendMessage}
      />
    </div>
  );
};

export default NewMessage;
