import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import Option from './Option';

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: 'Category 1',
    completed: '0%',
    id: '',
  });

  const bookCategories = [
    { value: 'category1', content: 'Category 1' },
    { value: 'category2', content: 'Category 2' },
    { value: 'category3', content: 'Category 3' },
    { value: 'category4', content: 'Category 4' },
  ];

  const Options = () => (
    bookCategories.map((category, index) => {
      const { value, content } = category;
      return <Option key={Math.random()} index={index} value={value} content={content} />;
    })
  );

  const hangleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { title, author, category } = book;

  return (
    <div>
      <h1>Add New Book</h1>
      <form>
        <input name="title" type="text" onChange={hangleChange} value={title} placeholder="Book title" className="book-title" />
        <input name="author" type="text" onChange={hangleChange} value={author} placeholder="Author" className="author" />
        <select name="category" onChange={hangleChange} value={category} id="books">
          {Options()}
        </select>
        <button
          onClick={() => {
            const newState = {
              ...book,
              id: uuidv4(),
            };
            dispatch(addBook(newState));
          }}
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
