import React, { useEffect } from 'react';
import axios from 'axios';

import CommentInput from './CommentInput';
import MainComment from './MainComment';

export default function CommentSection({ ListComment, productID }) {
  useEffect(() => {});
  console.log(ListComment.comments.length);
  return (
    <div className='comment-box'>
      <h2 className='title'>
        <span>Bình luận</span>
        <span className='count'>100 bình luận</span>
      </h2>
      <div className='list-comment'>
        <p className='title-comment'>
          <strong>Bình luận của bạn</strong>
        </p>
        <CommentInput productID={productID} />
        {ListComment.comments.map((comment) => {
          return <MainComment comment={comment} productID={productID} />;
        })}
      </div>
    </div>
  );
}
