import React, { useState } from 'react';

import Comment from './Comment';
import CommentInput from './CommentInput';

const textAreaStyle = {
  height: '62px',
};

const MainComment = ({ comment, productID }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);

  return (
    <div className='comment-container'>
      <Comment
        content={comment.content}
        name={comment.name}
        createdTime={comment.createdTime}
      />
      <div className='comment-reply'>
        {/* {comment.children.map(() => {
          return (
            <Comment
              content={comment.content}
              username={comment.username}
              createdTime={comment.createdTime}
            />
          );
        })} */}
        {showReplyInput && (
          <CommentInput
            textAreaStyle={textAreaStyle}
            parentComment={comment.username}
            productID={productID}
          />
        )}
      </div>
    </div>
  );
};

export default MainComment;
