import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { sendToServer } from '../redux/books/books';
import Option from './Option';

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    category: 'Fiction',
    author: '',
    chapters: '',
    currChapter: '0',
    completed: '0%',
    comments: [],
  });

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

  const hangleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onAddBook = () => {
    const {
      title,
      author,
      completed,
      category,
      chapters,
      currChapter,
      comments,
    } = book;
    if (!title || !author || !chapters) {
      return false;
    }
    const newState = {
      title: `${title}<*)$!?^|^?!$(*>${author}<*)$!?^|^?!$(*>${completed}<*)$!?^|^?!$(*>${chapters}<*)$!?^|^?!$(*>${currChapter}<*)$!?^|^?!$(*>${comments}<*)$!?^|^?!$(*>${new Date().getTime()}`,
      category,
      item_id: uuidv4(),
    };
    dispatch(sendToServer(newState));
    setBook(() => ({
      title: '',
      category: 'Fiction',
      author: '',
      completed: '0%',
      chapters: '',
      currChapter: '0',
    }));
    return true;
  };

  const {
    title,
    category,
    author,
    chapters,
  } = book;

  return (
    <div className="form-container">
      <h1 className="add-new">Add New Book</h1>
      <form className="form">
        <input
          name="title"
          type="text"
          onChange={hangleChange}
          value={title}
          placeholder="Book title"
          className="book-title"
        />
        <input
          name="author"
          type="text"
          onChange={hangleChange}
          value={author}
          placeholder="Author"
          className="book-author"
        />
        <input
          name="chapters"
          type="number"
          onChange={hangleChange}
          value={chapters}
          placeholder="Chapters"
          className="book-chapters"
        />
        <select
          className="book-category"
          name="category"
          onChange={hangleChange}
          value={category}
          id="books"
        >
          {Options()}
        </select>
        <button
          onClick={onAddBook}
          type="button"
          className="add-book-btn"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
