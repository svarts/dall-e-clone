import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import logo from './assets/logo.svg';
import { Home, CreatePost } from './pages';

const App = () => (
    <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 gradient-bg">
            <Link to="/">
                <img src={logo} alt="logo" className="w-28 object-contain" />
            </Link>
            <Link to="/create-post" className="font-inter font-medium text-white bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 px-4 py-2 rounded-md">Create</Link>
        </header>
        <main className="sm:p-8 px-4 py-8 w-full bg-[#000000] min-h-[calc(100vh-73px)]">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-post" element={<CreatePost />} />
            </Routes>
        </main>
    </BrowserRouter>
);

export default App;