import React from 'react';

const Comment = ({ content, name, createdTime, setShowReplyInput, avatar }) => {
  return (
    <div className='comment'>
      <div className='avatar'>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='comment-content'>
        <span className='name'>{name}</span>
        <p className='comment-text'>{content}</p>
        <div className='comment-bottom'>
          <span
            className='reply-btn'
            onClick={() => {
              setShowReplyInput(true);
            }}>
            Trả lời
          </span>
          <span className='created-time'>{createdTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
