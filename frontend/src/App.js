import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl py-4">React CRUD Operations</h1>

      <BrowserRouter>
      <nav>
        <ul className="flex flex-row list-none py-8 px-10 text-lg text-white">
          <li className='px-6 hover:underline'>
            <Link to="/">Create User</Link>
          </li>
          <li className='hover:underline'>
            <Link to="user/list">List User</Link>
          </li>
        </ul>

        <Routes>
          <Route index element={<CreateUser />} />
          <Route path='/user/list' element={<ListUser />} />
          <Route path='/user/:id/edit' element={<EditUser />} />
        </Routes>
      </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
