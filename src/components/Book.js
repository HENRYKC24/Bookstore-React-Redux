import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { removeFromServer } from '../redux/books/books';
// import BookPropLi from './BookPropLi';

const Book = ({ title, category, id }) => {
  // const data = [
  //   title,
  //   category,
  // ];
  const [title2, author, completed, chapters, currChapter] = title.split('<*)$!?^|^?!$(*>');
  const dispatch = useDispatch();
  const remove = () => dispatch(removeFromServer(id));
  return (
    <div className="book">
      <div className="part1">
        <div className="part1-first">
          <div className="category">{category}</div>
          <div className="title">{title2}</div>
          <div className="author">{author}</div>
        </div>
        <div className="part1-second">
          <button className="comment-button" type="button">
            Comment
          </button>
          |
          <button className="remove-button" type="button" onClick={remove}>
            Remove
          </button>
          |
          <button className="edit-button" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="part2And3">
        <div className="part2">
          <svg className="svg" width="150" height="150">
            <circle className="circle-back" cx="50" cy="80" r="40" />
            <circle className="circle-front" cx="50" cy="80" r="40" />
          </svg>
          <div>
            <div className="percent">{completed}</div>
            <div className="completed">completed</div>
          </div>
        </div>
        <div className="pipe" />
        <div className="part3">
          <div className="current-chapter">Current Chapter</div>
          <div className="chapter">
            <span className="capterXOfY">{`Chapter ${currChapter} of ${chapters}`}</span>
          </div>
          <button className="update-button" type="button">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default Book;
