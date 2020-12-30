import React, { useRef } from 'react';
import productApi from '../../api/productApi';

export default function CommentInput({
  textAreaStyle,
  parentComment,
  productID,
  setListComment,
}) {
  const commentText = useRef(null);
  const sendComment = async () => {
    if (commentText.current.value.trim() === '') return;
    const user = JSON.parse(localStorage.getItem('userInformation'));
    try {
      const res = await productApi.addComment({
        username: user.username,
        name: user.name,
        content: commentText.current.value,
        createdTime: new Date(),
        productID: productID,
        parentComment: parentComment,
      });
      commentText.current.value = '';
      setListComment(res);
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
