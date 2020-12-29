import React from 'react';

const Comment = ({ content, name, createdTime, setShowReplyInput }) => {
  return (
    <div className='comment'>
      <div className='avatar'>
        <img
          src='https://soicauvn.com/wp-content/uploads/2020/04/20-hinh-anh-gai-xinh-mac-bikini-mau-hong-nhay-sexy-nong-bong-15.jpg'
          alt='avatar'
        />
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
