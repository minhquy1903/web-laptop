import React, { useRef, useState } from 'react';

import productApi from '../../api/productApi';
import Modal from '../Modal/Modal';
import Notification from '../Notification/Notification';

import { v1 as uuid } from 'uuid';

export default function CommentInput({
  textAreaStyle,
  parentComment,
  productID,
  setListComment,
}) {
  const [open, setOpen] = useState(false);
  const commentText = useRef(null);

  const closeModal = () => {
    setOpen(false);
  };

  const sendComment = async () => {
    const userLocal = localStorage.getItem('userInformation');
    if (userLocal === null) {
      setOpen(true);
      commentText.current.value = '';

      return;
    }

    if (commentText.current.value.trim() === '') return;
    const user = JSON.parse(localStorage.getItem('userInformation'));
    const id = uuid();
    let _date = new Date();
    let date = `${_date.getDate()}-${
      _date.getMonth() + 1
    }-${_date.getFullYear()}`;
    try {
      const res = await productApi.addComment({
        id: id,
        username: user.username,
        name: user.name,
        avatar: user.avatar,
        content: commentText.current.value,
        createdTime: date,
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
            rows={1}
            style={textAreaStyle}
            placeholder='Mời bạn để lại bình luận'
            onKeyPress={(e) => (e.key === 'Enter' ? sendComment() : null)}
          />
        )}

        <button onClick={() => sendComment()}>Gửi</button>
      </div>
      <Modal openModal={open} closeModal={closeModal}>
        <Notification
          type='OK'
          content={'Bạn cần đăng nhập để có thể bình luận'}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
}
