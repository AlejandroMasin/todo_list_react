import React, { useState, useEffect } from 'react';
import './style.css';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('todoItems')) || [];
    setTodoItems(storedItems);
  }, []);

  const saveItemsToStorage = (items) => {
    localStorage.setItem('todoItems', JSON.stringify(items));
  };

  const addItem = () => {
    if (inputValue.trim() !== '') {
      const updatedItems = [...todoItems, inputValue];
      setTodoItems(updatedItems);
      saveItemsToStorage(updatedItems);
      setInputValue('');
    }
  };

  const toggleDone = (index) => {
    const updatedItems = [...todoItems];
    updatedItems[index] = updatedItems[index].startsWith('DONE:') ? updatedItems[index].substr(6) : `DONE: ${updatedItems[index]}`;
    setTodoItems(updatedItems);
    saveItemsToStorage(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = [...todoItems];
    updatedItems.splice(index, 1);
    setTodoItems(updatedItems);
    saveItemsToStorage(updatedItems);
  };

  return (
    <div className="container">
      <div className="box">
        <h2>To Do List</h2>
        <input
          type="text"
          id='inputBx'
          placeholder="Write here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              addItem();
            }
          }}
        />
        <ul id="list">
          {todoItems.map((item, index) => (
            <li
              key={index}
              className={item.startsWith('DONE:') ? 'done' : ''}
              onMouseDown={() => toggleDone(index)}
            >
              {item}
              <i onClick={() => removeItem(index)}></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;