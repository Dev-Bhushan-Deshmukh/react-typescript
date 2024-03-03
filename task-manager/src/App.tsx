import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/hoem';
const App: React.FC = () => {
  return (
    <BrowserRouter>
		<Routes>
		<Route path='/' element={<Home/>}/>
		</Routes>
	</BrowserRouter>
  );
}

export default App;
