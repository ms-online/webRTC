import React from 'react';

const messages = [
  {
    content: '大家好！我是Summer',
    identity: 'Summer',
    messageCreatedByMe: true,
  },
  {
    content: '很高兴认识大家',
    identity: 'Summer',
    messageCreatedByMe: true,
  },
  {
    content: '你好，Summer！',
    identity: 'Henry',
    messageCreatedByMe: false,
  },
  {
    content: '欢迎你加入我们！',
    identity: 'Lucy',
    messageCreatedByMe: false,
  },
];

const Message = ({ author, content, sameAuthor, messageCreatedByMe }) => {
  const alignClass = messageCreatedByMe
    ? 'message_align_right'
    : 'message_align_left';

  const authorText = messageCreatedByMe ? '我' : author;

  const contentStyles = messageCreatedByMe
    ? 'message_right_styles'
    : 'message_left_styles';

  return (
    <div className={`message_container ${alignClass}`}>
      {!sameAuthor && <p className='message_title'>{authorText}</p>}
      <p className={`message_content ${contentStyles}`}>{content}</p>
    </div>
  );
};

const Messages = () => {
  return (
    <div className='messages>container'>
      {messages.map((message, index) => {
        const sameAuthor =
          index > 0 && message.identity === messages[index - 1].identity;
        return (
          <Message
            key={`${message.content}${index}`}
            author={message.identity}
            content={message.content}
            sameAuthor={sameAuthor}
            messageCreatedByMe={message.messageCreatedByMe}
          />
        );
      })}
    </div>
  );
};

export default Messages;
