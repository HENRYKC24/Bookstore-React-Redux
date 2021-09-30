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
    const newState = {
      ...book,
      item_id: uuidv4(),
    };
    dispatch(sendToServer(newState));
  };

  const { title, category } = book;

  return (
    <div>
      <h1>Add New Book</h1>
      <form>
        <input
          name="title"
          type="text"
          onChange={hangleChange}
          value={title}
          placeholder="Book title"
          className="book-title"
        />
        <select
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
