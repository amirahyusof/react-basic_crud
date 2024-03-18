import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl py-10">React CRUD Operations</h1>

      <BrowserRouter>
      <nav>
        <ul className="flex flex-row mx-auto list-none">
          <li className='px-6'>
            <Link to="/">List User</Link>
          </li>
          <li>
            <Link to="user/create">Create User</Link>
          </li>
        </ul>

        <Routes>
          <Route index element={<ListUser />} />
          <Route path='user/create' element={<CreateUser />} />
          <Route path='user/:id/edit' element={<EditUser />} />
        </Routes>
      </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
