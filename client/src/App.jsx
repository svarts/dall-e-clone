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
            <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
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