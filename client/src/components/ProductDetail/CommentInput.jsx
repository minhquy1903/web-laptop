import React, { useRef } from 'react';
import axios from 'axios';

export default function CommentInput({
  textAreaStyle,
  parentComment,
  productID,
  setListComment,
}) {
  const commentText = useRef(null);
  const sendComment = async () => {
    if (commentText.current.value.trim() === '') return;
    const user = JSON.parse(localStorage.getItem('infoUser'));
    try {
      const res = await axios.post('api/product/comment/add', {
        username: user.username,
        name: user.name,
        content: commentText.current.value,
        createdTime: new Date(),
        productID: productID,
        parentComment: parentComment,
      });
      commentText.current.value = '';
      setListComment(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='comment_textarea'>
        {textAreaStyle === undefined ? (
          <textarea
            ref={commentText}
            placeholder='Mời bạn để lại bình luận'
            onKeyPress={(e) => (e.key === 'Enter' ? sendComment() : null)}
          />
        ) : (
          <textarea
            autoFocus={true}
            ref={commentText}
            style={textAreaStyle}
            placeholder='Mời bạn để lại bình luận'
            onKeyPress={(e) => (e.key === 'Enter' ? sendComment() : null)}
          />
        )}

        <button onClick={() => sendComment()}>Gửi</button>
      </div>
    </>
  );
}
