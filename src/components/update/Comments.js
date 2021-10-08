import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { removeFromServer, sendToServer } from '../../redux/books/books';

const Comments = (props) => {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState({ name: '', comment: '' });
  const { title, setShowComments } = props;
  const [, , , , , comments] = title.split('<*)$!?^|^?!$(*>');
  const allComments = () => (
    JSON.parse(comments).map((comment) => (
      <tr className="comment-tr" key={uuidv4()}>
        <td>{comment.name}</td>
        <td>{comment.comment}</td>
        <td>{comment.date}</td>
      </tr>
    )));

  const hangleChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onAddComment = () => {
    if (!newComment.name && !newComment.comment) {
      return;
    }
    const { id, title, category } = props;
    const [title2, author, completed, chapters, currChapter, comments, timeStamp] = title.split('<*)$!?^|^?!$(*>');
    dispatch(removeFromServer(id));
    newComment.date = new Date().toDateString();
    const jsonComment = JSON.parse(comments);
    jsonComment.push(newComment);

    const newComments = JSON.stringify(jsonComment);
    const newState = {
      title: `${title2}<*)$!?^|^?!$(*>${author}<*)$!?^|^?!$(*>${completed}<*)$!?^|^?!$(*>${chapters}<*)$!?^|^?!$(*>${currChapter}<*)$!?^|^?!$(*>${newComments}<*)$!?^|^?!$(*>${timeStamp}`,
      category,
      item_id: uuidv4(),
    };
    setTimeout(() => dispatch(sendToServer(newState)), 1000);
  };

  return (
    <div className="edit-container">
      <div className="comment-box">
        <h1>
          All Comments
          {' '}
          {JSON.parse(comments).length}
        </h1>
        <table className="comment-table">
          <tbody className="comment-tb">
            <tr className="comment-tr">
              <th>Name</th>
              <th>Comment</th>
              <th>Date</th>
            </tr>
            {allComments()}
          </tbody>
        </table>
        <h1 className="add-heading">Add A Comment</h1>
        <form className="comment-form">
          <input
            name="name"
            type="text"
            onChange={hangleChange}
            value={newComment.name}
            placeholder="Name"
            className="name"
          />
          <textarea
            name="comment"
            type="text"
            onChange={hangleChange}
            value={newComment.comment}
            placeholder="Add your comment"
            className="comment"
          />
          <div className="comment-buttons">
            <button className="cancel" onClick={() => setShowComments((prev) => !prev)} type="button">Cancel</button>
            <button className="add-comment" onClick={onAddComment} type="button">Add Comment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Comments.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  setShowComments: propTypes.func.isRequired,
};

export default Comments;
