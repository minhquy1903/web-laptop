import React, { useRef } from 'react';
import axios from 'axios';

export default function CommentInput({
  textAreaStyle,
  parentComment,
  productID,
}) {
  const commentText = useRef(null);
  const sendComment = () => {
    const user = JSON.parse(localStorage.getItem('infoUser'));
    console.log(user.name);
    try {
      const res = axios.post('api/product/comment/add', {
        username: user.username,
        name: user.name,
        content: commentText.current.value,
        createdTime: new Date(),
        productID: productID,
        parentComment: parentComment,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='comment_textarea'>
        <textarea
          ref={commentText}
          style={textAreaStyle}
          placeholder='Mời bạn để lại bình luận'
        />
        <button onClick={() => sendComment()}>Gửi</button>
      </div>
    </>
  );
}
