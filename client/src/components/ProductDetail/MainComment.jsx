import React, { useState, useEffect } from 'react';

import Comment from './Comment';
import CommentInput from './CommentInput';

const textAreaStyle = {
  height: '62px',
};

const MainComment = ({
  comment,
  productID,
  childrenComment,
  setListComment,
}) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const filterReplyComment = () => {
    return childrenComment.filter(
      (element) => element.parentCommentID === comment.username,
    );
  };
  const [replyComment, setReplyComment] = useState(filterReplyComment());
  useEffect(() => {
    setReplyComment(filterReplyComment());
  }, [childrenComment]);
  return (
    <div className='comment-container'>
      <Comment
        content={comment.content}
        name={comment.name}
        createdTime={comment.createdTime}
        setShowReplyInput={setShowReplyInput}
      />
      <div className='comment-reply'>
        {replyComment.map((comment, i) => {
          return (
            <Comment
              setShowReplyInput={setShowReplyInput}
              key={i}
              content={comment.content}
              name={comment.name}
              createdTime={comment.createdTime}
            />
          );
        })}
        {showReplyInput && (
          <CommentInput
            textAreaStyle={textAreaStyle}
            parentComment={comment.username}
            productID={productID}
            setListComment={setListComment}
          />
        )}
      </div>
    </div>
  );
};

export default MainComment;
