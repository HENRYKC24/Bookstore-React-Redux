import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { removeFromServer } from '../redux/books/books';
import EditBook from './update/EditBook';
import Comments from './update/Comments';
import UpdateProgress from './update/UpdateProgress';

const Book = ({
  title,
  category,
  id,
  index,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [progressValue, setProgressValue] = useState(250);
  const [showProgress, setShowProgress] = useState(false);
  const [title2, author, , chapters, currChapter] = title.split('<*)$!?^|^?!$(*>');
  const dispatch = useDispatch();
  const remove = () => dispatch(removeFromServer(id));

  useEffect(() => {
    const secondCircle = document.querySelector(`.some${index}`);
    const chap = parseInt(chapters, 10);
    const currChap = parseInt(currChapter, 10);
    const fraction = 251 / chap;
    const secondStep = fraction * currChap;
    const thirdStep = 251 - secondStep;
    secondCircle.style.strokeDashoffset = thirdStep;
  }, [progressValue]);
  return (
    <div className="book">
      {editMode && (
        <EditBook
          title={title}
          category={category}
          id={id}
          setEditBook={setEditMode}
        />
      )}
      {showComments && (
        <Comments
          title={title}
          id={id}
          category={category}
          setShowComments={setShowComments}
        />
      )}
      {showProgress && (
        <UpdateProgress
          title={title}
          id={id}
          category={category}
          setShowProgress={setShowProgress}
          setProgressValue={setProgressValue}
        />
      )}
      <div className="part1">
        <div className="part1-first">
          <div className="category">{category}</div>
          <div className="title">{title2}</div>
          <div className="author">{author}</div>
        </div>
        <div className="part1-second">
          <button
            onClick={() => setShowComments((prev) => !prev)}
            className="comment-button"
            type="button"
          >
            Comment
          </button>
          |
          <button className="remove-button" type="button" onClick={remove}>
            Remove
          </button>
          |
          <button
            onClick={() => setEditMode((prev) => !prev)}
            className="edit-button"
            type="button"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="part2And3">
        <div className="part2">
          <svg className="svg" width="150" height="150">
            <circle className="circle-back" cx="50" cy="80" r="40" />
            <circle className={`some${index} circle-front`} cx="50" cy="80" r="40" />
          </svg>
          <div>
            <div className="percent">{`${parseInt((100 / parseInt(chapters, 10)) * parseInt(currChapter, 10), 10)}%`}</div>
            <div className="completed">completed</div>
          </div>
        </div>
        <div className="pipe" />
        <div className="part3">
          <div className="current-chapter">Current Chapter</div>
          <div className="chapter">
            <span className="capterXOfY">{`Chapter ${currChapter} of ${chapters}`}</span>
          </div>
          <button
            onClick={() => setShowProgress((prev) => !prev)}
            className="update-button"
            type="button"
          >
            Update Progress
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};

export default Book;
