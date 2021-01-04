import React, { useState, useEffect } from 'react';

import CommentInput from './CommentInput';
import MainComment from './MainComment';

export default function CommentSection({ ListComment, productID }) {
  console.log(ListComment);
  const [listComment, setListComment] = useState(ListComment);
  const filterParentComment = () => {
    return listComment.filter((comment) => comment.parentCommentID === null);
  };
  const filterChildrenComment = () => {
    return listComment.filter((comment) => comment.parentCommentID !== null);
  };

  const [parentComment, setParentComment] = useState(filterParentComment());
  const [childrenComment, setChildrenComment] = useState(
    filterChildrenComment(),
  );
  useEffect(() => {
    setParentComment(filterParentComment());
    setChildrenComment(filterChildrenComment());
  }, [listComment]);
  return (
    <div className='comment-box'>
      <h2 className='title'>
        <span>Bình luận</span>
        <span className='count'>{listComment.length} bình luận</span>
      </h2>
      <div className='list-comment'>
        <p className='title-comment'>
          <strong>Bình luận của bạn</strong>
        </p>
        <CommentInput productID={productID} setListComment={setListComment} />
        {parentComment.map((comment, i) => {
          return (
            <MainComment
              childrenComment={childrenComment}
              key={i}
              comment={comment}
              productID={productID}
              setListComment={setListComment}
            />
          );
        })}
      </div>
    </div>
  );
}
