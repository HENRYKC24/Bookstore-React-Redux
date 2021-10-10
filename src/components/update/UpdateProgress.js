import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { removeFromServer, sendToServer } from '../../redux/books/books';
import Option from '../Option';

const UpdateProgress = ({
  title,
  id,
  category,
  setShowProgress,
  toggleBodyScroll,
}) => {
  const dispatch = useDispatch();
  const [title2, author, completed, chapters,, comments, timeStamp] = title.split('<*)$!?^|^?!$(*>');
  const [setChapter, setSetChapter] = useState(0);

  const Options = () => {
    const chaptersArray = [];
    const num = parseInt(chapters, 10);
    for (let i = 0; i <= num; i += 1) {
      chaptersArray.push(i);
    }
    return chaptersArray.map((num, index) => (
      <Option
        key={Math.random()}
        value={num}
        content={`Chapter ${num}`}
        index={index}
      />
    ));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSetChapter(() => value);
  };

  const closePopup = () => {
    setShowProgress((prev) => !prev);
    toggleBodyScroll();
  };

  const updateProgress = () => {
    dispatch(removeFromServer(id));

    const newState = {
      title: `${title2}<*)$!?^|^?!$(*>${author}<*)$!?^|^?!$(*>${completed}<*)$!?^|^?!$(*>${chapters}<*)$!?^|^?!$(*>${setChapter}<*)$!?^|^?!$(*>${comments}<*)$!?^|^?!$(*>${timeStamp}`,
      category,
      item_id: uuidv4(),
    };
    console.log(newState, 'new state');
    setTimeout(() => dispatch(sendToServer(newState)), 1000);
    toggleBodyScroll();
  };

  return (
    <div className="edit-container">
      <div>
        <span>Select Current Progress</span>
        <select
          className="chapter"
          name="chapter"
          onChange={handleChange}
          value={setChapter}
        >
          {Options()}
        </select>
        <button onClick={closePopup} type="button">
          Cancel
        </button>
        <button onClick={updateProgress} type="button">
          Update Progress
        </button>
      </div>
    </div>
  );
};

UpdateProgress.propTypes = {
  title: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  setShowProgress: propTypes.func.isRequired,
  toggleBodyScroll: propTypes.func.isRequired,
};

export default UpdateProgress;
