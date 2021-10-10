import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Option from '../Option';
import { removeFromServer, sendToServer } from '../../redux/books/books';

const EditBook = ({
  title,
  category,
  id,
  setEditBook,
  toggleBodyScroll,
}) => {
  const bookCategories = [
    { value: 'Fiction', content: 'Fiction' },
    { value: 'Nonfiction', content: 'Nonfiction' },
    { value: 'Drama', content: 'Drama' },
    { value: 'Folktale', content: 'Folktale' },
    { value: 'Poetry', content: 'Poetry' },
  ];
  const Options = () => bookCategories.map((category, index) => {
    const { value, content } = category;
    return (
      <Option
        key={Math.random()}
        index={index}
        value={value}
        content={content}
      />
    );
  });

  const [title2, author, completed, chapters, currChapter, comments, timeStamp] = title.split('<*)$!?^|^?!$(*>');

  const [book, setBook] = useState({
    title: title2,
    author,
    completed,
    category,
    chapters,
    currChapter,
    comments,
    timeStamp,
  });

  const dispatch = useDispatch();

  const hangleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const save = () => {
    dispatch(removeFromServer(id));
    const newState = {
      title: `${book.title}<*)$!?^|^?!$(*>${book.author}<*)$!?^|^?!$(*>${book.completed}<*)$!?^|^?!$(*>${book.chapters}<*)$!?^|^?!$(*>${book.currChapter}<*)$!?^|^?!$(*>${book.comments}<*)$!?^|^?!$(*>${book.timeStamp}`,
      category: book.category,
      item_id: uuidv4(),
    };

    setTimeout(() => dispatch(sendToServer(newState)), 1000);

    setBook(() => ({
      title: '',
      category: 'Fiction',
      author: '',
      completed: '0%',
      chapters: '',
      currChapter: '0',
    }));
    toggleBodyScroll();
    return true;
  };

  const onClickCancel = () => {
    setEditBook((prev) => !prev);
    toggleBodyScroll();
  };

  return (
    <section className="edit-container">
      <form className="edit-form">
        <div>
          <span>Title: </span>
          <input
            name="title"
            type="text"
            onChange={hangleChange}
            value={book.title}
            placeholder="Book title"
            className="book-title"
          />
        </div>
        <div>
          <span>Category: </span>
          <select
            className="book-category"
            name="category"
            onChange={hangleChange}
            value={book.category}
            id="books"
          >
            {Options()}
          </select>
        </div>
        <div>
          <span>Author: </span>
          <input
            name="author"
            type="text"
            onChange={hangleChange}
            value={book.author}
            placeholder="Author"
            className="book-author"
          />
        </div>
        <div>
          <span>Chapters: </span>
          <input
            name="chapters"
            type="number"
            onChange={hangleChange}
            value={book.chapters}
            placeholder="Chapters"
            className="book-chapters"
          />
        </div>
        <div>
          <button onClick={onClickCancel} type="button">Cancel</button>
          <button onClick={save} type="button">Save</button>
        </div>
      </form>
    </section>
  );
};

EditBook.propTypes = {
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  setEditBook: propTypes.func.isRequired,
  toggleBodyScroll: propTypes.func.isRequired,
};

export default EditBook;
