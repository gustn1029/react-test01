import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'

import './style/common.scss';

import Main from './pages/Main';
import CustomList from './pages/CustomList';
import TodoList from './pages/TodoList';

function App() {
  return (
    <div className='inner'>
      <header>
        <nav>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/name">name</Link></li>
            <li><Link to="/todo">todo</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/name" element={<CustomList />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </div>
  );
}



export default App;
