import React from 'react';
import ReactDOM from 'react-dom';
import TodoListDisplay from './components/TodoListDisplay';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoListDisplay />
  </React.StrictMode>,
  document.getElementById('root')
);

