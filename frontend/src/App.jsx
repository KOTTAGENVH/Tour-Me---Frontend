import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './Pages/Authentication/SignIn';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<SignIn/>} />
     </Routes>
     </BrowserRouter>
     </div>
  );
}

export default App;
