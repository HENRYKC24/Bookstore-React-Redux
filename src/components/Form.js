import React from 'react';
import Option from './Option';

const Form = () => {
  const bookCategories = [
    { value: 'category1', content: 'Category 1' },
    { value: 'category2', content: 'Category 2' },
    { value: 'category3', content: 'Category 3' },
    { value: 'category4', content: 'Category 4' },
  ];

  const Options = () => (
    bookCategories.map((category) => {
      const { value, content } = category;
      return <Option key={Math.random()} value={value} content={content} />;
    })
  );

  return (
    <div>
      <h1>Add New Book</h1>
      <form>
        <input type="text" placeholder="Book title" className="book-title" />
        <input type="text" placeholder="Auto" className="auto" />
        <select name="books" id="books">
          {Options()}
        </select>
        <button type="button" className="add-book-btn">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
